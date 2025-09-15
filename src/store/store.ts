import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";
import uiReducer from "./slices/uiSlice";
import themeReducer from "./slices/themeSlice"; 

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    ui: uiReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
