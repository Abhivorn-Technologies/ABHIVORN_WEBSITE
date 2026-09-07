import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number, suffix: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView) {
      const end = value;
      const duration = 2500; 
      const fps = 60;
      const totalFrames = (duration / 1000) * fps;
      let frame = 0;

      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = end * easeOutQuart(progress);

        if (frame >= totalFrames) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, 1000 / fps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  const formattedCount = count.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return <span ref={ref}>{formattedCount}{suffix}</span>;
}
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building, TrendingUp, Heart, Code, Zap, BarChart3, CheckCircle, ChevronDown, Search, PenTool, ShieldCheck, Rocket, Headset } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaReact, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ReviewMarquee from '@/components/common/ReviewMarquee';
import HeroCustom from '@/assets/hero_custom.jpg';
import HeroHRMS from '@/assets/hero_hrms.jpg';
import HeroAI from '@/assets/hero_ai.jpg';
import HeroHealthcare from '@/assets/hero_healthcare.jpg';

const heroTitles = [
  "Custom Software",
  "HRMS Platforms",
  "AI Development",
  "Healthcare Solutions"
];

const heroBackgrounds = [
  HeroCustom,
  HeroHRMS,
  HeroAI,
  HeroHealthcare
];

// Elegant, professional slow blur fade in
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
    href: '/custom-software-development',
    cta: 'Start Your Project',
    color: 'accent'
  }
];

const metrics = [
  { value: 10, suffix: '+', decimals: 0, label: 'Companies Trust Us' },
  { value: 5000, suffix: '+', decimals: 0, label: 'Employees Managed' },
  { value: 99.8, suffix: '%', decimals: 1, label: 'System Uptime' },
  { value: 95, suffix: '%', decimals: 0, label: 'Customer Satisfaction' }
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

const whyChooseUs = [
  { title: '1+ Year Experience', description: 'Deep expertise in building robust custom software solutions.' },
  { title: '15+ Companies Served', description: 'Proven track record of delivering value to diverse clients.' },
  { title: '5,000+ Users', description: 'Our scalable products are relied upon by thousands daily.' },
  { title: '99.8% Uptime', description: 'Enterprise-grade reliability and seamless infrastructure.' }
];

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and more. Our solutions are adaptable to any business that needs reliable, scalable software.'
  },
  {
    question: 'Do you offer free trials?',
    answer: 'Yes! VORN HR offers a freemium plan for up to 20 employees. For larger organizations, we offer a 14-day free trial of our Professional plan.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'For VORN HR implementation, we typically complete deployment within 2-3 weeks. Custom development projects range from 6-12 weeks depending on scope and complexity.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer dedicated support for all our products. Our technical team is available to ensure your systems run flawlessly.'
  }
];

