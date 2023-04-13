import React, { useEffect } from "react";
import { Login } from "./components/Login";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { loadStockOperation } from "./redux/stockOperationSlice";

const App: React.FC<{}> = () => {
  const { auth, isLoggedIn } = useAppSelector((state) => state.auth);
  const { data, filter, order, page } = useAppSelector(
    (state) => state.stockOperation
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStockOperation({ filter, order, page }));
  }, [filter, order, page]);

  return (
    <div className="App">
      <Login />

      {isLoggedIn && (
        <>
          <hr />
          <div>Token: {auth?.access_token}</div>
          <div>type: {auth?.token_type}</div>
        </>
      )}
    </div>
  );
};

export default App;
