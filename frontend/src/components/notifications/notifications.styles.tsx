import styled from 'styled-components';

export const NotificationContainer = styled.div<any>`
  display:flex;
  bottom:0;
  margin:auto;
  background:white;
  color:red;
  position:absolute;
  justify-content:center;
  align-items:center;
  width:100%;
  height:40px;
  opacity:1;
  visibility:visible;
  animation:fadeOut 4s;
  animation-fill-mode:forwards;

  @keyframes fadeOut {
    0% { opacity: 1;}
    50% { opacity: 1;}
    100% { opacity: 0;}
 } 
`;