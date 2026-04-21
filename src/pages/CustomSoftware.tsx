import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Globe, Cloud, Database, Zap, Shield, TrendingUp } from 'lucide-react';
import { FaReact, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const benefits = [
  { icon: Code, title: 'Tailored to Your Business', description: 'Custom software that matches your exact workflows and requirements' },
  { icon: TrendingUp, title: 'Scalable Architecture', description: 'Built to grow with your business, handling increased load seamlessly' },
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security with encryption, access controls, and compliance' },
  { icon: Zap, title: 'Better Performance', description: 'Optimized code for fastest speed and best user experience' }
];

const techStack = [
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Django', icon: <SiDjango className="text-[#092E20] dark:text-[#0C4B33]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
  { name: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
  { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
];

const process = [
  { step: '01', title: 'Discovery', description: 'We analyze your business needs, goals, and existing systems' },
  { step: '02', title: 'Design', description: 'Create detailed wireframes and technical specifications' },
  { step: '03', title: 'Development', description: 'Build your custom solution with agile methodology' },
  { step: '04', title: 'Testing', description: 'Rigorous QA to ensure bug-free performance' },
  { step: '05', title: 'Deployment', description: 'Launch with ongoing support and maintenance' }
];

export default function CustomSoftware() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Custom Software Development
              <span className="text-accent"> Company in Hyderabad</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hyderabad's leading custom software development company. Build scalable web applications and enterprise solutions. Trusted by 10+ companies across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="xl">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Custom Software?</h2>
            <p className="text-muted-foreground">Off-the-shelf software can't match these benefits</p>
          </motion.div>

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
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Modern Tech Stack</h2>
            <p className="text-muted-foreground">Built with enterprise-grade technologies</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 px-6 py-3 bg-background rounded-xl border border-border">
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Development Process</h2>
            <p className="text-muted-foreground">Transparent, agile methodology</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, index) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent/30 mb-2">{p.step}</div>
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to build your custom software?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get a free consultation and quote for your project.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}