import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Upload, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ResourceCard from "@/components/resources/ResourceCard";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");

  // Mock data
  const resources = [
    {
      id: 1,
      title: "React Hooks Complete Guide",
      description: "Comprehensive guide covering all React hooks with practical examples",
      link: "https://react.dev/reference/react",
      domain: "Frontend",
      uploadedBy: "Arjun Menon",
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      description: "Essential TypeScript patterns and best practices for React development",
      link: "https://www.typescriptlang.org/docs/",
      domain: "Frontend",
      uploadedBy: "Priya Singh",
    },
    {
      id: 3,
      title: "Node.js API Development",
      description: "Building RESTful APIs with Node.js, Express, and MongoDB",
      link: "https://nodejs.org/docs/",
      domain: "Backend",
      uploadedBy: "Rahul Kumar",
    },
    {
      id: 4,
      title: "Git & GitHub Workflow",
      description: "Professional Git workflow and collaboration best practices",
      link: "https://docs.github.com/",
      domain: "General",
      uploadedBy: "Sneha Patel",
    },
    {
      id: 5,
      title: "System Design Fundamentals",
      description: "Introduction to system design concepts and architectural patterns",
      link: "https://github.com/donnemartin/system-design-primer",
      domain: "Full Stack",
      uploadedBy: "Aditya Sharma",
    },
    {
      id: 6,
      title: "Database Design Patterns",
      description: "SQL and NoSQL database design patterns and optimization techniques",
      link: "https://www.postgresql.org/docs/",
      domain: "Backend",
      uploadedBy: "Kavya Nair",
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground">Resource Library 📖</h1>
                <p className="text-muted-foreground text-lg mt-1">
                  Access curated learning materials and documentation
                </p>
              </div>
            </div>
            <Button className="bg-gradient-primary">
              <Upload className="w-4 h-4 mr-2" />
              Upload Resource
            </Button>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Domains</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="fullstack">Full Stack</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <ResourceCard {...resource} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Resources;
