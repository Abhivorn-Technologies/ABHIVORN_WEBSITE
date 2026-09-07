import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Shield, Stethoscope, HeartPulse, Clock, Database, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from '@/components/layout/Layout';

const benefits = [
  { icon: Shield, title: 'HIPAA Compliant', description: 'Enterprise-grade security and strict compliance with global healthcare data regulations.' },
  { icon: Activity, title: 'Real-Time Monitoring', description: 'Live tracking of patient vitals, bed availability, and hospital resource utilization.' },
  { icon: Clock, title: 'Reduced Wait Times', description: 'Smart queue management and digital check-ins drastically reduce patient waiting times.' },
  { icon: Database, title: 'EHR Integration', description: 'Seamless integration with existing Electronic Health Records (EHR) and laboratory systems.' },
  { icon: HeartPulse, title: 'Better Patient Care', description: 'Empower doctors with AI-driven insights and instant access to patient medical histories.' },
  { icon: Stethoscope, title: 'Telemedicine Ready', description: 'Built-in video consultation and remote monitoring capabilities for modern clinics.' }
];

const deliverables = [
  {
    id: "hms",
    title: "Hospital Management Systems",
    description: "End-to-end HMS platforms designed to digitize entire hospital operations, from patient registration and bed management to billing and insurance processing.",
    features: ["Patient Registration", "Bed Management", "Billing Automation", "Insurance Claims"]
  },
  {
    id: "clinic",
    title: "Clinic Management Software",
    description: "Lightweight, cloud-based practice management solutions for independent clinics and group practices, focusing on appointment scheduling and electronic prescriptions.",
    features: ["Online Appointments", "E-Prescriptions", "Patient Portal", "SMS Reminders"]
  },
  {
    id: "telehealth",
    title: "Telehealth Platforms",
    description: "Secure, high-definition video consultation platforms integrated with IoT devices for remote patient monitoring and virtual care delivery.",
    features: ["Video Consultations", "IoT Integration", "Remote Monitoring", "Secure Chat"]
  },
  {
    id: "electronic-health-records",
    title: "Electronic Health Records",
    description: "Secure, compliant, and intuitive EHR systems that provide a holistic view of patient history, streamlining clinical workflows and improving the overall quality of care.",
    features: ["Patient History", "Secure Data Sharing", "Prescription Tracking", "Clinical Workflows"]
  }
];

const process = [
  { step: '01', title: 'Clinical Workflow Analysis', description: 'We meticulously analyze your clinical and administrative workflows to design a system that reduces friction and errors.' },
  { step: '02', title: 'Compliant Development', description: 'Our engineers build the software with a privacy-first architecture, ensuring strict HIPAA/GDPR compliance and robust data encryption.' },
  { step: '03', title: 'Training & Deployment', description: 'We provide extensive training to medical and administrative staff to ensure high adoption rates and a seamless rollout.' }
];

export default function HealthcareSoftware() {
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
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-bold border border-accent/20">
                  HIPAA Compliant
                </span>
                <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold border border-secondary/20">
                  EHR Integrated
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-[1.1] tracking-tight">
                Healthcare IT <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-10 leading-relaxed max-w-lg">
                Modernize patient care with our secure, compliant, and intuitive healthcare software. We build technology that saves lives and reduces administrative burden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products/vorqard">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                    View VorQard HMS
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                    Request Consultation
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
                  src="/images/services/service_healthcare_1788517271459.jpg" 
                  alt="Healthcare Software Development" 
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
              Transformative healthcare solutions designed to improve patient outcomes and streamline medical operations.
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
            <p className="text-lg sm:text-xl text-slate-600 font-medium">A careful, compliant approach to healthcare technology.</p>
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
                Transform your healthcare practice
              </h2>
              <p className="text-sm sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                Join our beta program
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-sm mx-auto sm:max-w-none">
                <Link to="/products/vorqard" className="w-full sm:w-auto">
                  <Button size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-white text-primary hover:bg-white/90 rounded-full w-full transition-transform hover:scale-105 shadow-lg">
                    Learn More
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