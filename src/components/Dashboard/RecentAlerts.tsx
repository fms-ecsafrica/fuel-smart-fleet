import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin, Fuel } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "warning" | "danger" | "info";
  title: string;
  description: string;
  vehicle: string;
  time: string;
  icon: "alert" | "fuel" | "location" | "maintenance";
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "danger",
    title: "Geofence Breach",
    description: "Vehicle left authorized zone",
    vehicle: "URA-001",
    time: "5 minutes ago",
    icon: "location"
  },
  {
    id: "2",
    type: "warning",
    title: "Low Fuel Alert",
    description: "Fuel level below 15%",
    vehicle: "URA-007",
    time: "12 minutes ago",
    icon: "fuel"
  },
  {
    id: "3",
    type: "warning",
    title: "Maintenance Due",
    description: "Scheduled service overdue",
    vehicle: "URA-003",
    time: "1 hour ago",
    icon: "maintenance"
  },
  {
    id: "4",
    type: "info",
    title: "Route Completed",
    description: "Successfully arrived at destination",
    vehicle: "URA-015",
    time: "2 hours ago",
    icon: "location"
  }
];

const iconMap = {
  alert: AlertTriangle,
  fuel: Fuel,
  location: MapPin,
  maintenance: Clock
};

export function RecentAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          Recent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const IconComponent = iconMap[alert.icon];
          return (
            <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className={cn(
                "p-2 rounded-full",
                alert.type === "danger" && "bg-danger/10",
                alert.type === "warning" && "bg-warning/10",
                alert.type === "info" && "bg-primary/10"
              )}>
                <IconComponent className={cn(
                  "h-4 w-4",
                  alert.type === "danger" && "text-danger",
                  alert.type === "warning" && "text-warning",
                  alert.type === "info" && "text-primary"
                )} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-foreground">{alert.title}</h4>
                  <Badge 
                    variant={alert.type === "danger" ? "destructive" : alert.type === "warning" ? "secondary" : "default"}
                    className="text-xs"
                  >
                    {alert.vehicle}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}