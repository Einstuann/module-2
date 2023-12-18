import { createSlice } from "@reduxjs/toolkit";

const loadingReducer = createSlice({
  name: "loading when render components", // mo ta ve state
  initialState: false,
  reducers: {
    toggleLoading: (state) => {
      return !state;
    },
  },
});

export const { toggleLoading } = loadingReducer.actions;
export default loadingReducer.reducer;
