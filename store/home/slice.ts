import { createSlice } from "@reduxjs/toolkit";
import { sliceName } from ".";
import { getCollections } from "./thunks";

const initialState: any = {
  collections: {
    isLoading: false,
    data: [],
  },
};

export const home = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollections.pending, (state) => {
        state.collections.isLoading = true;
      })
      .addCase(getCollections.fulfilled, (state, action) => {
        state.collections.isLoading = false;
        state.collections.data = action.payload;
      });
  },
});

export default home.reducer;
