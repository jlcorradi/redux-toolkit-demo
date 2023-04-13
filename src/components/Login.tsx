import React, { useEffect } from "react";
import {
  RootState,
  store,
  useAppDispatch,
  useAppSelector,
} from "../redux/store";
import { authenticateUser, logout } from "../redux/authSlice";

export const Login: React.FC<{}> = () => {
  const { isLoading, isLoggedIn } = useAppSelector(
    (state: RootState) => state.auth
  );

  const { isLoading: stockOperationLoading } = useAppSelector(
    (state) => state.stockOperation
  );

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => store.dispatch(logout({})), 1000 * 60 * 1);
    }
  }, [isLoggedIn]);

  const dispatch = useAppDispatch();

  return (
    <div>
      {isLoading && <span>... Loding</span>}
      <div>Is Logged In: {isLoggedIn ? "Yes" : "No"}</div>
      <button
        onClick={(e) => {
          dispatch(
            authenticateUser({
              username: "jlcorradi@gmail.com",
              password: "theM@trix",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={(e) => {
          dispatch(logout({}));
        }}
      >
        Logout
      </button>
    </div>
  );
};
