import Dashboard from "../pages/Dashboard";
import Room from "../pages/Room";

export const unauthorizedRoute = [
  {
    element: <Room />,
    path: "/room/:roomId",
  },
  {
    element: <Dashboard />,
    path: "/",
  },
];
export const authorizedRoutes = [];
const routes = [];
