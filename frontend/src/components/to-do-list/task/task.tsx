import React, { Dispatch, memo, SetStateAction, useContext, useState } from 'react';
import { EDIT_TODO, REMOVE_TODO } from 'src/actions/to-do-actions';
import { NotificationContext } from 'src/contexts/notifications.context';
import { DispatchContext } from 'src/contexts/todos.context';
import { ToDoInterface } from 'src/shared/interfaces/to-do.interface';
import {
  ToDoListCheckbox,
  ToDoListCheckboxContainer,
  ToDoListContainer,
  ToDoListDescription,
  ToDoListLabel,
  ToDoListRemove
} from './task.styles';

const Task = ({ task, showCompletedTasks }: {
  task: ToDoInterface,
  showCompletedTasks: boolean
}): JSX.Element => {
  const dispatch = useContext(DispatchContext);
  const [_, dispatchError]: [{data: string}, React.Dispatch<{data: string}>] = useContext(NotificationContext);
  const [taskTitle, setTaskTitle]: [string, Dispatch<SetStateAction<string>>] = useState(task.title);
  const [taskDescription, setTaskDescription]: [string, Dispatch<SetStateAction<string>>] = useState(task.body);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      editTask({
        _id: task._id,
        title: taskTitle,
        body: taskDescription,
        isCompleted: task.isCompleted
      })
    }
  }

  const editTask = async (task: ToDoInterface) => {
    try {
      const res: Response = await fetch(process.env.REACT_APP_baseURL! + task._id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error);
      }

      const data: ToDoInterface = await res.json();
      dispatchError({data: ''});
      dispatch({
        type: EDIT_TODO,
        _id: data._id,
        title: data.title,
        body: data.body,
        isCompleted: data.isCompleted
      });
    } catch (err) {
      dispatchError({data: err.message});
    }
  };

  const deleteTask = async () => {
    try {
      await fetch(process.env.REACT_APP_baseURL! + task._id, {
        method: 'DELETE'
      });

      dispatch({ type: REMOVE_TODO, _id: task._id })

    } catch {}
  }

  return(
    <>
      {(showCompletedTasks || !task.isCompleted) &&
        <ToDoListContainer>
          <ToDoListCheckboxContainer>
            <ToDoListCheckbox
              type="checkbox"
              id={task._id}
              onChange={() => editTask({...task, isCompleted: !task.isCompleted})}
              checked={task.isCompleted} />
            <ToDoListLabel htmlFor={task._id} />
          </ToDoListCheckboxContainer>

          <ToDoListDescription
            className={(task.isCompleted ? 'done' : 'active')}
            type="text"
            name="todo"
            value={taskTitle}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <ToDoListDescription
            className={(task.isCompleted ? 'done' : 'active')}
            type="text"
            name="todo"
            value={taskDescription}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskDescription(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <ToDoListRemove onClick={deleteTask}>
            x
          </ToDoListRemove>
        </ToDoListContainer>
       }
    </>
  )
}

export default memo(Task);