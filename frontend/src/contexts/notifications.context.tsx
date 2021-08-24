import React, { createContext, Dispatch, useReducer } from 'react';

export const NotificationContext: React.Context<[{data: string}, React.Dispatch<{data: string}>]> =
  createContext<[{data: string}, React.Dispatch<{data: string}>]>([{data: ''}, () => {}]);

export function NotificationsProvider({ children }: { children: React.ReactNode}): JSX.Element {
  const [state, dispatch]: [{data: string}, Dispatch<{data: string}>] =
    useReducer((state: {data: string}, action: {data: string}) => {
      return {data: action.data}
    }, {data: ''});

  return (
    <NotificationContext.Provider value={[state, dispatch]}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationsProvider;