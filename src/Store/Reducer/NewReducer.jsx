import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getNew = createAsyncThunk("news", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/new");
  const data = await response.json();
  return data;
});
const NewSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    loading: false,
  },
  extraReducers: {
    [getNew.pending]: (state, action) => {
      state.loading = true;
      console.log(action);
    },
    [getNew.fulfilled]: (state, action) => {
      state.news = action.payload;
      state.loading = false;
      console.log(state.news);
    },
    [getNew.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(state.news);
    },
  },
});
export const NewActions = NewSlice.actions;
export default NewSlice;
