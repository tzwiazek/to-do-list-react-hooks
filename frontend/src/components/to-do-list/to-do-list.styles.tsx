import styled from 'styled-components';

export const ToDoListContainer = styled.div<any>`
  text-align:center;
  border:1px solid #9da0a4;
  position:absolute;
  left:50%;
  top:50%;
  -webkit-transform:translate(-50%, -50%);
  transform:translate(-50%, -50%);
  min-width:350px;
  border-radius:6px;

  @media (max-width: 480px) {
    min-width:auto;
    width:100vw;
  }

  &::after {
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    -webkit-box-shadow:inset 0px -4px 6px 0px gray;
    box-shadow:inset 0px -4px 6px 0px gray;
  }

  &::after {
    left:0px;
    top:4px;
    z-index:-1;
    border-radius:4px;
  }
`;