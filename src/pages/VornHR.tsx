import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, Clock, Shield, BarChart3, Smartphone, Database,
  Zap, CheckCircle, Star, DollarSign, CheckSquare, Building2,
  Fingerprint, MapPin, Calendar, FileText, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
// import VornHRVideo from '@/assets/vornhr_video.mp4'; // Video removed
import HeroHRMS from '@/assets/hero_hrms.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const slowFadeIn = {
  initial: { opacity: 0, y: 50, filter: 'blur(20px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: "100px" },
  transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.15 }
  },
  viewport: { once: true, margin: "100px" }
};

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
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-20 bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              src={HeroHRMS} 
              alt="VORN HR Hero Background" 
              className="absolute inset-0 w-full h-full object-cover max-sm:object-contain max-sm:object-top sm:object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 max-sm:bg-gradient-to-b max-sm:from-black/80 max-sm:via-black/40 max-sm:to-black/90 sm:bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent sm:hidden" />
        </div>

        <div className="container-custom relative z-10 w-full mt-10 sm:mt-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold mb-8 border border-white/20"
          >
            <Zap className="h-4 w-4 text-[#38BDF8]" />
            Smart HR Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            VORN HR
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl text-slate-200 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Empower your workforce with an intelligent, data-driven HR platform. From payroll to performance, we automate it all.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a href="https://www.vornhr.com/pricing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-bold bg-[#38BDF8] text-white hover:bg-[#38BDF8]/90 rounded-full w-full transition-transform hover:scale-105 shadow-[0_0_40px_rgba(56,189,248,0.3)]">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </a>
            <a href="https://www.vornhr.com/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-bold border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-full w-full backdrop-blur-sm transition-colors">
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Features Strip */}
      <section className="py-16 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {quickFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={slowFadeIn}
                className="text-center group bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-slate-500 font-bold">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Solution Section (Stunning Glassy Design) */}
      <section className="section-padding relative overflow-hidden bg-[#f8fafc]">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-primary text-sm font-bold mb-6 border border-white shadow-sm">
              <Star className="h-4 w-4" />
              Advanced Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-slate-600 font-bold">
              From core HR management to advanced analytics, our platform provides a complete suite
              of tools to streamline your entire workforce operations.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Core HR - Glassy Card */}
            <motion.div
              variants={slowFadeIn}
              className="group relative bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,112,144,0.1)] transition-all duration-500 hover:-translate-y-2 border border-white/80 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Core HR</h3>
                <ul className="space-y-4">
                  {coreHRFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                      <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Time & Attendance - Glassy Card */}
            <motion.div
              variants={slowFadeIn}
              className="group relative bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,112,144,0.1)] transition-all duration-500 hover:-translate-y-2 border border-white/80 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Fingerprint className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Time & Attendance</h3>
                <ul className="space-y-4">
                  {timeAttendanceFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                      <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Payroll - Glassy Card */}
            <motion.div
              variants={slowFadeIn}
              className="group relative bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,112,144,0.1)] transition-all duration-500 hover:-translate-y-2 border border-white/80 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Payroll</h3>
                <ul className="space-y-4">
                  {payrollFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                      <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Video removed as per request */}
          
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="section-padding bg-slate-50 border-y border-slate-100/50">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Industry-Leading Performance
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={slowFadeIn}
                className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 text-center border border-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,112,144,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl font-black text-primary mb-4">{stat.value}</div>
                <div className="text-xl font-bold text-slate-900 mb-2">{stat.label}</div>
                <p className="text-slate-500 font-bold">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section (Commented Out as requested) */}
      {/*
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600 font-medium">Choose the plan that fits your needs</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={slowFadeIn}
                className={`relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 shadow-sm border-2 ${plan.highlighted
                  ? 'bg-[#005c7a] text-white border-[#38BDF8] shadow-xl z-10'
                  : 'bg-white text-slate-900 border-slate-100 hover:border-[#38BDF8]/30 hover:shadow-md'
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#38BDF8] text-white text-[10px] font-black px-4 py-1.5 rounded-lg whitespace-nowrap tracking-widest uppercase shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {plan.isEnterprise ? (
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-8">
                      <Zap className="h-8 w-8 text-[#38BDF8] fill-[#38BDF8]/10" />
                    </div>
                    
                    <h3 className="text-2xl font-black text-[#0F172A] mb-8">
                      {plan.name}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[200px] flex-grow font-bold">
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
                      <h3 className={`text-xl font-black mb-4 ${plan.highlighted ? 'text-white' : 'text-[#0F172A]'}`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-black">{plan.price}</span>
                        <span className={`text-sm font-bold ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>
                          {plan.period}
                        </span>
                      </div>
                      {plan.subtitle && (
                        <p className={`text-sm font-bold ${plan.highlighted ? 'text-blue-100/70' : 'text-slate-500'}`}>
                          {plan.subtitle}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features?.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <div className={`mt-0.5 rounded-full border p-0.5 flex-shrink-0 ${plan.highlighted ? 'border-white/20' : 'border-slate-200'}`}>
                            <CheckCircle className={`h-3 w-3 ${plan.highlighted ? 'text-white' : 'text-primary'}`} />
                          </div>
                          <span className={plan.highlighted ? 'text-white/90 font-bold' : 'text-slate-600 font-bold'}>
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
          </motion.div>
        </div>
      </section>
      */}


      {/* FAQ Section */}
      <section className="section-padding bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div 
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/60 backdrop-blur-md border border-white rounded-[1.5rem] px-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-black text-slate-900 hover:text-primary py-6 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 font-bold pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background px-4 sm:px-0">
        <div className="container-custom">
          <motion.div 
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="bg-gradient-to-br from-primary via-[#007090] to-accent rounded-3xl sm:rounded-[3rem] px-6 py-10 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Transform Your HR Processes?
              </h2>
              <p className="text-sm sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto font-bold leading-relaxed">
                Join 5+ companies already using VORN HR to manage their workforce efficiently.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-sm mx-auto sm:max-w-none">
                <a href="https://www.vornhr.com/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-white text-primary hover:bg-white/90 rounded-full w-full transition-transform hover:scale-105 shadow-lg" aria-label="Book a Vorn HR Demo">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.vornhr.com/pricing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold border-2 border-white/30 text-white hover:bg-white/10 rounded-full w-full backdrop-blur-sm transition-transform hover:scale-105" aria-label="Start Vorn HR Free Trial">
                    Start Free Trial
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
