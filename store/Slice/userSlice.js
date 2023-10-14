import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../src/axiosConfig/instance';

export const fetchuser = createAsyncThunk(
  "user/fetch",
  async () => {
    const userId = localStorage.getItem('userId').replaceAll('"', '');
    const response = await axiosInstance.get(`/user/${userId}`);
    return response.data.data;
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (updatedUser) => {
    const userId = localStorage.getItem('userId').replaceAll('"', '');
    const response = await axiosInstance.patch(`/user/${userId}`, updatedUser);
    return response.data.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: "notuser",
    status: null
  },
  
  extraReducers: {
    [fetchuser.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [fetchuser.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchuser.rejected]: (state) => {
      state.status = 'failed';
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [updateUser.pending]: (state) => {
      state.status = 'loading';
    },
    [updateUser.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default userSlice.reducer;