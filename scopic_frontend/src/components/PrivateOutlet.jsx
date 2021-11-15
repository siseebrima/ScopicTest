import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "react-use-auth";

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateOutlet;
