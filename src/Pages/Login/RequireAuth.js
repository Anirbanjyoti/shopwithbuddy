import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Sheared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  // Required login to visit page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // Email Varification sending if only user and password login .NOTE:No need to varify for  social login .

  return children;
};

export default RequireAuth;
