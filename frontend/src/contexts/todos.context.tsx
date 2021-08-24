import React, { createContext, useContext, useEffect } from 'react';
import { ToDoInterface } from 'src/shared/interfaces/to-do.interface';
import { Action } from 'src/shared/types/todos-action';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todosReducer from '../reducers/todos.reducer';
import { NotificationContext } from './notifications.context';

export const TodosContext: React.Context<ToDoInterface[]> = createContext<ToDoInterface[]>([]);
export const DispatchContext: React.Context<React.Dispatch<Action>> = createContext<React.Dispatch<Action>>(() => {});

export function TodosProvider({ children }: { children: React.ReactNode}): JSX.Element {
  const [_, dispatchError]: [{data: string}, React.Dispatch<{data: string}>] = useContext(NotificationContext);
  const [todos, dispatch]: [ToDoInterface[], React.Dispatch<Action>] = useLocalStorageReducer(
    'todos',
    todosReducer,
    []
  );

  useEffect(() => {
    const fetchToDoList: () => Promise<ToDoInterface[]> = async () => {
      try {
        const res: Response = await fetch(process.env.REACT_APP_baseURL!);
    
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error);
        }
        
        dispatchError({data: ''});
        const data: ToDoInterface[] = await res.json();
        return data;
      } catch {
        dispatchError({data: 'the task list cannot be displayed'});
        return [];
      }
    }

    const fetchData = async () => {
      const profileData = await fetchToDoList();
      dispatch(profileReady(profileData));
    }
    fetchData();
  }, [dispatch, dispatchError]); 

  const profileReady = (data: ToDoInterface[]): Action => ({
    type: "ASYNC_FETCH_LOAD",
    payload: data
  });


  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

