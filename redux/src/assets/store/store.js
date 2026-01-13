  import {configureStore} from '@reduxjs/toolkit'
  import Counerreducer from '../store/slice'

  export const store=configureStore({

reducer:{
    counter:Counerreducer,
}

  })