import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";

// Import private pages
import Dashboard from "./pages/private/Dashboard";
import SavedPosts from "./pages/private/SavedPosts";
import Settings from "./pages/private/Settings";
import Support from "./pages/private/Support";

// Import public pages
import Home from "./pages/public/Home";
import Register from "./pages/public/Register";
import Login from "./pages/public/Login";

// Import routes
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";

// Import layouts
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Home />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "posts",
        element: (
          <PrivateRoute>
            <SavedPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
      {
        path: "support",
        element: (
          <PrivateRoute>
            <Support />
          </PrivateRoute>
        ),
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
