import { configureStore } from "@reduxjs/toolkit";
import farmSlice from "./Reducer/FarmReducer";
import questionSlice from "./Reducer/QuestionReducer";
import { apiSlice } from "./features/api/apiSlice";
import activitySlice from "./Reducer/ActivityReducer";
import feedbackSlice from "./Reducer/FeedbackReducer";
import NewSlice from "./Reducer/NewReducer";
import usersReducer from "./Reducer/userSlice";

const store = configureStore({
  reducer: {
    farms: farmSlice.reducer,
    questions: questionSlice.reducer,
    activites: activitySlice.reducer,
    feedbacks: feedbackSlice.reducer,
    news: NewSlice.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export default store;
