import { useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/slices/tasksSlice";
import { v4 as uuid } from "uuid";
import type { RootState } from "../store/store";

export default function TaskForm() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    dispatch(
      addTask({
        id: uuid(),
        title,
        description,
        priority,
        dueDate,
        status: "todo",
      })
    );

    setTitle("");
    setDescription("");
    setPriority("Low");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-4 border rounded mb-4 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200 text-black"
      }`}
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 transition-colors ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400"
            : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500"
        }`}
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 transition-colors ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400"
            : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500"
        }`}
      />

      <select
        value={priority}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setPriority(e.target.value as "Low" | "Medium" | "High")
        }
        className={`border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 transition-colors ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-400"
            : "bg-gray-50 border-gray-300 text-black focus:ring-blue-500"
        }`}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className={`border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 transition-colors ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-400"
            : "bg-gray-50 border-gray-300 text-black focus:ring-blue-500"
        }`}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full transition-colors"
      >
        Add Task
      </button>
    </form>
  );
}
