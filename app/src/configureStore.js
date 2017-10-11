import {
  createStore,
  applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const configureStore = (preloadedState) => {
  const store =  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
    )
  )

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
};

export default configureStore