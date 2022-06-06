import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./";

// Instead of `useDispatch` and `useSelector` for dynamic typing
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
