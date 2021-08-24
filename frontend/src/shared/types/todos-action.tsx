import { ToDoInterface } from "../interfaces/to-do.interface";

export type Action = {
  type: "ADD_TODO";
  _id: string;
  title: string;
  body: string;
} | {
  type: "EDIT_TODO";
  _id: string;
  title: string;
  body: string;
  isCompleted: boolean;
} | {
  type: "REMOVE_TODO";
  _id: string;
} | {
  type: "ASYNC_FETCH_LOAD";
  payload: ToDoInterface[];
}