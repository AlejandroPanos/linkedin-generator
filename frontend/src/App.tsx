import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";

// Always needed
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Loader from "./components/state/Loader/Loader";

// Lazy loading
const Home = lazy(() => import("./pages/public/Home"));
const Register = lazy(() => import("./pages/public/Register"));
const Login = lazy(() => import("./pages/public/Login"));
const Dashboard = lazy(() => import("./pages/private/Dashboard"));
const SavedPosts = lazy(() => import("./pages/private/SavedPosts"));
const Settings = lazy(() => import("./pages/private/Settings"));
const Support = lazy(() => import("./pages/private/Support"));

const LazyPage = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <LazyPage>
              <Home />
            </LazyPage>
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <LazyPage>
          <Register />
        </LazyPage>
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LazyPage>
          <Login />
        </LazyPage>
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
            <LazyPage>
              <Dashboard />
            </LazyPage>
          </PrivateRoute>
        ),
      },
      {
        path: "posts",
        element: (
          <PrivateRoute>
            <LazyPage>
              <SavedPosts />
            </LazyPage>
          </PrivateRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <PrivateRoute>
            <LazyPage>
              <Settings />
            </LazyPage>
          </PrivateRoute>
        ),
      },
      {
        path: "support",
        element: (
          <PrivateRoute>
            <LazyPage>
              <Support />
            </LazyPage>
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
