import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "danger";
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  variant = "default"
}: StatsCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {change && (
              <p className={cn(
                "text-sm font-medium",
                changeType === "positive" && "text-success",
                changeType === "negative" && "text-danger",
                changeType === "neutral" && "text-muted-foreground"
              )}>
                {change}
              </p>
            )}
          </div>
          <div className={cn(
            "p-3 rounded-lg",
            variant === "default" && "bg-primary/10",
            variant === "success" && "bg-success/10",
            variant === "warning" && "bg-warning/10",
            variant === "danger" && "bg-danger/10"
          )}>
            <Icon className={cn(
              "h-6 w-6",
              variant === "default" && "text-primary",
              variant === "success" && "text-success",
              variant === "warning" && "text-warning",
              variant === "danger" && "text-danger"
            )} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}