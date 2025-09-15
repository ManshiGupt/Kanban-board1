Kanban Board (React + TypeScript + Redux)

Live Demo

👉 View the app here
https://68c3f1f6fb22a349079ea356--kanbanbooard.netlify.app/
Instructions on how to run the project

Clone the repository and navigate into it.

Install dependencies using npm install.

Run the development server with npm run dev.

Open http://localhost:5173 in your browser to use the app.

Features Implemented

Kanban board with three columns: Todo, In Progress, and Done.

Ability to add new tasks with title, description, priority, and due date.

Edit tasks in a modal (update title, description, priority, and due date).

Delete tasks from the board.

Drag-and-drop functionality using @dnd-kit/core to move tasks between columns.

Filtering options to view:

All tasks

Only high-priority tasks

Tasks due today

Sorting options within each column by due date or priority.

LocalStorage persistence so tasks remain saved after refreshing the page.

Progress bar that tracks overall completion.

Dark mode toggle for theme switching.

Challenges Faced and Solutions

Editing tasks conflicted with drag-and-drop:
Solved by wrapping edit actions in stopPropagation() and using a separate modal component.

Tasks disappearing on page refresh:
Fixed by syncing Redux state with localStorage using a custom middleware.

TypeScript errors with task priority and updates:
Resolved by explicitly typing priority as "Low" | "Medium" | "High" and defining a proper Task interface.

Drag-and-drop interfering with button clicks:
Prevented drag events from firing when clicking edit/delete buttons by handling event bubbling.