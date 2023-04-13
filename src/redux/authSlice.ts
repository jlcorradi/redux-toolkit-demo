import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Auth {
  access_token: string;
  token_type: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  error?: string;
  auth: null | Auth;
}

export interface Credentials {
  username: string;
  password: string;
}

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<Auth>("/auth", credentials, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      localStorage.setItem("app@access_token", data.access_token);
      return data;
    } catch (error) {
      return rejectWithValue("Error login in");
    }
  }
);

export const logout = createAction<any>("LOGOUT");

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  auth: null,
};

const authSlice = createSlice<AuthState, any>({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.auth = action.payload;
        state.isLoggedIn = true;
        state.error = "";
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
        state.auth = null;
      })
      .addCase(logout, (state, { payload }) => {
        state.auth = null;
        state.isLoggedIn = false;
        console.log(payload);
        localStorage.removeItem("app@access_token");
      });
  },
});

export default authSlice.reducer;
