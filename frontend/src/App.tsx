import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";

// Import layouts
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
