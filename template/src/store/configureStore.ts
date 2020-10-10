import { applyMiddleware, createStore, StoreEnhancer } from 'redux'
import { RootState } from '@store'
import loggerMiddleware from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore() {
  // Saga
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [loggerMiddleware, sagaMiddleware]
  const middlewareEnhancer = applyMiddleware<{}, RootState>(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, {}, composedEnhancers)
  sagaMiddleware.run(rootSaga)

  return store
}
