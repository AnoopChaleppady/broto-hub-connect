import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ConcernCardProps {
  category: string;
  description: string;
  status: "open" | "in-progress" | "resolved";
  timestamp: string;
  onClick: () => void;
}

const ConcernCard = ({ category, description, status, timestamp, onClick }: ConcernCardProps) => {
  const statusConfig = {
    open: {
      label: "Open",
      className: "bg-primary text-primary-foreground",
    },
    "in-progress": {
      label: "In Progress",
      className: "bg-warning text-warning-foreground",
    },
    resolved: {
      label: "Resolved",
      className: "bg-success text-success-foreground",
    },
  };

  const categoryConfig: Record<string, string> = {
    technical: "Technical Issue",
    personal: "Personal Concern",
    resource: "Resource Request",
    coordination: "Coordination",
    other: "Other",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 border-border">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-border">
                  {categoryConfig[category]}
                </Badge>
                <Badge className={statusConfig[status].className}>
                  {statusConfig[status].label}
                </Badge>
              </div>
              <CardTitle className="text-lg">{description.substring(0, 60)}...</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <CardDescription className="text-sm">{timestamp}</CardDescription>
            <Button variant="ghost" size="sm" onClick={onClick}>
              View Details
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ConcernCard;
