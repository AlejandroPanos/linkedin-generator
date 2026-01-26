import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import type { ReactNode } from "react";

interface PublicRouteChildren {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteChildren) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
