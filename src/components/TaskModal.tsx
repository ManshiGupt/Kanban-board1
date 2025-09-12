import { useState, type ChangeEvent } from "react";
import { updateTask } from "../store/slices/tasksSlice";
import type { Task } from "../store/slices/tasksSlice";
import { useDispatch } from "react-redux";

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-2">Edit Task</h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-2">
          <input
            type="text"
            className="border p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className="border p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <select
            value={priority}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setPriority(e.target.value as "Low" | "Medium" | "High")
            }
            className="border p-2"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <input
            type="date"
            className="border p-2"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
