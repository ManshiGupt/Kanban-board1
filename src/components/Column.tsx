import { useDroppable } from "@dnd-kit/core";
import type{ Task } from "../store/slices/tasksSlice";
import TaskCard from "./TaskCard";

export default function Column({
  title,
  status,
  tasks,
}: {
  title: string;
  status: "todo" | "inProgress" | "done";
  tasks: Task[];
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-1/3 p-2 border rounded min-h-[200px] transition-colors ${
        isOver ? "bg-blue-50" : "bg-gray-50"
      }`}
    >
      <h2 className="font-bold mb-2">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
