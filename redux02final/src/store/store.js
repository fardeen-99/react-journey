import { configureStore } from "@reduxjs/toolkit";
import searchslice from '../features/searchslice'
import collection from '../features/collectionslice'
export const store=configureStore({
    reducer:{
        content:searchslice,
        collect:collection

    }
})