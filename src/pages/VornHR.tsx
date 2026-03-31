import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, Clock, Shield, BarChart3, Smartphone, Database,
  Zap, CheckCircle, Star, DollarSign, CheckSquare, Building2,
  Fingerprint, MapPin, Calendar, FileText, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import VornHRVideo from '@/assets/vornhr_video.mp4';
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
    name: 'Starter Plan',
    price: '₹499',
    period: '/month',
    subtitle: 'Up to 10 employees',
    features: [
      'Employee Management',
      'Attendance Tracking',
      'Leave Management',
      'Employee Directory',
      'Basic Reports',
      'Email Support',
      'No Payroll / Payslip',
      '100 AI Credits'
    ],
    cta: 'Start 7-Day Trial',
    variant: 'outline' as const
  },
  {
    name: 'Growth Plan',
    price: '₹1,499',
    period: '/month',
    subtitle: 'Up to 25 employees',
    highlighted: true,
    badge: 'BEST VALUE',
    features: [
      'Everything in Starter',
      'Payroll Management',
      'Payslip Generation',
      'Performance Tracking',
      'Employee Self-Service Portal',
      'Email Notifications',
      '150 AI Credits'
    ],
    cta: 'Start 7-Day Trial',
    variant: 'hero' as const
  },
  {
    name: 'Business Plan',
    price: '₹3,499',
    period: '/month',
    subtitle: 'Up to 50 employees',
    features: [
      'Everything in Growth',
      'Advanced HR Analytics',
      'Role-Based Access Control',
      'HR Insights Dashboard',
      'Priority Support',
      '500 AI Credits'
    ],
    cta: 'Start 7-Day Trial',
    variant: 'outline' as const
  },
  {
    name: 'Enterprise',
    isEnterprise: true,
    subtitle: 'Tailored for teams with 50+ employees.',
    description: 'Custom workflows, dedicated account manager, and API access.',
    cta: 'Contact Sales',
    variant: 'hero' as const
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
                <div className="relative bg-card border border-border rounded-3xl p-2 shadow-2xl overflow-hidden aspect-video">
                  <video
                    src={VornHRVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/5 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Zap className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -right-4 top-1/4 transform rotate-6 animate-float">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 shadow-sm border-2 ${plan.highlighted
                  ? 'bg-[#005c7a] text-white border-[#38BDF8] shadow-xl z-10'
                  : 'bg-white text-[#0F172A] border-slate-100/80 hover:border-[#38BDF8]/30'
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#38BDF8] text-white text-[10px] font-black px-4 py-1.5 rounded-lg whitespace-nowrap tracking-widest uppercase">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {plan.isEnterprise ? (
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-8">
                      <Zap className="h-8 w-8 text-[#38BDF8] fill-[#38BDF8]/10" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-8">
                      {plan.name}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[200px] flex-grow font-medium">
                      {plan.subtitle}<br />
                      {plan.description}
                    </p>

                    <a href="https://www.vornhr.com/contact" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                      <Button
                        className="w-full h-14 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold group transition-all duration-300"
                        aria-label="Contact Sales"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className={`text-xl font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-[#0F172A]'}`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className={`text-sm font-medium ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>
                          {plan.period}
                        </span>
                      </div>
                      {plan.subtitle && (
                        <p className={`text-sm font-medium ${plan.highlighted ? 'text-blue-100/70' : 'text-slate-500'}`}>
                          {plan.subtitle}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features?.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <div className={`mt-0.5 rounded-full border p-0.5 flex-shrink-0 ${plan.highlighted ? 'border-white/20' : 'border-slate-200'}`}>
                            <CheckCircle className={`h-3 w-3 ${plan.highlighted ? 'text-white' : 'text-[#006080]'}`} />
                          </div>
                          <span className={plan.highlighted ? 'text-white/90' : 'text-slate-600 font-medium'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a href="https://www.vornhr.com/contact" target="_blank" rel="noopener noreferrer" className="mt-auto">
                      <Button
                        variant="outline"
                        className={`w-full h-12 rounded-xl text-sm font-bold transition-all duration-300 border-2 group ${plan.highlighted
                          ? 'bg-[#38BDF8] border-[#38BDF8] text-white hover:bg-[#38BDF8]/90 hover:border-[#38BDF8]/90'
                          : 'bg-transparent border-[#38BDF8] text-[#38BDF8] hover:bg-transparent hover:border-[#38BDF8] hover:shadow-[0_0_15px_rgba(56,189,248,0.1)]'
                          }`}
                        aria-label={plan.cta}
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </>
                )}
              </motion.div>
            ))}
          </div>


          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-slate-500">
              All plans include free implementation support
            </p>
          </div>
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
