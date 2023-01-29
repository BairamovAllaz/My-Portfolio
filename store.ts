import { configureStore } from '@reduxjs/toolkit'
import stateSlice from './slices/stateSlice'
import apiSlice from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    state : stateSlice,
    gitApi : apiSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch