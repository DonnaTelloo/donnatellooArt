import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../";

const RootSelector = (state: RootState) => state.home;

export const selectCollections = createSelector(
  RootSelector,
  (state) => state.collections.data
);
