import { useSelector, useDispatch } from "react-redux";
import type{ RootState } from "../store/store";
import Column from "./Column";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { moveTask } from "../store/slices/tasksSlice";
import type{ Task } from "../store/slices/tasksSlice";
function applyFiltersAndSorting(tasks: Task[], filter: string, sort: string) {
  const today = new Date().toISOString().split("T")[0];
  let filtered = tasks;

  if (filter === "highPriority") {
    filtered = tasks.filter((t) => t.priority === "High");
  } else if (filter === "dueToday") {
    filtered = tasks.filter((t) => t.dueDate === today);
  }

  if (sort === "priority") {
    const order = { High: 1, Medium: 2, Low: 3 };
    filtered = [...filtered].sort(
      (a, b) => order[a.priority] - order[b.priority]
    );
  } else if (sort === "dueDate") {
    filtered = [...filtered].sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );
  }

  return filtered;
}

export default function KanbanBoard() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const { filter, sort } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const filteredTasks = applyFiltersAndSorting(tasks, filter, sort);
const darkMode = useSelector((state: RootState) => state.theme.darkMode);
 
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      dispatch(moveTask({ id: active.id as string, status: over.id as  Task["status"]}));
    }
  };

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className={`flex gap-4 ${darkMode?"bg-black text-white":"bg-white text-black"}`}>
        <Column
          title="Todo"
          status="todo"
          tasks={filteredTasks.filter((t) => t.status === "todo")}
        />
        <Column
          title="In Progress"
          status="inProgress"
          tasks={filteredTasks.filter((t) => t.status === "inProgress")}
        />
        <Column
          title="Done"
          status="done"
          tasks={filteredTasks.filter((t) => t.status === "done")}
        />
      </div>
    </DndContext>
  );
}
