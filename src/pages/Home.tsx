import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Users, BookOpen, MessageSquare } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Home = () => {
  const username = "Student"; // This would come from auth context

  const recentAnnouncements = [
    {
      id: 1,
      title: "Weekly Mentorship Session - Saturday",
      description: "Join us for the weekly group mentorship session this Saturday at 10 AM.",
      date: "2 hours ago",
      badge: "Event",
    },
    {
      id: 2,
      title: "New React Resources Added",
      description: "Check out the latest React tutorials and documentation in the Resources tab.",
      date: "1 day ago",
      badge: "Update",
    },
    {
      id: 3,
      title: "Community Guidelines Updated",
      description: "Please review the updated community guidelines for raising concerns.",
      date: "3 days ago",
      badge: "Important",
    },
  ];

  const quickActions = [
    {
      title: "Raise New Concern",
      description: "Submit a technical issue, personal concern, or resource request",
      icon: AlertCircle,
      link: "/raise-concern",
      color: "text-primary",
    },
    {
      title: "View Directory",
      description: "Connect with seniors and batch peers for mentorship",
      icon: Users,
      link: "/directory",
      color: "text-secondary",
    },
    {
      title: "Browse Resources",
      description: "Access shared learning materials and documentation",
      icon: BookOpen,
      link: "/resources",
      color: "text-success",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 py-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Connect. Learn. Share. Grow Together.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hello, <span className="font-semibold text-foreground">{username}</span>! 👋
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link to={action.link}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-muted rounded-lg">
                            <Icon className={`w-6 h-6 ${action.color}`} />
                          </div>
                          <CardTitle className="text-lg">{action.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{action.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Recent Announcements</h2>
            <MessageSquare className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {recentAnnouncements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-2">
                          <CardTitle className="text-lg">{announcement.title}</CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {announcement.badge}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {announcement.description}
                        </CardDescription>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {announcement.date}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-primary rounded-2xl p-8 text-center text-white shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-3">Need Help or Have Questions?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Don't hesitate to reach out. Our community is here to support your learning journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/raise-concern">Raise a Concern</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/directory">Find a Mentor</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
