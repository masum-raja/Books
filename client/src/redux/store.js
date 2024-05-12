import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import rootSaga from './sagas'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

// Mount it on the Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
})

// Then run the saga
sagaMiddleware.run(rootSaga)

export default store;
