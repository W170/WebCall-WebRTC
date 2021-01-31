import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import * as reducers from './reducers'

const middleware = applyMiddleware(promise, thunk, createLogger())
const middlewares = [middleware]

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

const rootReducer = (state, action) => {
  return combineReducers(reducers)(state, action)
}

const store = createStore(rootReducer, compose(...middlewares))

export default store
export const dispatch = store.dispatch
