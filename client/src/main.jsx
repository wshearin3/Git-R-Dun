import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskList from "./components/taskList";
import Members from "./components/Members";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/projectpage",
        element: <TaskList />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      // , {
      //   path: '/tasklist',
      //   element: <TaskList />
      // }
      // ,      , {
      //   path: '/Details',
      //   element: <Details />
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
