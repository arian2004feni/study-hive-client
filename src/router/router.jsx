import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      }
    ],
  },
  {
    path: "*",
    Component: () => <div className="text-center text-2xl">404 Not Found</div>,
  }
]);

export default router;
