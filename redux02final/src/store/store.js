import { configureStore } from "@reduxjs/toolkit";
import searchslice from '../features/searchslice'

export const store=configureStore({
    reducer:{
        content:searchslice

    }
})