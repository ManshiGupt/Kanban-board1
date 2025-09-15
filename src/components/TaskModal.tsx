import { useState, type ChangeEvent } from "react";
import { updateTask } from "../store/slices/tasksSlice";
import type { Task } from "../store/slices/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function TaskModal({
  task,
  onClose,
}: {
  task: Task;
  onClose: () => void;
}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">(
    task.priority
  );
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      updateTask({
        ...task,
        title,
        description,
        priority,
        dueDate,
      })
    );
    onClose(); // close after saving
  };
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div
    className={`p-4 rounded w-96 shadow-lg transition-colors duration-200
      ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
  >
    <h2 className="text-lg font-bold mb-2">Edit Task</h2>
    <form onSubmit={handleUpdate} className="flex flex-col gap-2">
      <input
        type="text"
        className={`border p-2 rounded transition-colors duration-200 
          ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className={`border p-2 rounded transition-colors duration-200
          ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select
        value={priority}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setPriority(e.target.value as "Low" | "Medium" | "High")
        }
        className={`border p-2 rounded transition-colors duration-200
          ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        type="date"
        className={`border p-2 rounded transition-colors duration-200
          ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <div className="flex justify-end gap-2 mt-3">
        <button
          type="button"
          onClick={onClose}
          className={`px-3 py-1 rounded transition-colors duration-200
            ${darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-black"}`}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</div>

  );
}
