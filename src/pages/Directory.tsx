import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FilterBar from "@/components/directory/FilterBar";
import UserCard from "@/components/directory/UserCard";

const Directory = () => {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [selectedWeek, setSelectedWeek] = useState("all");

  // Mock data - would come from backend
  const students = [
    { id: 1, name: "Rahul Kumar", domain: "Frontend", week: 18, batch: "January 2024", contactVisible: true, whatsappNumber: "919876543210" },
    { id: 2, name: "Priya Singh", domain: "Backend", week: 20, batch: "February 2024", contactVisible: true, whatsappNumber: "919876543211" },
    { id: 3, name: "Arjun Menon", domain: "Full Stack", week: 15, batch: "March 2024", contactVisible: true, whatsappNumber: "919876543212" },
    { id: 4, name: "Sneha Patel", domain: "Frontend", week: 8, batch: "April 2024", contactVisible: false },
    { id: 5, name: "Aditya Sharma", domain: "DevOps", week: 22, batch: "January 2024", contactVisible: true, whatsappNumber: "919876543213" },
    { id: 6, name: "Kavya Nair", domain: "Backend", week: 12, batch: "February 2024", contactVisible: false },
  ];

  const handleReset = () => {
    setSelectedDomain("all");
    setSelectedBatch("all");
    setSelectedWeek("all");
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Student Directory 📚</h1>
              <p className="text-muted-foreground text-lg">
                Connect with mentors and batch peers for guidance
              </p>
            </div>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Edit My Profile
            </Button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FilterBar
            selectedDomain={selectedDomain}
            selectedBatch={selectedBatch}
            selectedWeek={selectedWeek}
            onDomainChange={setSelectedDomain}
            onBatchChange={setSelectedBatch}
            onWeekChange={setSelectedWeek}
            onReset={handleReset}
          />
        </motion.div>

        {/* Student Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <UserCard {...student} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Directory;
