import { useDispatch, useSelector } from "react-redux";
import type{ RootState } from "../store/store";
import type{  AppDispatch } from "../store/store";
import { toggleDarkMode } from "../store/slices/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
