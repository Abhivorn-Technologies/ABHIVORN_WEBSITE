import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, CheckCircle, Shield, TrendingUp, Calendar, DollarSign, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const features = [
  { icon: Users, title: 'Employee Management', description: 'Complete employee database with profiles, documents, and org chart' },
  { icon: Calendar, title: 'Attendance Tracking', description: 'Facial recognition, GPS check-in, and smart scheduling' },
  { icon: DollarSign, title: 'Payroll Processing', description: 'Automated payroll with PF, ESI, and tax calculations' },
  { icon: BarChart3, title: 'HR Analytics', description: 'Real-time insights and custom reports' }
];

const benefits = [
  { title: 'Save 80% Time', description: 'Automate manual HR tasks and reduce paperwork' },
  { title: 'Zero Errors', description: 'Eliminate payroll mistakes and compliance issues' },
  { title: '99.8% Uptime', description: 'Enterprise-grade reliability you can trust' },
  { title: '5,000+ Users', description: 'Proven at scale across companies' }
];

export default function HRMSSoftware() {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              HRMS Software Development
              <span className="text-accent"> Company in Hyderabad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-medium">Hyderabad's Trusted HRMS Provider</span> - Serving companies across Telangana and Andhra Pradesh
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              VORN HR - Enterprise-grade HR management system for Indian businesses. Manage attendance, payroll, leave, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products/vorn-hr">
                <Button variant="hero" size="xl">
                  Get Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <h3 className="text-3xl font-bold text-accent mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Key HRMS Features</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <feature.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to automate your HR?</h2>
            <p className="text-primary-foreground/80 mb-8">Start with our free plan for up to 20 employees</p>
            <Link to="/products/vorn-hr">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}