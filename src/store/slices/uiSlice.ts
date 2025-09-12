import { createSlice } from "@reduxjs/toolkit";

import type{  PayloadAction } from "@reduxjs/toolkit";

export type FilterType = "all" | "highPriority" | "dueToday";
export type SortType = "none" | "priority" | "dueDate";

interface UIState {
  filter: FilterType;
  sort: SortType;
}

const initialState: UIState = {
  filter: "all",
  sort: "none",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, setSort } = uiSlice.actions;
export default uiSlice.reducer;
