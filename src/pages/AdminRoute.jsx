import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isAdmin = sessionStorage.getItem("isAdmin") === "true";

  return isAdmin ? children : <Navigate to="/adminlogin" replace />;
};

export default AdminRoute;
