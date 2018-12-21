import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import logger from 'redux-logger'
import { watchLogin, watchSignup, watchGetData } from './sagas/index'
import { reduxReducers } from './reducers/index'

let sagaMiddleware = createSagaMiddleware()

let middlewares = [logger, sagaMiddleware]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(reduxReducers)

sagaMiddleware.run(function*() {
  return yield all([watchLogin(), watchSignup(), watchGetData()])
})
