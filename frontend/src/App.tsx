import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";

// Import pages
import Dashboard from "./pages/private/Dashboard";

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
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

const App = (): React.JSX.Element => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
