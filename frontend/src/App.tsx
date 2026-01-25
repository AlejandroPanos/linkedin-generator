import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";

// Import private pages
import Dashboard from "./pages/private/Dashboard";
import SavedPosts from "./pages/private/SavedPosts";
import Settings from "./pages/private/Settings";
import Support from "./pages/private/Support";

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
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "posts",
        element: <SavedPosts />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "support",
        element: <Support />,
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
