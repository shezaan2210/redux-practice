import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./reducers/registerSlice";



export const store = configureStore({
    reducer:{
        register: registerSlice
    }
})