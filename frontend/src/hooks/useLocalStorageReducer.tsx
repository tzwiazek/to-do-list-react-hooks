import { useReducer, useEffect, Reducer } from 'react';
import { ToDoInterface } from 'src/shared/interfaces/to-do.interface';
import { Action } from 'src/shared/types/todos-action';

function useLocalStorageReducer(key: string, reducer: Reducer<ToDoInterface[], Action>, defaultValue: ToDoInterface[]): [ToDoInterface[], React.Dispatch<Action>] {
  const [state, dispatch]: [ToDoInterface[], React.Dispatch<Action>] = useReducer(reducer, defaultValue, () => {
    return JSON.parse(window.localStorage.getItem(key) || String(defaultValue)) || defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;
