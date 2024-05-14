import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import reducer from "../reducers";
 
const persistConfig = {
  key: 'root',
  storage,
}

 
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)));
const persistor = persistStore(store);

export { store, persistor };