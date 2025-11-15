import { Navigate, useRoutes } from "react-router-dom";
import { mainRoutes } from "./main";

export default function Router() {
  return useRoutes([
    ...mainRoutes,
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
