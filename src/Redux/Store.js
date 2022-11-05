// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {contacts, contactsReducer} from './contactSlice';
// import {filter, filterReducer} from './filterSlice';
// //import { contactsReducer } from './slice';
// //import { persistReducer } from 'redux-persist';
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';


//  const persistConfig = {
//     key: 'contacts',
//     storage,
//      //whitelist: ['items'],
//   }
//   ;

//  const persistedContactsReducer = persistReducer(
//     persistConfig,
//     contactsReducer
//     //filterSlice.reducer
    
// );

// export const store = configureStore({
//     reducer: {  contacts: persistedContactsReducer, filter: filterReducer },
    
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
//     devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

//==========================================================================

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactSlice from './contactSlice'
import filterSlice from './filterSlice';
//import { persistReducer } from 'redux-persist';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import { contactsReducer } from './contactSlice';

const persistConfig = {
    key: 'contacts',
    // version: 1,
    storage,
    //whitelist: ['items'],
  };

  const contactsReducer = persistReducer(
    persistConfig,
    contactSlice
    
    // filterSlice.reducer
);

export const store = configureStore({
    reducer: { 
        filter: filterSlice, 
        contacts: contactsReducer },
    
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);