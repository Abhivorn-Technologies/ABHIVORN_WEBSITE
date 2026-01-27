import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, Clock, Shield, BarChart3, Smartphone, Database,
  Zap, CheckCircle, Star, DollarSign, CheckSquare, Building2,
  Fingerprint, MapPin, Calendar, FileText, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const quickFeatures = [
  { icon: Users, title: 'Smart Recruitment', description: 'Automate hiring workflows' },
  { icon: Clock, title: 'Time Tracking', description: 'Geo-fenced attendance' },
  { icon: DollarSign, title: 'Payroll Access', description: 'One-click processing' },
  { icon: TrendingUp, title: 'Performance', description: '360° appraisals & OKRs' },
  { icon: CheckSquare, title: 'Compliance', description: '100% statutory compliant' },
  { icon: Smartphone, title: 'Mobile App', description: 'ESS on the go' },
];

const coreHRFeatures = [
  'Employee Database',
  'Org Chart',
  'Document Management',
  'Self-Service Portal',
];

const timeAttendanceFeatures = [
  'GPS Tracking',
  'Biometric Integration',
  'Shift Management',
  'Overtime Calculation',
];

const payrollFeatures = [
  'Tax Automation',
  'Direct Deposit',
  'Benefits Administration',
  'Statutory Compliance',
];

const stats = [
  { value: '70%', label: 'Admin Time Reduced', description: 'Average reduction in manual HR tasks' },
  { value: '99.9%', label: 'Payroll Accuracy', description: 'Accuracy rate across all clients' },
  { value: '60%', label: 'Ticket Volume Down', description: 'Reduction in HR support tickets' },
  { value: '92%', label: 'Employee Satisfaction', description: 'Improvement in employee experience' },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for small teams getting started',
    features: ['Up to 20 employees', 'Basic attendance', 'Leave management', 'Email support'],
    cta: 'Get Started Free',
    variant: 'outline' as const
  },
  {
    name: 'Professional',
    price: '₹10,000',
    period: '/month',
    description: 'For growing businesses with advanced needs',
    features: ['Up to 500 employees', 'All features', 'Facial recognition', 'Priority support', 'API access', 'Custom reports'],
    cta: 'Start Free Trial',
    highlighted: true,
    variant: 'hero' as const
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Pricing',
    description: 'For large organizations with custom requirements',
    features: ['500+ employees', 'Custom features', 'Dedicated support', 'On-premise option', 'SLA guarantee', 'Training included'],
    cta: 'Contact Sales',
    variant: 'outline' as const
  }
];

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Standard implementation takes 2-3 weeks, including data migration, configuration, and training. For complex requirements, we provide a detailed timeline during the consultation.'
  },
  {
    question: 'Do you offer training?',
    answer: 'Yes! All plans include initial training for HR admins and managers. We also provide documentation, video tutorials, and ongoing support.'
  },
  {
    question: 'Can it integrate with our existing systems?',
    answer: 'Absolutely. VORN HR supports integration with popular payroll systems, biometric devices, ERP solutions, and custom APIs for seamless data flow.'
  },
  {
    question: 'Is our data secure?',
    answer: 'Security is our top priority. We use SSL/TLS encryption, role-based access control, regular backups, and are compliant with data protection regulations.'
  },
  {
    question: 'What happens if we need customization?',
    answer: 'Our Enterprise plan includes custom development. We can modify workflows, add new modules, and integrate with your specific requirements.'
  }
];

export default function VornHR() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                Smart HR Automation
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Simplifying{' '}
                <span className="text-secondary">HR</span>{' '}
                <span className="text-accent">Management</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Empower your workforce with an intelligent, data-driven HR platform.
                From payroll to performance, we automate it all with precision and ease.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a href="https://www.vornhr.com/pricing" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" aria-label="Get Started with Vorn HR for Free">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.vornhr.com/contact" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl" className="border-foreground/20 text-foreground hover:bg-foreground/5" aria-label="Book a Vorn HR Demo">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Demo
                  </Button>
                </a>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5+ Companies</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-2xl font-bold text-foreground">200+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-3xl blur-2xl" />
                <div className="relative bg-card border border-border rounded-3xl p-2 shadow-2xl">
                  <img
                    src="https://www.vornhr.com/hr_with_laptop.png"
                    alt="VORN HR Dashboard Preview"
                    width="800"
                    height="500"
                    className="w-full rounded-2xl"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -right-4 top-1/4 transform rotate-6">
                  <div className="bg-card border border-border rounded-xl p-3 shadow-lg">
                    <div className="text-xs text-muted-foreground">Explore More</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Features Strip */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Solution Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-secondary mb-2 block">Comprehensive Solution</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From core HR management to advanced analytics, our platform provides a complete suite
              of tools to streamline your entire workforce operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Core HR */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Core HR</h3>
              <ul className="space-y-3">
                {coreHRFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Time & Attendance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Fingerprint className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Time & Attendance</h3>
              <ul className="space-y-3">
                {timeAttendanceFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Payroll */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Payroll</h3>
              <ul className="space-y-3">
                {payrollFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-secondary mb-2 block">Proven Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industry-Leading Performance
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Choose the plan that fits your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${plan.highlighted
                  ? 'bg-primary text-primary-foreground ring-2 ring-secondary shadow-xl scale-105'
                  : 'bg-card border border-border'
                  }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? '' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`h-4 w-4 ${plan.highlighted ? 'text-secondary' : 'text-primary'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="https://www.vornhr.com/contact" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant={plan.variant}
                    className={`w-full ${plan.highlighted ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground' : ''}`}
                    aria-label={`Select ${plan.name} Plan`}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include free implementation support
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
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
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your HR Processes?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join 5+ companies already using VORN HR to manage their workforce efficiently.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.vornhr.com/contact" target="_blank" rel="noopener noreferrer">
                <Button size="xl" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" aria-label="Book a Vorn HR Demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.vornhr.com/pricing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" aria-label="Start Vorn HR Free Trial">
                  Start Free Trial
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
