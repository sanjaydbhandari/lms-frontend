import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "./Slices/AuthSlice.js"
import courseSliceReducers from "./Slices/CourseSlice.js";

const store = configureStore({
    reducer:{
        auth : authSliceReducers,
        course : courseSliceReducers
    },
    devTools:true,
   });

export default store;