import styled from 'styled-components';

export const ToDoListHeader = styled.div<any>`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:8px 12px;
  background:#965015;
  background-image:linear-gradient(
  to bottom,
    rgba(200, 150, 77, 1) 0%,
    rgba(200, 150, 77, 0) 15%,
    rgba(200, 150, 77, 0) 85%,
    rgba(200, 150, 77, 1) 100%
  );
  text-shadow:1px 1px black;
`;

export const ToDoListHeaderElement = styled.div<any>`
  display:flex;
  justify-content:center;
  align-items:center;
  border:1px solid black;
  padding:6px 8px;
  border-radius:6px;
  cursor:pointer;
`;

export const ToDoListHeaderImage = styled.img<any>`
  width:14px;
  height:14px;
`;

export const ToDoListHeaderTitle = styled.div<any>`
  color:#f0bf84;
  font-size:17px;
`;

export const ToDoListWrapper = styled.form<any>`
  width:100%;
  max-height:calc(100vh - 90px);
  overflow-y:auto;
  overflow-x:auto;
`;

export const ToDoListContainer = styled.div<any>`
  height:inherit;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  height:45px;
  border-bottom:1px solid #676664;
`;

export const ToDoListCheckboxContainer = styled.div<any>`
  height:100%;
  min-width:60px;
  background:#e6e6e6;
  display:flex;
  align-items:center;
  justify-content:center;
  border-right:4px double #676664;
`;

export const ToDoListDescription = styled.input<any>`
  height:100%;
  width:100%;
  background:#e6e6e6;
  border:none;
  padding:0 0 0 15px;
  color:black;

  &:focus {
    outline:0;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow:0 0 0px 1000px #e6e6e6 inset;
  }
`;