export default function Index() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % heroTitles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-20 bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img 
              key={titleIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              src={heroBackgrounds[titleIndex]} 
              alt="Hero Background" 
              className="absolute inset-0 w-full h-full object-cover max-sm:object-contain max-sm:object-top sm:object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 max-sm:bg-gradient-to-b max-sm:from-black/80 max-sm:via-black/40 max-sm:to-black/90 sm:bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent sm:hidden" />
        </div>

        <div className="container-custom relative z-10 w-full mt-10 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center relative"
          >
            {/* A massive, ultra-soft dark glow perfectly positioned behind the text to guarantee perfect legibility without dimming the whole background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-4xl h-[160%] bg-black/60 blur-[100px] -z-10 rounded-[100%] pointer-events-none hidden sm:block" />

            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 flex-wrap">
              <span className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-sm font-bold backdrop-blur-xl shadow-lg uppercase tracking-wider">
                99.8% Uptime
              </span>
              <span className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-sm font-bold backdrop-blur-xl shadow-lg uppercase tracking-wider">
                5,000+ Users
              </span>
              <span className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-sm font-bold backdrop-blur-xl shadow-lg uppercase tracking-wider">
                MSME Registered
              </span>
            </div>

            <h1 className="text-[8vw] sm:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-[1.1] drop-shadow-2xl">
              Enterprise Grade <br />
              <span className="text-white inline-block relative h-[1.2em] w-full max-w-[1000px] overflow-hidden align-bottom mt-1 sm:mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ y: 60, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -60, opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex justify-center items-center text-accent drop-shadow-2xl whitespace-nowrap"
                  >
                    {heroTitles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl max-w-2xl mx-auto text-white/90 font-medium leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
              We build scalable web apps, HRMS platforms, AI tools, and enterprise solutions for startups and companies across India.
            </p>
            
            <div className="flex items-center justify-center px-6 sm:px-0">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="h-12 px-8 sm:h-14 sm:px-10 text-sm sm:text-base font-bold rounded-full bg-accent hover:bg-accent/90 text-white shadow-[0_0_30px_-10px_rgba(6,182,212,0.8)] transition-all duration-300 group w-full sm:w-auto">
                  Get Free Consultation <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section (Ultra Minimalist) */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container-custom">
          <motion.div 
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-border/40"
          >
            {metrics.map((metric, index) => (
              <div key={metric.label} className={`text-center ${index === 0 ? '' : 'pl-6 md:pl-10'}`}>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tighter">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="services" className="relative section-padding bg-background scroll-mt-20">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Our Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Enterprise-grade platforms engineered for flawless performance and infinite scalability.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.title}
                variants={slowFadeIn}
                className="group bg-white rounded-2xl border border-border/60 p-10 hover:border-border hover:shadow-lg transition-all duration-500 flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <product.icon className="h-5 w-5" />
                  </div>
                  {product.badge && (
                    <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {product.subtitle}
                </p>

                <ul className="space-y-4 mb-10">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={product.href} className="mt-auto">
                  <Button variant="outline" className="w-full h-12 rounded-lg border-border/60 hover:bg-foreground hover:text-white transition-colors">
                    {product.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative section-padding bg-muted/20 border-y border-border/40">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Why Abhivorn?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              We combine deep technical expertise with a relentless focus on delivering measurable business value.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={slowFadeIn}
                className="bg-white rounded-2xl border border-border/50 p-6 sm:p-8 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="text-sm font-mono font-bold text-primary/70 mb-4 sm:mb-6">0{index + 1}</div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed font-medium">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process (Card-less Horizontal Flow) */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Our Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              A transparent, agile, and fiercely results-driven approach.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12"
            >
              {[
                { step: '1', icon: Search, title: 'Discovery', desc: 'Comprehensive requirements analysis and goal setting.' },
                { step: '2', icon: PenTool, title: 'Design', desc: 'Robust architecture and high-fidelity prototyping.' },
                { step: '3', icon: Code, title: 'Development', desc: 'Agile coding, implementation, and integration.' },
                { step: '4', icon: ShieldCheck, title: 'Testing', desc: 'Rigorous automated and manual quality assurance.' },
                { step: '5', icon: Rocket, title: 'Deployment', desc: 'Zero-downtime launch into enterprise infrastructure.' },
                { step: '6', icon: Headset, title: 'Support', desc: 'Ongoing maintenance, scaling, and technical support.' }
              ].map((p, index) => (
                <motion.div
                  key={p.step}
                  variants={slowFadeIn}
                  className="relative flex flex-col items-center text-center group"
                >
                  {(index % 3 !== 2) && (
                    <div className="hidden md:block absolute top-7 left-1/2 w-full border-t border-dashed border-border/80 -z-10" />
                  )}
                  
                  <div className="w-14 h-14 rounded-full border border-border/80 bg-background flex items-center justify-center mb-6 group-hover:border-foreground transition-colors duration-500 z-10 relative">
                    <p.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                  </div>
                  
                  <span className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-3">
                    STEP {p.step}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed max-w-[250px] font-medium">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-24 bg-white border-y border-border/40 overflow-hidden">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-base text-muted-foreground font-medium">
              Enterprise-grade tech stack for reliability and performance
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {techStack.map((tech) => (
              <motion.div 
                variants={slowFadeIn}
                key={tech.name} 
                className="flex items-center gap-3 px-5 py-2.5 bg-white border border-border/60 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)] hover:border-border transition-all duration-300"
              >
                <div className="text-xl">{tech.icon}</div>
                <span className="text-sm font-semibold text-foreground/80">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Our Clients Say - Auto-scrolling Marquee */}
      <ReviewMarquee />

      {/* FAQ Section */}
      <section className="relative section-padding bg-background">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[2rem] border border-border/40 p-5 sm:p-8 md:p-12 shadow-sm"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">Frequently Asked Questions</h2>
            <div className="divide-y divide-border/40">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left py-4 sm:py-6 flex justify-between items-center focus:outline-none group"
                  >
                    <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180 text-primary' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 sm:pb-6 text-xs sm:text-base text-foreground/70 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background px-4 sm:px-0">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary via-[#007090] to-accent rounded-3xl sm:rounded-[3rem] px-6 py-10 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Ready to scale your <br className="hidden sm:block" /> business?
              </h2>
              <p className="text-sm sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Join industry leaders who rely on our enterprise solutions to streamline operations, automate workflows, and dominate their markets.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-sm mx-auto sm:max-w-none">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-white text-primary hover:bg-white/90 rounded-full w-full transition-transform hover:scale-105 shadow-lg">
                    Start a Project
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold border-white/30 text-white hover:bg-white/10 rounded-full w-full backdrop-blur-sm transition-transform hover:scale-105">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
