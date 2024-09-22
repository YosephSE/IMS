import AuthContext from "./AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function ProtectedWrapper(props) {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return props.children;
}
export default ProtectedWrapper;
