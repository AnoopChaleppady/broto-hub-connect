import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ConcernCard from "@/components/concerns/ConcernCard";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ListChecks } from "lucide-react";

const MyStatus = () => {
  const [selectedConcern, setSelectedConcern] = useState<any>(null);

  // Mock data
  const concerns = [
    {
      id: 1,
      category: "technical",
      description: "Having trouble understanding React hooks, especially useEffect dependency array",
      status: "in-progress" as const,
      timestamp: "2 days ago",
      fullDescription: "I'm having trouble understanding how the useEffect dependency array works. Sometimes my component re-renders too many times, and I'm not sure which dependencies to include. Could someone explain this concept in detail?",
      responses: [
        {
          author: "Senior Mentor - Arjun",
          message: "Great question! The dependency array controls when useEffect runs. I'll share some resources that helped me understand this.",
          timestamp: "1 day ago",
        },
      ],
      assignee: "Arjun Menon",
    },
    {
      id: 2,
      category: "resource",
      description: "Need good resources for learning TypeScript with React",
      status: "resolved" as const,
      timestamp: "5 days ago",
      fullDescription: "I want to improve my TypeScript skills, especially when working with React. Can someone recommend good tutorials or documentation?",
      responses: [
        {
          author: "Senior Mentor - Priya",
          message: "I've added several TypeScript resources to the Resource Library. Check them out!",
          timestamp: "4 days ago",
        },
      ],
      assignee: "Priya Singh",
    },
    {
      id: 3,
      category: "coordination",
      description: "Missed last week's mentorship session, need recording",
      status: "open" as const,
      timestamp: "1 day ago",
      fullDescription: "I couldn't attend last week's mentorship session due to a family emergency. Is there a recording available? I don't want to miss the important topics that were covered.",
      responses: [],
      assignee: null,
    },
  ];

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <ListChecks className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">My Concerns</h1>
              <p className="text-muted-foreground text-lg mt-1">
                Track the status of your submitted concerns
              </p>
            </div>
          </div>
        </motion.div>

        {/* Concerns List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-4">
            {concerns.map((concern, index) => (
              <motion.div
                key={concern.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <ConcernCard
                  {...concern}
                  onClick={() => setSelectedConcern(concern)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detail Dialog */}
        <Dialog open={!!selectedConcern} onOpenChange={() => setSelectedConcern(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedConcern && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">
                      {selectedConcern.category}
                    </Badge>
                    <Badge
                      className={
                        selectedConcern.status === "resolved"
                          ? "bg-success text-success-foreground"
                          : selectedConcern.status === "in-progress"
                          ? "bg-warning text-warning-foreground"
                          : "bg-primary text-primary-foreground"
                      }
                    >
                      {selectedConcern.status === "in-progress" ? "In Progress" : selectedConcern.status}
                    </Badge>
                  </div>
                  <DialogTitle className="text-2xl">{selectedConcern.description}</DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    Submitted {selectedConcern.timestamp}
                    {selectedConcern.assignee && ` • Assigned to ${selectedConcern.assignee}`}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Full Description */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Full Description</h3>
                    <p className="text-muted-foreground">{selectedConcern.fullDescription}</p>
                  </div>

                  <Separator />

                  {/* Responses */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">
                      Responses ({selectedConcern.responses.length})
                    </h3>
                    {selectedConcern.responses.length > 0 ? (
                      <div className="space-y-4">
                        {selectedConcern.responses.map((response: any, index: number) => (
                          <div key={index} className="bg-muted p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-foreground">{response.author}</span>
                              <span className="text-xs text-muted-foreground">{response.timestamp}</span>
                            </div>
                            <p className="text-muted-foreground">{response.message}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-center py-8">
                        No responses yet. We'll update you soon!
                      </p>
                    )}
                  </div>

                  {/* Status Timeline */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Status Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <div>
                          <p className="font-medium text-foreground">Concern Submitted</p>
                          <p className="text-sm text-muted-foreground">{selectedConcern.timestamp}</p>
                        </div>
                      </div>
                      {selectedConcern.status !== "open" && (
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-warning mt-2" />
                          <div>
                            <p className="font-medium text-foreground">In Progress</p>
                            <p className="text-sm text-muted-foreground">Being reviewed by team</p>
                          </div>
                        </div>
                      )}
                      {selectedConcern.status === "resolved" && (
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-success mt-2" />
                          <div>
                            <p className="font-medium text-foreground">Resolved</p>
                            <p className="text-sm text-muted-foreground">Issue has been addressed</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default MyStatus;
