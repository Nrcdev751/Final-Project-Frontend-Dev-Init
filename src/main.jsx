import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import ShowCalendar from './pages/ShowCalendar.jsx';
import ShowTodo from './pages/ShowTodo.jsx';
import ShowNote from './pages/ShowNote.jsx';
import "./index.css";
import { TodoProvider } from './TodoContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calendar",
    element: <ShowCalendar />,
  },
  {
    path: "/todo",
    element: <ShowTodo />,
  },
  {
    path: "/note",
    element: <ShowNote />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);
