import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return;
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname} />;
  }

  return children;
};

export default PrivateRouter;
