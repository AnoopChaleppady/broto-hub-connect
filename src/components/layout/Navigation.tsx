import { Link, useLocation } from "react-router-dom";
import { Home, Users, AlertCircle, ListChecks, BookOpen, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const currentWeek = 16; // This would come from user context in real app

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/directory", label: "Directory", icon: Users },
    { path: "/raise-concern", label: "Raise Concern", icon: AlertCircle },
    { path: "/my-status", label: "My Status", icon: ListChecks },
    { path: "/resources", label: "Resources", icon: BookOpen },
  ];

  // Add Senior Dashboard if week >= 15
  if (currentWeek >= 15) {
    navItems.push({ path: "/senior-dashboard", label: "Senior Dashboard", icon: Shield });
  }

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-foreground">Brototype Connect</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex md:hidden">
            {/* Mobile menu would go here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
