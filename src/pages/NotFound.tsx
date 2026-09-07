import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // 404 Page mounted
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-muted/50 to-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[150px] sm:text-[200px] font-bold leading-none bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              404
            </span>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild variant="hero" size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">
                <Search className="mr-2 h-5 w-5" />
                Contact Support
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFound;
