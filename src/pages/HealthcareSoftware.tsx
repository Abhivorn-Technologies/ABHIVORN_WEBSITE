import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Calendar, Shield, BarChart3, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const features = [
  { icon: Users, title: 'Patient Management', description: 'Complete EMR and patient records' },
  { icon: Calendar, title: 'Appointments', description: 'Smart scheduling and reminders' },
  { icon: BarChart3, title: 'Analytics', description: 'Business insights and reports' },
  { icon: Shield, title: 'HIPAA Compliant', description: 'Security and data protection' }
];

export default function HealthcareSoftware() {
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
              Healthcare Software
              <span className="text-accent"> Development Company Hyderabad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-medium">Hyderabad's Healthcare IT Expert</span> - HIPAA-compliant solutions for clinics
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              VorQard - HIPAA-compliant healthcare management systems for clinics and hospitals in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products/vorqard">
                <Button variant="hero" size="xl">
                  Join Beta Program
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Healthcare Solutions</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <feature.icon className="h-10 w-10 text-accent mx-auto mb-4" />
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
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Transform your healthcare practice</h2>
            <p className="text-primary-foreground/80 mb-8">Join our beta program</p>
            <Link to="/products/vorqard">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}