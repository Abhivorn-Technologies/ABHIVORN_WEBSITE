import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Globe, Apple, Zap, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const features = [
  { icon: Smartphone, title: 'iOS & Android', description: 'Native apps for both platforms' },
  { icon: Globe, title: 'Cross-Platform', description: 'React Native for cost-effective solutions' },
  { icon: Shield, title: 'Secure', description: 'Enterprise-grade security' },
  { icon: BarChart3, title: 'Analytics', description: '用户行为追踪和报告' }
];

export default function MobileAppDevelopment() {
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
              Mobile App Development
              <span className="text-accent"> Company in Hyderabad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-medium">Hyderabad's Mobile Experts</span> - iOS & Android app development
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              Professional iOS and Android app development. Native and cross-platform solutions for startups and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
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
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Build your mobile app</h2>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                Start Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}