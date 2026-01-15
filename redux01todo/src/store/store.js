import { configureStore } from '@reduxjs/toolkit'
import componenrreducer from '../feature/slice'

export const store = configureStore({

    reducer:{

content:componenrreducer      
    }
})
