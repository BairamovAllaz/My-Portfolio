import { configureStore } from '@reduxjs/toolkit'
import stateSlice from './slices/stateSlice'
import { repoSlice } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    zstate : stateSlice,
    gitApi : repoSlice.reducer,
  },
})

export type RootState = {
  zstate: {
    isNavigationOpen: boolean;
    isMobilNavigationMenuOpen: boolean;
  };
  gitApi: ReturnType<typeof repoSlice.reducer>;
}
export type AppDispatch = typeof store.dispatch