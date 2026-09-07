import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Brain, Smartphone, Heart, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import HeroBg from '@/assets/hero_bg.jpg';

const slowFadeIn = {
  initial: { opacity: 0, y: 50, filter: 'blur(20px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: "100px" },
  transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "100px" }
};

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions built from scratch to solve your unique business challenges and drive operational excellence.',
    href: '/custom-software-development',
    image: '/images/services/service_custom_software_1788517183588.jpg',
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    icon: Users,
    title: 'HRMS Software Development',
    description: 'End-to-end HR management systems with payroll, attendance, performance tracking, and smart analytics built-in.',
    href: '/hrms-software-development',
    image: '/images/services/service_hrms_1788517201808.jpg',
    color: 'from-teal-500/20 to-cyan-500/20'
  },
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Leverage the power of artificial intelligence and machine learning to automate processes and unlock deeper insights.',
    href: '/ai-development-company',
    image: '/images/services/service_ai_1788517217693.jpg',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android, built for performance and seamless user experience.',
    href: '/mobile-app-development',
    image: '/images/services/service_mobile_1788517254178.jpg',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    icon: Heart,
    title: 'Healthcare Software Development',
    description: 'HIPAA-compliant, patient-centric healthcare solutions that streamline clinical workflows and improve outcomes.',
    href: '/healthcare-software-development',
    image: '/images/services/service_healthcare_1788517271459.jpg',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Globe,
    title: 'Web Development – Hyderabad',
    description: 'Full-stack web development with modern frameworks, stellar UI/UX design, and robust backend architecture.',
    href: '/web-development-company-hyderabad',
    image: '/images/services/service_web_1788517237399.jpg',
    color: 'from-sky-500/20 to-blue-500/20'
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16 bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              src={HeroBg}
              alt="Services Hero Background"
              className="absolute inset-0 w-full h-full object-cover sm:object-center opacity-50"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-4xl h-[160%] bg-black/40 blur-[120px] rounded-[100%] pointer-events-none hidden sm:block" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold mb-8 border border-white/20"
          >
            <Code className="h-4 w-4 text-[#38BDF8]" />
            What We Do
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            From enterprise HR to AI-driven healthcare, we build transformative software that powers your growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.href} variants={slowFadeIn}>
                <Link
                  to={service.href}
                  className="group relative bg-white/50 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full block"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden rounded-t-[2.5rem]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-white/80 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 font-bold leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-primary font-black text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );

  /* =====================================================
     PREVIOUS SERVICES PAGE UI — COMMENTED OUT
  ======================================================

  (Original ~25KB Services page JSX content removed
  and replaced with the clean 6-card grid above.
  If you need to restore it, check git history.)

  ===================================================== */
}
