import { AnyAction, Store, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";

import authSlice from "./authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import stockOperationSlice from "./stockOperationSlice";

export const store = configureStore({
  reducer: { auth: authSlice, stockOperation: stockOperationSlice },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
