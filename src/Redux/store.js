import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "../Redux/Slices/AuthSlice"

const store = configureStore({
    reducer:{
        auth : authSliceReducers
    },
    devTools:true,
   });

   export default store;