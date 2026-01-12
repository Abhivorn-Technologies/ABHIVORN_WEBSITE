import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Calendar, Users, Shield, BarChart3, QrCode, Smartphone, Clock, CheckCircle, Star, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Comprehensive patient records with medical history, prescriptions, and treatment plans.'
  },
  {
    icon: Calendar,
    title: 'Smart Appointments',
    description: 'QR-based check-in, automated scheduling, and real-time queue management.'
  },
  {
    icon: QrCode,
    title: 'QR-Based Access',
    description: 'Unique QR codes for patients enabling quick identification and record access.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track patient flow, appointment trends, and operational metrics in real-time.'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security with encrypted data storage and access controls.'
  },
  {
    icon: Activity,
    title: 'Billing & Invoicing',
    description: 'Automated billing, insurance integration, and payment tracking.'
  }
];

const benefits = [
  {
    title: '40% Reduction in Wait Times',
    description: 'Smart queue management and QR-based check-ins eliminate bottlenecks at reception, reducing patient wait times significantly.',
    stats: '40% faster patient flow'
  },
  {
    title: 'Zero Paperwork',
    description: 'Digital records, e-prescriptions, and automated documentation eliminate paper-based processes entirely.',
    stats: '100% digital workflow'
  },
  {
    title: 'Real-Time Patient Tracking',
    description: 'Monitor patient journey from check-in to checkout with live status updates and notifications.',
    stats: 'Complete visibility'
  },
  {
    title: 'Enhanced Patient Experience',
    description: 'Patients can book appointments, access records, and receive reminders through our mobile-friendly platform.',
    stats: 'Patient satisfaction up 60%'
  }
];

const useCases = [
  {
    title: 'Clinics & Wellness Centers',
    description: 'Perfect for small to medium clinics looking to modernize their operations.',
    features: ['Appointment booking', 'Patient records', 'Billing']
  },
  {
    title: 'Hospitals & Multi-specialty',
    description: 'Scalable solution for hospitals with multiple departments and high patient volume.',
    features: ['Department management', 'Bed tracking', 'Lab integration']
  },
  {
    title: 'Diagnostic Centers',
    description: 'Streamline sample collection, report generation, and patient communication.',
    features: ['Test scheduling', 'Report delivery', 'SMS notifications']
  }
];

const faqs = [
  {
    question: 'What makes VorQard different from other HMS solutions?',
    answer: 'VorQard is built with a QR-first approach, enabling instant patient identification and reducing check-in time to under 10 seconds. Our modern tech stack ensures faster performance and easier customization.'
  },
  {
    question: 'Is VorQard HIPAA compliant?',
    answer: 'Yes, VorQard is designed with healthcare data security as a priority. We use encrypted storage, role-based access control, audit logs, and follow HIPAA guidelines for protected health information.'
  },
  {
    question: 'Can VorQard integrate with existing systems?',
    answer: 'VorQard offers APIs for integration with lab systems, pharmacy management, insurance providers, and other healthcare software. Our team provides integration support during implementation.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Standard implementation takes 3-4 weeks including data migration, staff training, and customization. We provide dedicated support throughout the process.'
  },
  {
    question: 'Is there a mobile app for patients?',
    answer: 'Yes, patients can access a mobile-friendly web app to book appointments, view their records, receive notifications, and check-in using QR codes.'
  }
];

const techStack = [
  'React', 'Django', 'PostgreSQL', 'AWS', 'Mobile Apps'
];

export default function VorQard() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-secondary text-white text-sm font-medium">
                  Beta Access
                </span>
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  HIPAA Compliant
                </span>
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  QR-Powered
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                QR-Based Healthcare{' '}
                <span className="text-secondary">Management System</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Revolutionize patient care with smart QR-based identification, 
                streamlined appointments, and comprehensive healthcare analytics. 
                Built for modern clinics and hospitals.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="bg-secondary hover:bg-secondary/90">
                    Join Beta Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <QrCode className="w-20 h-20 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">VorQard</div>
                  <div className="text-muted-foreground">Healthcare Reimagined</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Complete Healthcare Management
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a modern healthcare facility efficiently
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose VorQard?</h2>
            <p className="text-muted-foreground">Transform your healthcare operations with measurable results</p>
          </motion.div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-lg text-sm font-medium">
                    {benefit.stats}
                  </span>
                </div>
                <div className={`aspect-video rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Built For Healthcare</h2>
            <p className="text-muted-foreground">Tailored solutions for different healthcare settings</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature) => (
                    <span key={feature} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-sm font-medium text-muted-foreground">Built with:</span>
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
                {tech}
              </span>
            ))}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-secondary" />
              HIPAA Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Beta CTA Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-white text-sm font-medium mb-6">
              Limited Beta Access
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Be Among the First to Experience VorQard
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our exclusive beta program and help shape the future of healthcare management. 
              Get early access, priority support, and special founding member pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button variant="hero" className="bg-secondary hover:bg-secondary/90">
                Join Beta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Limited to 50 beta partners. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-secondary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Modernize Your Healthcare Facility?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join our beta program and transform patient care with VorQard's innovative QR-based system.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="xl" className="bg-white text-secondary hover:bg-white/90">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
