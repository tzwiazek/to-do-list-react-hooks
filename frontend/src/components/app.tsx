import React from 'react';
import { NotificationsProvider } from 'src/contexts/notifications.context';
import { TodosProvider } from '../contexts/todos.context';
import ToDoListComponent from './to-do-list/to-do-list';

const App = (): JSX.Element => {
  return (
    <>
      <NotificationsProvider>
        <TodosProvider>
          <ToDoListComponent />
        </TodosProvider>
      </NotificationsProvider>
    </>
  )
}

export default App;