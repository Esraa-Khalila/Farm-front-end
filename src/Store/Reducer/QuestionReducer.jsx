import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getQuestion = createAsyncThunk("questions", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/question");
  const data = await response.json();
  return data;
});
const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    loading: false,
  },
  extraReducers: {
    [getQuestion.pending]: (state, action) => {
      state.loading = true;
      console.log(action);
    },
    [getQuestion.fulfilled]: (state, action) => {
      state.questions = action.payload;
      state.loading = false;
      console.log(state.questions);
    },
    [getQuestion.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(state.questions);
    },
  },
});
export const questionActions = questionSlice.actions;
export default questionSlice;
