import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(props: React.Props) {
  const { isAuth } = props;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoutes;
