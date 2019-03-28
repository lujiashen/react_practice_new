
import {createStore, combineReducers} from 'redux';
import {todoReducer} from './todos/reducer';
import {filterReducer} from './filter/reducer';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});


export default createStore(reducer);
