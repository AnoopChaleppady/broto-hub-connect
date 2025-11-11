import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, User } from "lucide-react";
import { motion } from "framer-motion";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  domain: string;
  uploadedBy: string;
}

const ResourceCard = ({ title, description, link, domain, uploadedBy }: ResourceCardProps) => {
  const domainColors: Record<string, string> = {
    Frontend: "bg-primary text-primary-foreground",
    Backend: "bg-secondary text-secondary-foreground",
    "Full Stack": "bg-success text-success-foreground",
    General: "bg-muted text-muted-foreground",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border h-full flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge className={domainColors[domain] || "bg-muted"}>
              {domain}
            </Badge>
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <User className="w-4 h-4" />
            <span>Uploaded by {uploadedBy}</span>
          </div>
          <Button className="w-full" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Open Resource
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResourceCard;
