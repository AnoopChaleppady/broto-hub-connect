import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface UserCardProps {
  name: string;
  domain: string;
  week: number;
  batch: string;
  contactVisible: boolean;
  whatsappNumber?: string;
}

const UserCard = ({ name, domain, week, batch, contactVisible, whatsappNumber }: UserCardProps) => {
  const domainColors: Record<string, string> = {
    "Frontend": "bg-primary text-primary-foreground",
    "Backend": "bg-secondary text-secondary-foreground",
    "Full Stack": "bg-success text-success-foreground",
    "DevOps": "bg-warning text-warning-foreground",
  };

  const handleWhatsAppClick = () => {
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{name}</CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge className={domainColors[domain] || "bg-muted"}>
                  {domain}
                </Badge>
                <Badge variant="outline" className="border-border">
                  Week {week}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Batch: <span className="font-medium text-foreground">{batch}</span>
            </p>
            {contactVisible ? (
              <Button
                onClick={handleWhatsAppClick}
                className="w-full"
                variant="default"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message on WhatsApp
              </Button>
            ) : (
              <div className="flex items-center justify-center p-3 bg-muted rounded-lg text-muted-foreground text-sm">
                <Lock className="w-4 h-4 mr-2" />
                Contact Hidden
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserCard;
