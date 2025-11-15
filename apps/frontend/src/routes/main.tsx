import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NotePage from "../pages/note-page";
import Notes from "../pages/notes";

export const mainRoutes = [
  {
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: "/notes",
        element: <NotePage />,
      },
      {
        path: "404",
        element: <div>404 Not Found</div>,
      },
      {
        path: "/",
        element: <Notes />,
      },
    ],
  },
];
