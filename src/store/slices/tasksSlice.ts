import { createSlice } from "@reduxjs/toolkit";
import type{  PayloadAction } from "@reduxjs/toolkit";

export type Priority = "Low" | "Medium" | "High";
export type Status = "todo" | "inProgress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  status: Status;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTask: (
      state,
      action: PayloadAction<{ id: string; status: Status }>
    ) => {
      state.tasks = state.tasks.map((t) =>
        t.id === action.payload.id ? { ...t, status: action.payload.status } : t
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, updateTask, deleteTask, moveTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
