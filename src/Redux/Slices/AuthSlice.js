import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";
import { isLoggedIn } from "../../../../backend/middlewares/auth.middleware";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  date: JSON.parse(localStorage.getItem("data")) || {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("auth/register", data);
    toast.promise(res, {
      loading: "Wait! creating your account",
      success: (data) => data?.data?.message,
      error: "Failed to create account",
    });

    return await res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return Promise.reject(error?.response?.data);
  }
});

export const login = createAsyncThunk("/auth/signin", async (data) => {
  try {
    const res = axiosInstance.post("auth/signin", data);
    toast.promise(res, {
      loading: "Wait! authenticating  your account",
      success: (data) => data?.data?.message,
      error: "Failed to authenticate your account",
    });
    return await res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const res = axiosInstance.post("auth/logout");
    toast.promise(res, {
      loading: "Wait! logging out your account",
      success: (data) => data?.data?.message,
      error: "Failed to logout your account",
    });

    return await res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.data?.user?.role);
        state.isLoggedIn = true;
        state.role = action?.payload?.data?.user?.role;
        state.data = action?.payload?.data?.user;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.isLoggedIn = false;
        state.role = "";
        state.data = {};
      });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
