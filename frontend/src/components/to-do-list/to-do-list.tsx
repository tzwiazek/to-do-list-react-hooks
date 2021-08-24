import React, { useState, Dispatch, SetStateAction, useContext } from 'react';
import Task from "./task/task";
import NewTask from './new-task/new-task';
import { ToDoInterface } from 'src/shared/interfaces/to-do.interface';
import { ToDoListContainer } from './to-do-list.styles';
import plusIcon from "../../assets/images/plus.svg";
import settingsIcon from "../../assets/images/settings.svg";
import { ToDoListHeader, ToDoListHeaderElement, ToDoListHeaderImage, ToDoListHeaderTitle } from './new-task/new-task.styles';
import { TodosContext } from 'src/contexts/todos.context';
import { NotificationContext } from 'src/contexts/notifications.context';
import Notifications from '../notifications/notifications';

const ToDoListComponent = (): JSX.Element => {
  const toDoList: ToDoInterface[] = useContext(TodosContext);
  const [notificationError]: [{data: string}, React.Dispatch<{data: string}>] = useContext(NotificationContext);
  const [showForm, setShowForm]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [showCompletedTasks, setShowCompletedTasks]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

  return (
    <>
      <ToDoListContainer>
        <ToDoListHeader>
          <ToDoListHeaderElement onClick={() => setShowForm(!showForm)}>
            <ToDoListHeaderImage src={plusIcon} alt="add new task" />
          </ToDoListHeaderElement>

          <ToDoListHeaderTitle>To-Do List</ToDoListHeaderTitle>
          
          <ToDoListHeaderElement onClick={() => setShowCompletedTasks(!showCompletedTasks)}>
            <ToDoListHeaderImage src={settingsIcon} alt="toggle tasks" />
          </ToDoListHeaderElement>
        </ToDoListHeader>

        {showForm && <NewTask />}

        {toDoList && toDoList.map((task: ToDoInterface) => (
          <Task key={task._id} task={task} showCompletedTasks={showCompletedTasks} />
        ))}
      </ToDoListContainer>
      
      {notificationError.data.length > 0 && <Notifications message={notificationError} />}
    </>
  )
}

export default ToDoListComponent;