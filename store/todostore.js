import React from 'react';
import {createStore, combineReducers} from 'redux';
import todoReducer from '../reducer/todoreducer';

import todoReduce from '../reducer/todoreducer';

const rootReducer = combineReducers({
  todosReducer: todoReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
