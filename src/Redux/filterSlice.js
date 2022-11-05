import { createSlice } from '@reduxjs/toolkit';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

const filtersInitialState ='';

const filterSlice = createSlice({
    name: 'filter',
    //initialState: filtersInitialState, 
    initialState: {value: filtersInitialState},
    reducers:
     { 
      setContact(state, actions) {
        state.value = actions.payload;
      },
  },
  });

  export const {setContact} = filterSlice.actions;

  //export default filterSlice.reducer ;
  export default filterSlice.reducer;

  //export const filterReducer = filterSlice.reducer;