import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Code, Cloud, Database, Globe, Smartphone, Settings, Shield, BarChart3, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const saasProducts = [
  {
    title: 'VORN HR',
    description: 'Complete HR Management System',
    icon: Users,
    features: [
      'Employee Management & Database',
      'Attendance Tracking (Facial Recognition)',
      'Leave Management & Workflows',
      'Performance Management (OKRs)',
      'Payroll & Compensation',
      'HR Analytics & Reports',
      'Mobile Apps (iOS & Android)',
      'Role-Based Access Control'
    ],
    metrics: ['10+ companies', '99.8% uptime'],
    pricing: 'Starting at ₹5,000/month',
    cta: 'Get Demo',
    href: '/products/vorn-hr'
  },
  {
    title: 'VorQard',
    description: 'QR-Based Healthcare Management',
    icon: Heart,
    features: [
      'Patient Management System',
      'Appointment Scheduling',
      'QR-Based Check-in',
      'Billing & Invoicing',
      'Medical Records Management',
      'Analytics Dashboard'
    ],
    badge: 'Beta Access Available',
    metrics: ['HIPAA compliant', '40% wait time reduction'],
    cta: 'Join Beta Program',
    href: '/products/vorqard'
  }
];

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Custom web applications built with modern frameworks',
    tech: ['React', 'Django', 'PostgreSQL', 'TypeScript']
  },
  {
    icon: Heart,
    title: 'Healthcare Technology',
    description: 'HIPAA-compliant healthcare management systems',
    tech: ['Patient Management', 'Telemedicine', 'EMR Integration']
  },
  {
    icon: Users,
    title: 'HRMS Implementation',
    description: 'VORN HR deployment with custom configurations',
    tech: ['Biometric Integration', 'Payroll Setup', 'Training']
  },
  {
    icon: Settings,
    title: 'System Integration',
    description: 'Connect your existing systems seamlessly',
    tech: ['API Development', 'ERP Integration', 'CRM Sync']
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure on AWS',
    tech: ['AWS', 'DevOps', 'CI/CD', 'Kubernetes']
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'ETL pipelines and document processing',
    tech: ['OCR', 'Data Extraction', 'Automation']
  }
];

const engagementModels = [
  {
    title: 'Fixed Project',
    description: 'Best for well-defined projects with clear requirements',
    timeline: '6-12 weeks',
    investment: '₹2,00,000 - ₹20,00,000',
    features: ['Fixed scope & budget', 'Milestone-based delivery', 'Clear timeline'],
    cta: 'Discuss Your Project'
  },
  {
    title: 'Time & Material',
    description: 'Best for evolving requirements and agile development',
    timeline: 'Flexible',
    investment: '₹2,000/day or ₹500/hour',
    features: ['Flexible scope', 'Pay for actual work', 'Agile methodology'],
    cta: 'Get Quote',
    highlighted: true
  },
  {
    title: 'Retainer Model',
    description: 'Best for ongoing support and maintenance',
    timeline: '20-40 hours/month',
    investment: '₹25,000 - ₹50,000/month',
    features: ['Dedicated support', 'Priority response', 'Regular updates'],
    cta: 'Subscribe'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We understand your requirements, analyze your needs, and create a detailed project plan.'
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Our team designs the solution and develops it using agile methodology with regular updates.'
  },
  {
    step: '03',
    title: 'Testing & Deployment',
    description: 'Rigorous testing ensures quality, followed by smooth deployment to your environment.'
  },
  {
    step: '04',
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and maintenance to keep your solution running optimally.'
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive{' '}
              <span className="text-accent">Technology Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From ready-to-deploy SaaS products to custom enterprise solutions,
              we have the expertise to transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* SaaS Products Section */}
      <section id="products" className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our SaaS Products</h2>
            <p className="text-muted-foreground">Ready-to-deploy solutions for modern businesses</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {saasProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 relative"
              >
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                    {product.badge}
                  </span>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <product.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  {product.metrics.map((metric) => (
                    <span key={metric} className="px-3 py-1 bg-accent/10 text-primary rounded-full text-sm font-medium">
                      {metric}
                    </span>
                  ))}
                </div>

                {product.pricing && (
                  <p className="text-lg font-semibold text-foreground mb-6">{product.pricing}</p>
                )}

                <div className="flex gap-4">
                  <Link to={product.href}>
                    <Button variant="hero" aria-label={`Get Demo for ${product.title}`}>
                      {product.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" aria-label={`View Pricing for ${product.title}`}>View Pricing</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Development Section */}
      <section id="custom" className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Custom Development Services</h2>
            <p className="text-muted-foreground">Enterprise-grade solutions tailored to your needs</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-muted-foreground">Flexible engagement models to suit your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${model.highlighted
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border'
                  }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${model.highlighted ? '' : 'text-foreground'}`}>
                  {model.title}
                </h3>
                <p className={`text-sm mb-6 ${model.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {model.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className={`text-xs ${model.highlighted ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                      Timeline
                    </div>
                    <div className="font-semibold">{model.timeline}</div>
                  </div>
                  <div>
                    <div className={`text-xs ${model.highlighted ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                      Investment
                    </div>
                    <div className="font-semibold">{model.investment}</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`h-4 w-4 ${model.highlighted ? 'text-secondary' : 'text-accent'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    variant={model.highlighted ? 'hero' : 'outline'}
                    className={model.highlighted ? 'bg-accent hover:bg-accent/90 w-full' : 'w-full'}
                    aria-label={`${model.cta} for ${model.title}`}
                  >
                    {model.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Development Process</h2>
            <p className="text-muted-foreground">A proven methodology for successful project delivery</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-accent/20 mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Let's discuss your requirements and find the perfect solution for your business.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="bg-accent hover:bg-accent/90" aria-label="Get a Free Consultation">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
