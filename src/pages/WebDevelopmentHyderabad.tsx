import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, Cloud, Database, Zap, Shield, BarChart3, Users } from 'lucide-react';
import { FaReact, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const services = [
  { icon: Globe, title: 'Web Applications', description: 'Custom web apps built with React and Django' },
  { icon: Code, title: 'E-Commerce', description: 'Online stores with payment integration' },
  { icon: BarChart3, title: 'Dashboards', description: 'Admin panels and analytics' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'AWS deployment and hosting' }
];

const techStack = [
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
  { name: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
  { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
];

export default function WebDevelopmentHyderabad() {
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
              Web Development Company
              <span className="text-accent"> Hyderabad</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Top-rated web development company in Hyderabad. We build modern web applications, SaaS platforms, and enterprise solutions.
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
                  View Portfolio
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Web Services</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <service.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Tech Stack</h2>
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

      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Start your web project</h2>
            <p className="text-primary-foreground/80 mb-8">Based in Hyderabad, serving clients across India</p>
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