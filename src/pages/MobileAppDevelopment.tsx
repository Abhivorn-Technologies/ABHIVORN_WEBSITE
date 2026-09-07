import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Zap, MonitorSmartphone, Shield, LayoutTemplate, Layers, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from '@/components/layout/Layout';

const benefits = [
  { icon: MonitorSmartphone, title: 'Cross-Platform Excellence', description: 'Reach both iOS and Android users simultaneously with a unified, robust codebase.' },
  { icon: Zap, title: 'Native Performance', description: 'Fluid animations, fast load times, and near-native performance for smooth user experiences.' },
  { icon: LayoutTemplate, title: 'Intuitive UI/UX', description: 'Stunning, human-centric interfaces designed specifically for mobile touch paradigms.' },
  { icon: Shield, title: 'App Security', description: 'Robust data encryption and secure API integrations to protect user privacy.' },
  { icon: Layers, title: 'Scalable Architecture', description: 'Cloud-ready architectures designed to support millions of downloads and active users.' },
  { icon: Smartphone, title: 'Latest Technologies', description: 'Built with React Native, Flutter, Swift, and Kotlin for future-proof app ecosystems.' }
];

const deliverables = [
  {
    id: "ios",
    title: "iOS App Development",
    description: "Premium, high-performance native applications tailored for the Apple ecosystem, ensuring strict compliance with App Store guidelines and leveraging the latest iOS capabilities.",
    features: ["Swift & Objective-C", "Apple Pay Integration", "ARKit Implementations", "Face/Touch ID"]
  },
  {
    id: "android",
    title: "Android App Development",
    description: "Custom native Android applications designed to perform flawlessly across the vast and fragmented ecosystem of Android devices, from smartphones to tablets.",
    features: ["Kotlin & Java", "Material Design", "Google Play Services", "Hardware Integration"]
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Apps",
    description: "Cost-effective, rapid development using modern cross-platform frameworks, delivering a near-native experience on both iOS and Android from a single codebase.",
    features: ["React Native", "Flutter", "Unified Codebase", "Faster Time-to-Market"]
  },
  {
    id: "app-maintenance",
    title: "App Maintenance & Support",
    description: "Ensure your mobile application remains functional, secure, and up-to-date with the latest OS versions. We provide proactive monitoring, bug fixes, and feature enhancements.",
    features: ["Performance Monitoring", "OS Updates", "Bug Fixing", "Feature Enhancements"]
  }
];

const process = [
  { step: '01', title: 'Strategy & Wireframing', description: 'We define the core app features, target audience, and monetization strategy before mapping out user journeys via wireframes.' },
  { step: '02', title: 'UI Design & Development', description: 'Our designers craft beautiful interfaces while our engineers build the app architecture and develop core functionalities.' },
  { step: '03', title: 'Testing & Store Launch', description: 'We conduct rigorous QA testing on real devices before handling the complete App Store and Google Play submission process.' }
];

export default function MobileAppDevelopment() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-24 bg-background">
        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-[1.1] tracking-tight">
                Mobile App <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Development</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-10 leading-relaxed max-w-lg">
                Transform your visionary ideas into powerful, engaging mobile experiences. We build scalable, high-performance apps for iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                    Start Your App Project
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-border group">
                <img 
                  src="/images/services/service_mobile_1788517254178.jpg" 
                  alt="Mobile App Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-24 bg-primary/5 text-slate-900 relative overflow-hidden">
        {/* Subtle glowing orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-slate-900 uppercase">What We Deliver</h2>
            <p className="text-lg text-slate-600 font-medium">
              Industry-leading mobile applications designed to engage users and accelerate your mobile strategy.
            </p>
          </div>

                    
          <Tabs defaultValue={deliverables[0].id} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 min-h-[400px]">
            <TabsList className="flex lg:flex-col justify-start h-auto bg-transparent gap-3 w-full lg:w-[35%] overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide rounded-none border-none">
              {deliverables.map((item) => (
                <TabsTrigger 
                  key={item.id} 
                  value={item.id}
                  className="w-full text-left justify-start px-6 py-5 rounded-2xl bg-white text-slate-500 font-bold text-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 border border-slate-200 data-[state=active]:border-primary shadow-sm data-[state=active]:shadow-md whitespace-nowrap lg:whitespace-normal"
                >
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="w-full lg:w-[65%]">
              {deliverables.map((item) => (
                <TabsContent 
                  key={item.id} 
                  value={item.id}
                  className="bg-white text-slate-900 rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 m-0 animate-in fade-in slide-in-from-right-4 duration-500 focus-visible:outline-none"
                >
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                    {item.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                        <span className="font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">Key Benefits</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,112,144,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">How We Deliver <br/> Exceptional Results</h2>
            <p className="text-lg sm:text-xl text-slate-600 font-medium">Take your next step forward with a robust mobile strategy.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {process.map((p, index) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-9xl font-black text-slate-50/80 pointer-events-none select-none z-0">
                  {p.step}
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-black text-primary mb-8">{p.step}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background px-4 sm:px-0">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary via-[#007090] to-accent rounded-3xl sm:rounded-[3rem] px-6 py-10 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Ready to build your mobile app?
              </h2>
              <p className="text-sm sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                Let's turn your app idea into reality. Get a free consultation today.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-sm mx-auto sm:max-w-none">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-white text-primary hover:bg-white/90 rounded-full w-full transition-transform hover:scale-105 shadow-lg">
                    Start Your App Project
                    <ArrowRight className="ml-2 h-5 w-5" />
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