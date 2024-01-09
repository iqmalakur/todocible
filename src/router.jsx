import Home from "./components/home/Home";
import Task from "./components/task/Task";

/**
 * @type {import('react-router-dom').RouteObject}
 */
const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/task",
    element: <Task />,
  },
];

export default router;
