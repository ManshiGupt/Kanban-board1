import { useState, type ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices/tasksSlice";
import { v4 as uuid } from "uuid";

export default function TaskForm() {
  const dispatch = useDispatch();
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
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <select
        value={priority}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value as "Low" | "Medium" | "High")}
        className="border p-2 mb-2 w-full"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
}
