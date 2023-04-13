import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StockOperation {
  id: number;
  symbol: string;
  date: string;
  amount: number;
  quantity: number;
  total: number;
}

interface StockOperationState {
  data: Array<StockOperation>;
  isLoading: boolean;
  filter: any;
  order: string;
  page: number;
  error?: string;
}

interface LoadStockOperationParams {
  filter: any;
  order?: string;
  page?: number;
}

export const loadStockOperation = createAsyncThunk(
  "stock-operation/load",
  async ({ page }: LoadStockOperationParams, { rejectWithValue }) => {
    try {
      const response = await axios.get<any>(
        `/api/v1/query/StockOperationEntity?q=&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("app@access_token")}`,
          },
        }
      );
      return response.data.content;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);

const stockOperationSlice = createSlice<StockOperationState, any>({
  name: "stock-operation/load",
  initialState: {
    data: [],
    error: "",
    isLoading: false,
    filter: {},
    page: 0,
    order: "",
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadStockOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(loadStockOperation.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      }),
});

export default stockOperationSlice.reducer;
