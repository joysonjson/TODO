import {act} from 'react-test-renderer';
import {ADD_TODO, DELETE_TODO} from '../actions/types';

const initialState = {
  todolist: [
    {
      id: '1',
      todo: 'Write react ',
    },
    {
      id: '2',
      todo: 'Write swift',
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todolist: state.todolist.concat({
          id: Math.random(),
          todo: action.data,
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        todolist: state.todolist.filter((item) => item.id !== action.data),
      };

    default:
      return state;
  }
};
export default todoReducer;
