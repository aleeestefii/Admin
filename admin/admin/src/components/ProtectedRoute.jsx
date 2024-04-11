import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/landing",
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};
// return <Outlet/> //to eliminate Protected router from app.jsx
    //to protect multiple routes
