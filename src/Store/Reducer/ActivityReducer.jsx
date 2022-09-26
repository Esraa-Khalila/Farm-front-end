import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getActivity = createAsyncThunk("activites", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/activity");
  const data = await response.json();
  return data;
});
const activitySlice = createSlice({
  name: "activites",
  initialState: {
    activites: [],
    loading: false,
  },
  extraReducers: {
    [getActivity.pending]: (state, action) => {
      state.loading = true;
      console.log(action);
    },
    [getActivity.fulfilled]: (state, action) => {
      state.activites = action.payload;
      state.loading = false;
      console.log(state.activites);
    },
    [getActivity.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(state.activites);
    },
  },
});
export const activityActions = activitySlice.actions;
export default activitySlice;
