import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authorizedRoutes, unauthorizedRoute } from "./configs/routes";
import PublicRoute from "./components/PublicRoute";
import PrivateRoutes from "./components/PrivateRoute";

interface RouteProps {
  path: string;
  element: React.ReactNode;
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAuth={token} />}>
          {unauthorizedRoute.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Route>
        <Route element={<PrivateRoutes isAuth={token} />}>
          {authorizedRoutes.map((route: RouteProps) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Route>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
