import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { RecentAlerts } from "@/components/Dashboard/RecentAlerts";
import { FuelChart } from "@/components/Dashboard/FuelChart";
import { Car, Fuel, Users, AlertTriangle, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fleet Dashboard</h1>
          <p className="text-muted-foreground">Monitor your fleet operations in real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Active Vehicles"
            value={24}
            change="+2 from yesterday"
            changeType="positive"
            icon={Car}
            variant="default"
          />
          <StatsCard
            title="Total Fuel Used"
            value="1,247L"
            change="+8.2% efficiency"
            changeType="positive"
            icon={Fuel}
            variant="success"
          />
          <StatsCard
            title="Active Drivers"
            value={18}
            change="2 on break"
            changeType="neutral"
            icon={Users}
            variant="default"
          />
          <StatsCard
            title="Active Alerts"
            value={3}
            change="2 critical"
            changeType="negative"
            icon={AlertTriangle}
            variant="warning"
          />
        </div>

        {/* Charts and Alerts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FuelChart />
          <RecentAlerts />
        </div>

        {/* Live Tracking Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Live Vehicle Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: "URA-001", status: "En Route", location: "Kampala - Entebbe", fuel: 85, driver: "John Doe" },
                { id: "URA-007", status: "Parked", location: "Central Depot", fuel: 15, driver: "Sarah Smith" },
                { id: "URA-003", status: "Maintenance", location: "Service Center", fuel: 92, driver: "Mike Johnson" },
                { id: "URA-015", status: "En Route", location: "Mbarara Route", fuel: 67, driver: "Alice Brown" },
                { id: "URA-022", status: "Idle", location: "Regional Office", fuel: 78, driver: "David Wilson" },
                { id: "URA-008", status: "En Route", location: "Gulu Highway", fuel: 45, driver: "Emma Davis" },
              ].map((vehicle) => (
                <div key={vehicle.id} className="p-4 border rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={
                      vehicle.status === "En Route" ? "default" :
                      vehicle.status === "Parked" ? "secondary" :
                      vehicle.status === "Maintenance" ? "destructive" : "outline"
                    }>
                      {vehicle.status}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4 text-muted-foreground" />
                      <span className={`text-sm font-medium ${
                        vehicle.fuel < 20 ? "text-danger" : 
                        vehicle.fuel < 50 ? "text-warning" : "text-success"
                      }`}>
                        {vehicle.fuel}%
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground">{vehicle.id}</h4>
                  <p className="text-sm text-muted-foreground">{vehicle.location}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{vehicle.driver}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Upcoming Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { vehicle: "URA-001", type: "Oil Change", due: "2 days", urgency: "medium" },
                { vehicle: "URA-003", type: "Annual Service", due: "Overdue", urgency: "high" },
                { vehicle: "URA-015", type: "Tire Rotation", due: "1 week", urgency: "low" },
                { vehicle: "URA-022", type: "Brake Inspection", due: "3 days", urgency: "medium" },
              ].map((maintenance, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{maintenance.vehicle}</Badge>
                    <span className="font-medium text-foreground">{maintenance.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Due: </span>
                    <Badge variant={
                      maintenance.urgency === "high" ? "destructive" :
                      maintenance.urgency === "medium" ? "secondary" : "outline"
                    }>
                      {maintenance.due}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
