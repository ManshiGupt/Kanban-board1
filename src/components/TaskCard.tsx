import { useDispatch } from "react-redux";
import { deleteTask } from "../store/slices/tasksSlice";
import type { Task } from "../store/slices/tasksSlice";
import { useState } from "react";
import TaskModal from "./TaskModal";
import { useDraggable } from "@dnd-kit/core";

export default function TaskCard({ task }: { task: Task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  // Draggable hook
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="p-3 border rounded mb-2 bg-white shadow cursor-grab"
      >
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-sm">Priority: {task.priority}</p>
        <p className="text-sm">Due: {task.dueDate}</p>

        <div className="flex gap-3 mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
            className="text-blue-500 font-medium"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteTask(task.id));
            }}
            className="text-red-500 font-medium"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal should be outside draggable card */}
      {isEditing && (
        <TaskModal
          task={task}
          onClose={() => setIsEditing(false)} // properly close modal
        />
      )}
    </>
  );
}
