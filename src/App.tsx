// Make sure the file exists at the specified path, or update the path if needed
import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import FilterBar from "./components/FilterBar";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store/store";
import { toggleDarkMode } from "./store/slices/themeSlice";


function App() {
  
// const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch<AppDispatch>();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
   <div
  className={
    darkMode
      ? "bg-gray-900 text-white min-h-screen"
      : "bg-white text-black min-h-screen"
  }
>
  {/* Header */}
  <div className="flex items-center justify-between mb-6 md:pt-5 md:px-4 p-2">
    <h1 className="text-2xl font-bold">Kanban Board</h1>
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  </div>

  {/* Content */}
  <TaskForm />
  <FilterBar />
  <KanbanBoard />
</div>

  )
}

export default App
