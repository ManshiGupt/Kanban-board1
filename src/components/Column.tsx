import { useDroppable } from "@dnd-kit/core";
import type{ Task } from "../store/slices/tasksSlice";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

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
const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      ref={setNodeRef}
      className={`w-1/3 p-2 border rounded min-h-[200px] transition-colors ${
        isOver ? "bg-blue-50" : "bg-gray-50"
      } ${darkMode?"bg-black text-white":"bg-white text-black"}`}
    >
      <h2 className={`font-bold mb-2 ${darkMode?"text-black":"bg-white text-black"}`}>{title}</h2>
      <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      </div>
    </div>
  );
}
