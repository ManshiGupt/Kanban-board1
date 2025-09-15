import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../store/slices/tasksSlice";
import type { Task } from "../store/slices/tasksSlice";
import { useState } from "react";
import TaskModal from "./TaskModal";
import { useDraggable } from "@dnd-kit/core";
import type { RootState } from "../store/store";

export default function TaskCard({ task }: { task: Task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  // Draggable hook
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className={`p-4 rounded-lg border shadow-sm transition-all duration-200 mb-6
          ${darkMode ? "bg-gray-800 text-white border-gray-700 hover:shadow-lg" : "bg-white text-gray-900 border-gray-200 hover:shadow-md"}`}
      >
        {/* Drag handle */}
        <div
          {...listeners}
          {...attributes}
          className="flex justify-center mb-2 cursor-grab select-none"
        >
          <div className="grid grid-cols-2 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full block ${
                  darkMode ? "bg-gray-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Task Content */}
        <h3 className="font-semibold text-lg mb-1">{task.title}</h3>
        <p className="text-sm mb-2 opacity-80">{task.description}</p>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs mb-3">
          <span
            className={`px-2 py-0.5 rounded-full font-medium ${
              task.priority === "High"
                ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                : task.priority === "Medium"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
            }`}
          >
            {task.priority}
          </span>
          <span
            className={`px-2 py-0.5 rounded-full ${
              darkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Due: {task.dueDate}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 rounded bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="px-3 py-1 rounded bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      {isEditing && (
        <TaskModal
          task={task}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
}
