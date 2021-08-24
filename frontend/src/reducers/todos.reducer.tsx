import { ToDoInterface } from 'src/shared/interfaces/to-do.interface';
import { Action } from 'src/shared/types/todos-action';
import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  ASYNC_FETCH_LOAD
} from '../actions/to-do-actions';

const reducer = (state: ToDoInterface[], action: Action): ToDoInterface[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { _id: action._id, title: action.title, body: action.body, isCompleted: false }];
    case EDIT_TODO:
      return state.map((task: ToDoInterface) =>
        task._id === action._id ? { ...task, title: action.title, body: action.body, isCompleted: action.isCompleted } : task
      );
    case REMOVE_TODO:
      return state.filter((task: ToDoInterface) => task._id !== action._id);
    case ASYNC_FETCH_LOAD:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
