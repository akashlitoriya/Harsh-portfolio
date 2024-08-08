import { combineReducers } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice';
import loaderSlice from "./slices/loaderSlice";

const rootReducer = combineReducers({
    user: userSlice,
    loader: loaderSlice
})

export default rootReducer;