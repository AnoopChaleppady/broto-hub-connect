import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Shield, MessageSquarePlus } from "lucide-react";
import Layout from "@/components/layout/Layout";

const SeniorDashboard = () => {
  const [selectedConcern, setSelectedConcern] = useState<any>(null);
  const [response, setResponse] = useState("");
  const [newStatus, setNewStatus] = useState("");

  // Mock data
  const concerns = [
    {
      id: 1,
      category: "Technical Issue",
      submittedBy: "Anonymous",
      status: "open",
      date: "2024-01-10",
      description: "Having trouble understanding React hooks, especially useEffect dependency array",
    },
    {
      id: 2,
      category: "Resource Request",
      submittedBy: "Sneha Patel",
      status: "in-progress",
      date: "2024-01-08",
      description: "Need good resources for learning TypeScript with React",
    },
    {
      id: 3,
      category: "Coordination",
      submittedBy: "Aditya Sharma",
      status: "open",
      date: "2024-01-12",
      description: "Missed last week's mentorship session, need recording",
    },
  ];

  const handleStatusChange = (concernId: number, status: string) => {
    toast.success(`Status updated to ${status}`);
  };

  const handleAddResponse = () => {
    if (!response.trim()) {
      toast.error("Please enter a response");
      return;
    }
    toast.success("Response added successfully");
    setSelectedConcern(null);
    setResponse("");
  };

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
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Senior Dashboard 🛡️</h1>
              <p className="text-muted-foreground text-lg mt-1">
                Manage and respond to student concerns
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader className="pb-3">
                <CardDescription>Total Concerns</CardDescription>
                <CardTitle className="text-3xl">24</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader className="pb-3">
                <CardDescription>Open Concerns</CardDescription>
                <CardTitle className="text-3xl text-primary">8</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader className="pb-3">
                <CardDescription>Resolved This Week</CardDescription>
                <CardTitle className="text-3xl text-success">12</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </motion.div>

        {/* Concerns Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-border">
            <CardHeader>
              <CardTitle>All Concerns</CardTitle>
              <CardDescription>Review and manage student concerns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Category</TableHead>
                      <TableHead>Submitted By</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {concerns.map((concern) => (
                      <TableRow key={concern.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{concern.category}</TableCell>
                        <TableCell>{concern.submittedBy}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              concern.status === "open"
                                ? "bg-primary text-primary-foreground"
                                : concern.status === "in-progress"
                                ? "bg-warning text-warning-foreground"
                                : "bg-success text-success-foreground"
                            }
                          >
                            {concern.status === "in-progress" ? "In Progress" : concern.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{concern.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Select
                              defaultValue={concern.status}
                              onValueChange={(value) => handleStatusChange(concern.id, value)}
                            >
                              <SelectTrigger className="w-[130px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="open">Open</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="resolved">Resolved</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedConcern(concern)}
                            >
                              <MessageSquarePlus className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Response Dialog */}
        <Dialog open={!!selectedConcern} onOpenChange={() => setSelectedConcern(null)}>
          <DialogContent>
            {selectedConcern && (
              <>
                <DialogHeader>
                  <DialogTitle>Add Response</DialogTitle>
                  <DialogDescription>
                    Responding to concern from {selectedConcern.submittedBy}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Concern:</p>
                    <p className="text-sm text-muted-foreground">{selectedConcern.description}</p>
                  </div>
                  <Textarea
                    placeholder="Type your response here..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    rows={6}
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setSelectedConcern(null)}>
                      Cancel
                    </Button>
                    <Button className="flex-1" onClick={handleAddResponse}>
                      Send Response
                    </Button>
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

export default SeniorDashboard;
