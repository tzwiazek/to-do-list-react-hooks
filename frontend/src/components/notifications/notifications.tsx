import React, { useEffect, useState } from 'react';
import { NotificationContainer } from './notifications.styles';

const Notifications = ({ message }: { message: {data: string} }): JSX.Element => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    let timer1: NodeJS.Timeout = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer1);
  }, [message]);

  return (
    <>
      {show && 
        <NotificationContainer>
          {message.data}
        </NotificationContainer>
      }
    </>
  )
}

export default Notifications;