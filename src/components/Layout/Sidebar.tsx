import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Car, 
  Fuel, 
  MapPin, 
  Users, 
  Calendar, 
  BarChart3, 
  Settings,
  Home,
  AlertTriangle,
  FileText,
  Truck
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  { name: "Live Tracking", href: "/tracking", icon: MapPin, current: false },
  { name: "Fleet Management", href: "/fleet", icon: Car, current: false },
  { name: "Fuel Management", href: "/fuel", icon: Fuel, current: false },
  { name: "Driver Management", href: "/drivers", icon: Users, current: false },
  { name: "Maintenance", href: "/maintenance", icon: Settings, current: false },
  { name: "Transport Booking", href: "/booking", icon: Truck, current: false },
  { name: "Reports & Analytics", href: "/reports", icon: BarChart3, current: false },
  { name: "Alerts", href: "/alerts", icon: AlertTriangle, current: false },
  { name: "Documents", href: "/documents", icon: FileText, current: false },
];

export function Sidebar({ className }: SidebarProps) {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <div className={cn("flex h-full w-64 flex-col bg-card border-r", className)}>
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center">
            <Car className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">FleetTracker</span>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = currentPage === item.href;
            return (
              <Button
                key={item.name}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start h-11",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={() => setCurrentPage(item.href)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground text-center">
          Fleet Management System v2.0
        </div>
      </div>
    </div>
  );
}