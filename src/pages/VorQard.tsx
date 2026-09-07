import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Calendar, Users, Shield, BarChart3, QrCode, Smartphone, Clock, CheckCircle, Star, Activity, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';
import VorQardClinic from '@/assets/vorqard-clinic.png';
import HeroHealthcare from '@/assets/hero_healthcare.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VorQardWaitTime from '@/assets/vorqard-wait-time.png';
import VorQardPaperless from '@/assets/vorqard-paperless.png';
import VorQardTracking from '@/assets/vorqard-tracking.png';
import VorQardPatient from '@/assets/vorqard-patient.png';

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
    stats: '40% faster patient flow',
    image: VorQardWaitTime
  },
  {
    title: 'Zero Paperwork',
    description: 'Digital records, e-prescriptions, and automated documentation eliminate paper-based processes entirely.',
    stats: '100% digital workflow',
    image: VorQardPaperless
  },
  {
    title: 'Real-Time Patient Tracking',
    description: 'Monitor patient journey from check-in to checkout with live status updates and notifications.',
    stats: 'Complete visibility',
    image: VorQardTracking
  },
  {
    title: 'Enhanced Patient Experience',
    description: 'Patients can book appointments, access records, and receive reminders through our mobile-friendly platform.',
    stats: 'Patient satisfaction up 60%',
    image: VorQardPatient
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
    answer: 'VorQard utilizes a unique QR-based system that eliminates physical cards and files. Patients simply scan their QR code to access records, check-in, or make payments, creating a seamless experience.'
  },
  {
    question: 'Is patient data secure?',
    answer: 'Absolutely. We employ bank-grade encryption, role-based access controls, and regular security audits to ensure complete compliance with healthcare data regulations.'
  },
  {
    question: 'How difficult is it to migrate from our current system?',
    answer: 'Our dedicated onboarding team handles the entire migration process. We can seamlessly import your existing patient records and get your staff trained within days.'
  },
  {
    question: 'Does it support multi-location clinics?',
    answer: 'Yes, VorQard is built to scale. You can manage multiple branches, doctors, and departments from a centralized admin dashboard.'
  }
];

export default function VorQard() {
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
              src={HeroHealthcare} 
              alt="VorQard Hero Background" 
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
            <Heart className="h-4 w-4 text-[#38BDF8]" />
            Smart Healthcare
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            VorQard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl text-slate-200 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Revolutionize patient care with our QR-based healthcare management system. 
            Reduce wait times, eliminate paperwork, and enhance clinical efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a href="https://vorqard.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-bold bg-[#38BDF8] text-white hover:bg-[#38BDF8]/90 rounded-full w-full transition-transform hover:scale-105 shadow-[0_0_40px_rgba(56,189,248,0.3)]">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </a>
            <a href="https://vorqard.com/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-bold border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-full w-full backdrop-blur-sm transition-colors">
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container-custom">
          <motion.div 
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-60"
          >
            {/* Using text placeholders for trust badges since we don't have logos */}
            <div className="text-xl font-bold font-serif">Apollo Clinics</div>
            <div className="text-xl font-bold font-sans">Care Hospitals</div>
            <div className="text-xl font-bold font-mono">Max Healthcare</div>
            <div className="text-xl font-bold font-sans">Fortis</div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Everything a Modern Clinic Needs</h2>
            <p className="text-lg text-slate-600 font-medium">
              A comprehensive suite of tools designed to streamline your operations and improve patient outcomes.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={slowFadeIn}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,112,144,0.1)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 group flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Showcase */}
      <section className="section-padding bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Transforming Healthcare Delivery</h2>
            <p className="text-lg text-slate-600 font-medium">See how VorQard directly impacts your daily operations and patient satisfaction.</p>
          </motion.div>

          <div className="space-y-32">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-xl opacity-50" />
                  <div className="relative rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-2xl aspect-[4/3] bg-white">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                    <TrendingUp className="h-4 w-4" />
                    {benefit.stats}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="container-custom relative z-10">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Built for Every Scale</h2>
            <p className="text-lg text-slate-600 font-medium">Whether you run a single clinic or a multi-specialty hospital, VorQard adapts to your needs.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={slowFadeIn}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{useCase.title}</h3>
                <p className="text-slate-600 font-medium mb-8 flex-grow">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50 border-y border-slate-100">
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
                  className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 font-medium pb-6 leading-relaxed">
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
                Ready to Modernize Your Practice?
              </h2>
              <p className="text-sm sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto font-bold leading-relaxed">
                Join healthcare providers across the country using VorQard to deliver better patient experiences.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-sm mx-auto sm:max-w-none">
                <a href="https://vorqard.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-white text-primary hover:bg-white/90 rounded-full w-full transition-transform hover:scale-105 shadow-lg">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="https://vorqard.com/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold border-2 border-white/30 text-white hover:bg-white/10 rounded-full w-full backdrop-blur-sm transition-transform hover:scale-105">
                    Schedule Demo
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
