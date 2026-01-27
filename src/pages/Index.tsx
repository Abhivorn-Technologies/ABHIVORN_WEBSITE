import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building, TrendingUp, Heart, Code, Zap, BarChart3, CheckCircle } from 'lucide-react';
import { FaReact, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const products = [
  {
    icon: Users,
    title: 'VORN HR',
    subtitle: 'Complete HR Management System',
    features: ['Employee Management', 'Attendance Tracking', 'Leave Management', 'Payroll'],
    href: '/products/vorn-hr',
    cta: 'Learn More',
    color: 'primary'
  },
  {
    icon: Heart,
    title: 'VorQard',
    subtitle: 'QR-Based Healthcare Management',
    features: ['Patient Management', 'Appointments', 'Billing', 'Analytics'],
    href: '/products/vorqard',
    cta: 'Join Beta',
    badge: 'Beta Access',
    color: 'secondary'
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    subtitle: 'Tailored for Your Business',
    features: ['Web Apps', 'System Integration', 'Cloud Architecture', 'API Development'],
    href: '/services',
    cta: 'Start Your Project',
    color: 'accent'
  }
];

const metrics = [
  { value: '10+', label: 'Companies Trust Us', icon: Building },
  { value: '5,000+', label: 'Employees Managed', icon: Users },
  { value: '99.8%', label: 'System Uptime', icon: Zap },
  { value: '95%', label: 'Customer Satisfaction', icon: TrendingUp }
];

const caseStudies = [
  {
    company: 'Elevate Rootz',
    industry: 'Healthcare',
    result: '100+ patients onboarded in first month',
    metric: '80% reduction in booking time',
    href: '/projects'
  },
  {
    company: 'US Mortgage Processing',
    industry: 'Finance',
    result: '98.5% extraction accuracy',
    metric: '85% time reduction',
    href: '/projects'
  },
  {
    company: 'HRMS Implementation',
    industry: 'Enterprise',
    result: '10+ companies deployed',
    metric: '5,000+ employees managed',
    href: '/projects'
  }
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

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-medium">
                  99.8% Uptime
                </span>
                <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-primary text-sm font-medium">
                  5,000+ Users
                </span>
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  MSME Registered
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Enterprise-Grade{' '}
                <span className="text-accent">HR & Healthcare</span>
                {' '}Solutions
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Trusted by 10+ companies managing 5,000+ employees across India. Build, manage, and scale your business with our modern SaaS solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl" aria-label="Book a Demo for Enterprise Solutions">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="heroOutline" size="xl" aria-label="View Our Products and Services">
                    View Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for modern businesses with enterprise-grade security and scalability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl border border-border p-8 card-hover"
              >
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                    {product.badge}
                  </span>
                )}

                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <product.icon className="h-7 w-7 text-accent" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.subtitle}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={product.href}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    {product.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real impact for real businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl border border-border p-8 card-hover"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                  {study.industry}
                </span>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {study.company}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {study.result}
                </p>

                <div className="flex items-center gap-2 text-accent font-medium mb-6">
                  <BarChart3 className="h-4 w-4" />
                  {study.metric}
                </div>

                <Link to={study.href} className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade tech stack for reliability and performance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 px-6 py-3 bg-background rounded-xl border border-border hover:border-accent/50 hover:shadow-card transition-all"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Join 10+ companies already using our solutions to streamline operations and boost productivity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
