# 📝 Mini Kanban Board --- React Developer Assignment

## 📌 Objective

The goal of this project is to build a **Mini Kanban Board application**
using React and TypeScript. The application demonstrates modern React
fundamentals, including functional components, hooks, Redux Toolkit for
scalable state management, and efficient local persistence.

The board consists of **three columns** --- **Todo, In Progress, and
Done** --- and includes a variety of features for managing tasks.

------------------------------------------------------------------------

## 🚀 Live Demo

👉 [View the app here](https://kanbanbooard.netlify.app/)

------------------------------------------------------------------------

## 🚀 Features Implemented

### ✅ Core Functionality

-   Three distinct columns: **Todo, In Progress, and Done**\
-   Add a new task with a **title** and **description**\
-   **Drag-and-drop** functionality (using `react-beautiful-dnd` or
    equivalent) to move tasks between columns

### ✏️ Task Details & Editing

-   Each task has:
    -   **Title** (string)\
    -   **Description** (string)\
    -   **Priority** (Low, Medium, High)\
    -   **Due date** (Date/String)\
-   Tasks can be **edited** (title, description, priority, due date)\
-   Tasks can be **deleted**

### 💾 Data Persistence

-   All tasks are saved to and loaded from **localStorage**\
-   The board state is preserved across refreshes

### 🔍 Filtering & Sorting

-   **Filters:**
    -   Show all tasks\
    -   Show only high-priority tasks\
    -   Show tasks due today\
-   **Sorting:**
    -   Sort tasks by **due date**\
    -   Sort tasks by **priority**

### 🌙 Extra Features (Optional, if implemented)

-   **Dark Mode** toggle (preference saved in localStorage)\

-   **Search bar** to filter tasks by title\

-   **Progress Bar** showing completion percentage:

        (# of tasks in "Done") / (Total # of tasks) * 100%

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **React** (Functional Components + Hooks)\
-   **TypeScript** (Type safety & maintainability)\
-   **Redux Toolkit** (Predictable and scalable state management)\
-   **react-beautiful-dnd** (Drag-and-drop functionality)\
-   **date-fns** (Date handling)\
-   **Tailwind CSS / CSS Modules** (Styling, if used)

------------------------------------------------------------------------

## 📂 Project Setup

### 1. Clone Repository

``` bash
git clone https://github.com/<your-username>/mini-kanban-board.git
cd mini-kanban-board
```

### 2. Install Dependencies

``` bash
npm install
```

### 3. Run Development Server

``` bash
npm run dev
```

### 4. Open in Browser

Visit: <http://localhost:5173>

------------------------------------------------------------------------

## 📖 How to Use

1.  Add new tasks with title, description, priority, and due date.\
2.  Drag and drop tasks between **Todo, In Progress, and Done**.\
3.  Edit or delete existing tasks.\
4.  Use **filters and sorting controls** to manage task visibility.\
5.  Toggle **dark mode** (if implemented).\
6.  Track progress with the progress bar.

------------------------------------------------------------------------

## 🏆 Challenges & Solutions

-   **Drag-and-drop management**: Used `react-beautiful-dnd` to simplify
    implementation.\
-   **State persistence**: Implemented **localStorage syncing** with
    Redux store.\
-   **Filtering & sorting logic**: Centralized logic in Redux selectors
    for clean code.\
-   **Type safety**: Used **TypeScript interfaces & enums** for task
    properties.

------------------------------------------------------------------------

## 📌 Deliverables

-   GitHub repository with the complete solution\
-   This `README.md` file (setup instructions + feature list +
    challenges)
