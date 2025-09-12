// Make sure the file exists at the specified path, or update the path if needed
import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import FilterBar from "./components/FilterBar";


function App() {
  

  return (
    <>
     <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <TaskForm />
      <FilterBar />
      <KanbanBoard />
    </div>
    </>
  )
}

export default App
