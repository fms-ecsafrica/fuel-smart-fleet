import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Fuel } from "lucide-react";

const fuelData = [
  { day: "Mon", consumption: 120, efficiency: 85 },
  { day: "Tue", consumption: 98, efficiency: 92 },
  { day: "Wed", consumption: 134, efficiency: 78 },
  { day: "Thu", consumption: 110, efficiency: 88 },
  { day: "Fri", consumption: 95, efficiency: 95 },
  { day: "Sat", consumption: 87, efficiency: 89 },
  { day: "Sun", consumption: 76, efficiency: 91 },
];

export function FuelChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fuel className="h-5 w-5 text-primary" />
          Weekly Fuel Consumption
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fuelData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="day" 
                className="text-muted-foreground"
                fontSize={12}
              />
              <YAxis 
                className="text-muted-foreground"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px"
                }}
              />
              <Bar 
                dataKey="consumption" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]}
                name="Fuel (L)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}