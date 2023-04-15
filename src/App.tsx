import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./redux/store";
import { loadStockOperation } from "./redux/stockOperationSlice";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const App: React.FC<{}> = () => {
  const { filter, order, page } = useAppSelector(
    (state) => state.stockOperation
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStockOperation({ filter, order, page }));
  }, [filter, order, page]);

  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
