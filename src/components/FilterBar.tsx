import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import {
  setFilter,
  setSort,
  type FilterType,
  type SortType,
} from "../store/slices/uiSlice";
import type { ChangeEvent } from "react";
import { useState } from "react";

export default function FilterBar() {
  const dispatch = useDispatch();
  const { filter, sort } = useSelector((state: RootState) => state.ui);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const [search, setSearch] = useState("");

  // Progress calculation
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((t) => t.status === "done").length;
  const progress = totalTasks > 0 ? (doneTasks / totalTasks) * 100 : 0;

  // Filter tasks by search term (dispatch if you want global state)
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // Optional: dispatch to global store if needed
    // dispatch(setSearch(e.target.value))
  };

  return (
    <div
      className={`flex flex-col gap-4 mb-4 p-4 border rounded-lg shadow-sm transition-colors duration-300
        ${
          darkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
    >
      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>
            {doneTasks}/{totalTasks} done
          </span>
        </div>
        <div
          className={`w-full h-2 rounded-full ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <div
            className="h-2 rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <label className="font-medium">Search:</label>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search tasks..."
          className={`flex-1 rounded-md px-3 py-1 border text-sm focus:outline-none focus:ring-2 
            ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-400"
                : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
            }`}
        />
      </div>

      {/* Filter + Sort */}
      <div className="flex flex-wrap gap-6 items-center justify-between">
        {/* Filter */}
        <div className="flex items-center gap-2">
          <label className="font-medium">Filter:</label>
          <select
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value as FilterType))}
            className={`rounded-md px-3 py-1 border text-sm focus:outline-none focus:ring-2 
              ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
              }`}
          >
            <option value="all">All</option>
            <option value="highPriority">High Priority</option>
            <option value="dueToday">Due Today</option>
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label className="font-medium">Sort:</label>
          <select
            value={sort}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              dispatch(setSort(e.target.value as SortType))
            }
            className={`rounded-md px-3 py-1 border text-sm focus:outline-none focus:ring-2 
              ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
              }`}
          >
            <option value="none">None</option>
            <option value="priority">By Priority</option>
            <option value="dueDate">By Due Date</option>
          </select>
        </div>
      </div>
    </div>
  );
}
