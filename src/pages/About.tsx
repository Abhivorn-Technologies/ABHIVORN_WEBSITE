import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, Shield, Award, Calendar, ArrowRight, Zap, Building2, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AboutOffice from '@/assets/about-office.png';
import HeroBg from '@/assets/hero_bg.jpg';

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

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest quality in every line of code and every user interaction.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to solve complex problems.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical business practices.'
  },
  {
    icon: Award,
    title: 'Ownership',
    description: 'We take full responsibility for our work and deliver on our commitments.'
  }
];

const milestones = [
  { date: 'Oct 2025', title: 'Company Founded', description: 'Abhivorn Technologies Pvt Ltd established in Hyderabad' },
  { date: 'Nov 2025', title: 'First HRMS Deployment', description: 'Successfully deployed VORN HR for first client' },
  { date: 'Dec 2025', title: '5 Companies Onboarded', description: 'Rapid growth with multiple enterprise clients' },
  { date: 'Jan 2026', title: '5,000+ Users Milestone', description: 'Platform scaling with high user adoption' }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-20 bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              src={AboutOffice} 
              alt="Abhivorn Office Background" 
              className="absolute inset-0 w-full h-full object-cover max-sm:object-contain max-sm:object-top sm:object-center opacity-60"
            />
          </AnimatePresence>
          <div className="absolute inset-0 max-sm:bg-gradient-to-b max-sm:from-black/80 max-sm:via-black/50 max-sm:to-black/90 sm:bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent sm:hidden" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-4xl h-[160%] bg-black/50 blur-[100px] -z-10 rounded-[100%] pointer-events-none hidden sm:block" />
        </div>

        <div className="container-custom relative z-10 w-full mt-10 sm:mt-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold mb-8 border border-white/20"
          >
            <Building2 className="h-4 w-4 text-[#38BDF8]" />
            About Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            Building the Future of <br className="hidden sm:block" />
            <span className="text-accent">Enterprise Software</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Founded in 2025, headquartered in Hyderabad. We're an MSME-registered software company
            specializing in intelligent HR and healthcare solutions.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden z-20 -mt-4 sm:-mt-10 rounded-t-[2.5rem] sm:rounded-t-[4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10 mt-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slowFadeIn}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                <Target className="h-4 w-4" />
                Our Vision
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Abhivorn Technologies was founded with a clear vision: to make enterprise-grade
                  software accessible, intuitive, and extremely powerful for businesses of all sizes across India.
                </p>
                <p>
                  Starting with our flagship product <span className="font-bold text-slate-900">VORN HR</span>, we've helped companies streamline
                  their HR operations, significantly reduce administrative overhead, and focus on what matters
                  most—their people.
                </p>
                <p>
                  Today, we're expanding into healthcare with <span className="font-bold text-slate-900">VorQard</span>, bringing the same
                  commitment to quality, glassmorphic design, and innovation to the medical industry.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl hover:shadow-md hover:border-primary/30 transition-all cursor-default">
                  <span className="text-base text-slate-900 font-bold">MSME Registered</span>
                </div>
                <div className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl hover:shadow-md hover:accent/30 transition-all cursor-default">
                  <span className="text-base text-slate-900 font-bold">10+ Team Members</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slowFadeIn}
              initial="initial"
              whileInView="whileInView"
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative group border-[8px] border-white">
                <img
                  src={HeroBg}
                  alt="Abhivorn Technologies Vision"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-3xl font-black mb-2">Abhivorn Technologies</div>
                    <div className="text-lg font-bold text-white/80">Innovation at its core</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section (Stunning Glassy Design) */}
      <section className="section-padding relative overflow-hidden bg-[#f8fafc]">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container-custom relative z-10">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-primary text-sm font-bold mb-6 border border-white shadow-sm">
              <Star className="h-4 w-4" />
              Our Principles
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-lg text-slate-600 font-bold">
              The principles that guide everything we do and every product we build.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={slowFadeIn}
                className="group relative bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,112,144,0.1)] transition-all duration-500 hover:-translate-y-2 border border-white/80 overflow-hidden flex flex-col text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-white shadow-sm flex items-center justify-center mx-auto mb-6 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-slate-600 font-bold leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="container-custom relative z-10">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Journey</h2>
            <p className="text-lg text-slate-600 font-bold">Key milestones in our rapid growth story.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-accent/20 to-transparent rounded-full" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.date}
                    variants={slowFadeIn}
                    initial="initial"
                    whileInView="whileInView"
                    className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
                  >
                    {/* Center Dot */}
                    <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-lg z-10" />
                    
                    {/* Content Card */}
                    <div className={`w-full sm:w-1/2 pl-20 sm:pl-0 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12 text-left sm:text-right'}`}>
                      <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 text-primary text-sm font-black mb-4 ${index % 2 === 0 ? '' : 'sm:ml-auto'}`}>
                          <Calendar className="h-4 w-4" />
                          {milestone.date}
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">{milestone.title}</h3>
                        <p className="text-slate-600 font-bold">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
                Want to Join Our Team?
              </h2>
              <p className="text-sm sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto font-bold leading-relaxed">
                We're always looking for talented individuals to help us build the future of enterprise software.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-sm mx-auto sm:max-w-none">
                <Link to="/careers" className="w-full sm:w-auto">
                  <Button size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-white text-primary hover:bg-white/90 rounded-full w-full transition-transform hover:scale-105 shadow-lg">
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
