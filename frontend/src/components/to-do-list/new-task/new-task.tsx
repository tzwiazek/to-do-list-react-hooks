import React, { useContext, useState } from 'react';
import {
  ToDoListCheckboxContainer,
  ToDoListContainer,
  ToDoListDescription,
  ToDoListWrapper
} from './new-task.styles';
import { DispatchContext } from 'src/contexts/todos.context';
import { Action } from 'src/shared/types/todos-action';
import { ADD_TODO } from 'src/actions/to-do-actions';
import { ToDoInterface } from 'src/shared/interfaces/to-do.interface';
import { NotificationContext } from 'src/contexts/notifications.context';

const NewTask = (): JSX.Element => {
  const dispatch: React.Dispatch<Action> = useContext(DispatchContext);
  const [_, dispatchError]: [{data: string}, React.Dispatch<{data: string}>] = useContext(NotificationContext);
  const [title, setTitle]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('');
  const [description, setDescription]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('');

  const addTask = async () => {
    try {
      const res: Response = await fetch(process.env.REACT_APP_baseURL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body: description })
      })
  
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error);
      }

      const data: ToDoInterface = await res.json();
      dispatchError({data: ''});
      dispatch({
        type: ADD_TODO,
        _id: data._id,
        title: data.title,
        body: data.body
      });
    } catch (err) {
      dispatchError({data: err.message});
    }

    setTitle('');
    setDescription('');
  }

  const handleSubmit = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if ((event.code).toLowerCase() === 'enter') {
      event.preventDefault();
      addTask();
    }
  };

  return(
    <ToDoListWrapper onKeyDown={handleSubmit}>
      <ToDoListContainer>
        <ToDoListCheckboxContainer />

        <ToDoListDescription
          type="text"
          value={title}
          placeholder="Add new title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />

        <ToDoListDescription
          type="text"
          value={description}
          placeholder="Add new description"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
        />
      </ToDoListContainer>
    </ToDoListWrapper>
  )
}

export default NewTask;