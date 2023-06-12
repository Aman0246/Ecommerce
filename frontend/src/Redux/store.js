import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './userSlice'
import productSlice from "./ProductSlice"
export const store = configureStore({
  reducer: {
    user:userSliceReducer,
    product:productSlice,
  },
})