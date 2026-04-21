import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Sparkles, BarChart3, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const capabilities = [
  { icon: Bot, title: 'AI Chatbots', description: 'Intelligent customer support and internal assistants' },
  { icon: Brain, title: 'Machine Learning', description: 'Predictive models and data analysis' },
  { icon: BarChart3, title: 'Analytics', description: 'Business intelligence and insights' },
  { icon: Sparkles, title: 'Automation', description: 'Workflow automation with AI' }
];

const industries = ['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Logistics', 'Education'];

export default function AIDevelopment() {
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
              AI Development
              <span className="text-accent"> Company in Hyderabad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-medium">Hyderabad's AI Expert</span> - Building intelligent solutions for businesses
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              Build intelligent AI solutions for your business. Chatbots, machine learning, predictive analytics, and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Discuss Your AI Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">AI Capabilities</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <cap.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span key={industry} className="px-6 py-3 bg-background rounded-xl border border-border font-medium text-foreground">
                {industry}
              </span>
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
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Start your AI journey</h2>
            <p className="text-primary-foreground/80 mb-8">Get a free consultation for your AI project</p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}