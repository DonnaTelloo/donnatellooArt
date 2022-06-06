import { createAsyncThunk } from "@reduxjs/toolkit";
import { sliceName } from ".";
import { handleGetCollections } from "../../firebase/actions";

export const getCollections = createAsyncThunk(
  `${sliceName}/home/collections`,
  async (_, { rejectWithValue }) => {
    try {
      return await handleGetCollections();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
