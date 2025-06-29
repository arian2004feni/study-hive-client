import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AllAssignments from "../pages/AllAssignments";
import CreateAssignment from "../pages/CreateAssignment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import ViewAssignments from "../pages/ViewAssignments";
import UpdateAssignment from "../pages/UpdateAssignment";

// const Home = lazy(() => import("../pages/Home"));
// const Login = lazy(() => import("../pages/Login"));
// const Register = lazy(() => import("../pages/Register"));
// const Assignment = lazy(() => import("../pages/Assignment"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "create-assignment",
        element: (
          <PrivateRouter>
            <CreateAssignment />
          </PrivateRouter>
        ),
      },
      {
        path: "assignment",
        element: <AllAssignments />,
        loader: () => fetch("http://localhost:3000/assignments"),
      },
      {
        path: "assignment/:id",
        element: (
          <PrivateRouter>
            <ViewAssignments />
          </PrivateRouter>
        ),
        loader: ({params}) => fetch(`http://localhost:3000/assignments/${params.id}`),
      },
      {
        path: "assignment/:id/update",
        element: (
          <PrivateRouter>
            <UpdateAssignment />
          </PrivateRouter>
        ),
        loader: ({params}) => fetch(`http://localhost:3000/assignments/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    Component: () => <div className="text-center text-2xl">404 Not Found</div>,
  },
]);

export default router;
