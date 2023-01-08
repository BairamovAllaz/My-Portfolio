import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isNavigationOpen: boolean;
}

const initialState: CounterState = {
  isNavigationOpen: false,
};

export const stateSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toogleisNavigationOpen: state => {
      state.isNavigationOpen = !state.isNavigationOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleisNavigationOpen } = stateSlice.actions;

export default stateSlice.reducer;
