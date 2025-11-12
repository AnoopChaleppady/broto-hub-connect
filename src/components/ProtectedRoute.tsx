import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: "admin" | "senior" | "student";
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, userRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Check role if required
  if (requiredRole) {
    // Admin has access to everything
    if (userRole === "admin") {
      return <>{children}</>;
    }
    
    // For senior role requirement, check if user is senior
    if (requiredRole === "senior" && userRole !== "senior") {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
}
