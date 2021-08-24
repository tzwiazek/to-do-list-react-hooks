import styled from 'styled-components';

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

export const ToDoListCheckbox = styled.input<any>`
  padding:0;
  height:initial;
  width:initial;
  margin-bottom:0;
  display:none;
  cursor:pointer;

  &:checked + label:after {
    content:'';
    display:block;
    position:absolute;
    top:-7px;
    left:14px;
    width:6px;
    height:24px;
    border:solid #676664;
    border-width:0 2px 2px 0;
    transform:rotate(45deg);
  }
`;

export const ToDoListLabel = styled.label<any>`
  position:relative;
  cursor:pointer;

  &::before {
    content:'';
    -webkit-appearance:none;
    background-color:transparent;
    border:2px solid #676664;
    padding:10px;
    display:inline-block;
    position:relative;
    vertical-align:middle;
    cursor:pointer;
    margin-right:5px;
  }
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

  &.active {
    text-decoration:none;
  }

  &.done {
    text-decoration:line-through;
  }
`;

export const ToDoListRemove = styled.div<any>`
  background:#e6e6e6;
  width:45px;
  height:45px;
  min-width:45px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`;