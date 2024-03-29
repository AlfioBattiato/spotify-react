import { configureStore,combineReducers  } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import dataReducer from '../reducers/dataReducer';
import singleSong from '../reducers/singleSong';

// import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist:["search"]
};

const allMyReducer=combineReducers({
  search:dataReducer,
  singleObj:singleSong

})
const persistedReducer = persistReducer(persistConfig, allMyReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})
const persistor = persistStore(store);

export { store, persistor }; // Esporta sia store che persistor separatamente

