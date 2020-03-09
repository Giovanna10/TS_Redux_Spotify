import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import combineReducer from './reducers/combineReducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

export type AppState = ReturnType<typeof combineReducer>

const store = createStore(combineReducer, composeWithDevTools(middlewareEnhancer))

export default store


