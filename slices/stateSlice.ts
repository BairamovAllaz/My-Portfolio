import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isNavigationOpen: boolean;
  isMobilNavigationMenuOpen : boolean
}

const initialState: CounterState = {
  isNavigationOpen: false,
  isMobilNavigationMenuOpen : false
};

export const stateSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toogleisNavigationOpen: state => {
      state.isNavigationOpen = !state.isNavigationOpen;
    },
    toogleisMobilNavigationMenuOpen: state => {
      state.isMobilNavigationMenuOpen = !state.isMobilNavigationMenuOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleisNavigationOpen ,toogleisMobilNavigationMenuOpen} = stateSlice.actions;

export default stateSlice.reducer;
