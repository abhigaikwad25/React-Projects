import {configureStore} from '@reduxjs/toolkit';
//import for define reducers
import todoReducer from '../features/todo/todoSlice';

//configureStore use for making store
export const store = configureStore({
    //in that reducer you make using createSlice method are define 
    //in store have any number of reducer 
    reducer: todoReducer
})