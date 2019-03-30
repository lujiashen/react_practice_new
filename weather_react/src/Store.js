import {createStore,combineReducers,applyMiddleware} from "redux"

import thunkMiddleware from 'redux-thunk'

import weatherReducer from "./weather/reducer"

const reducer = combineReducers({
    weather: weatherReducer
  });

  const middlewares = [thunkMiddleware];

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  )

  export default store;