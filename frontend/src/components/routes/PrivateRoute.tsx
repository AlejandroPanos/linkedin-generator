import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import type { ReactNode } from "react";

interface PrivateRouteChildren {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteChildren) => {
  const { user, isAuthReady } = useAuth();

  if (!isAuthReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
