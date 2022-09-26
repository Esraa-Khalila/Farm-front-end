import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFeedback = createAsyncThunk("feedbacks", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/feedback");
  const data = await response.json();
  return data;
});
const feedbackSlice = createSlice({
  name: "feedbacks",
  initialState: {
    feedbacks: [],
    loading: false,
  },
  extraReducers: {
    [getFeedback.pending]: (state, action) => {
      state.loading = true;
      console.log(action);
    },
    [getFeedback.fulfilled]: (state, action) => {
      state.feedbacks = action.payload;
      state.loading = false;
      console.log(state.feedbacks);
    },
    [getFeedback.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(state.feedbacks);
    },
  },
});
export const feedbackActions = feedbackSlice.actions;
export default feedbackSlice;
