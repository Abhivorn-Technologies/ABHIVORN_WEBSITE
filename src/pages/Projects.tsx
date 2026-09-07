import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Globe, 
  Sparkles,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ReviewMarquee from '@/components/common/ReviewMarquee';

export interface ProjectReview {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  type: 'Web App' | 'Website';
  category: string;
  headline: string;
  summary: string;
  results: { metric: string; label: string }[];
  technologies: string[];
  image: string;
  link: string;
  isInternalProduct?: boolean;
  review: ProjectReview;
}

const projects: ProjectItem[] = [
  {
    id: 'vorn-hr',
    number: '01',
    name: 'VORN HR',
    type: 'Web App',
    category: 'HRMS & Enterprise SaaS',
    headline: 'Enterprise Workforce & Payroll Automation Platform',
    summary: 'A next-generation human resource management web application engineered for distributed enterprises. Features biometric facial-recognition attendance, automated leave pipelines, and instant payroll disbursement.',
    results: [
      { metric: '70%', label: 'Admin Time Saved' },
      { metric: '10K+', label: 'Managed Employees' },
      { metric: '99.9%', label: 'Payroll Accuracy' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS Cloud'],
    image: '/images/projects/hrms.jpg',
    link: '/products/vorn-hr',
    isInternalProduct: true,
    review: {
      quote: "VORN HR completely digitized our workforce across 12 offices. Attendance syncs flawlessly and payroll calculation is effortless.",
      author: "Rajeshwar Rao",
      role: "Director of HR",
      company: "Apex Insurance Group",
      initials: "RR"
    }
  },
  {
    id: 'vorqard',
    number: '02',
    name: 'VorQard',
    type: 'Web App',
    category: 'Healthcare Technology',
    headline: 'QR-Based Smart Patient Queue & OPD Clinical Management',
    summary: 'An intelligent hospital and clinic management web app designed to eliminate OPD lines. Patients scan dynamic QR to register, receive live queue tokens, and doctors access digital EMR histories.',
    results: [
      { metric: '65%', label: 'OPD Wait Cut' },
      { metric: '100%', label: 'Paperless EMR' },
      { metric: 'HIPAA', label: 'Compliant' }
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'QR Telemetry', 'Docker'],
    image: '/images/projects/vorqard.jpg',
    link: '/products/vorqard',
    isInternalProduct: true,
    review: {
      quote: "VorQard eliminated our crowded morning OPD queues. Patients scan QR at reception, and doctors have instant digital access to records.",
      author: "Dr. Sunitha Reddy",
      role: "Chief Medical Admin",
      company: "CarePlus Health Clinics",
      initials: "SR"
    }
  },
  {
    id: 'costita',
    number: '03',
    name: 'Costita',
    type: 'Web App',
    category: 'FinTech & Analytics',
    headline: 'Multi-Department Expenditure & Cost Optimization System',
    summary: 'A unified financial intelligence web application built for high-growth enterprises. Costita centralizes department expenditures, provides real-time budget burn alerts, and audits vendor invoices.',
    results: [
      { metric: '18%', label: 'Cost Overhead Saved' },
      { metric: 'Real-Time', label: 'Budget Visibility' },
      { metric: '100%', label: 'Audit Compliance' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'TailwindCSS'],
    image: '/images/projects/costeta.jpg',
    link: '/contact',
    review: {
      quote: "Costita gave our leadership total clarity over department expenditures. We caught invoice discrepancies in week one and saved over 18%.",
      author: "Anand Verma",
      role: "VP of Finance & Operations",
      company: "Costita Enterprise Partners",
      initials: "AV"
    }
  },
  {
    id: 'rsn-infra',
    number: '04',
    name: 'RSN Infra Properties',
    type: 'Website',
    category: 'Real Estate & Infrastructure',
    headline: 'Luxury Infrastructure & Premium Digital Property Showcase',
    summary: 'An ultra-modern, high-converting digital property portal designed for luxury infrastructure developers. Features interactive masterplans, 3D architectural renders, and automated buyer lead capture.',
    results: [
      { metric: '3.5x', label: 'Lead Inquiries Surge' },
      { metric: '<1.2s', label: 'Page Load Speed' },
      { metric: '100+', label: 'Listings Showcased' }
    ],
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Vite', 'SEO Architecture'],
    image: '/images/projects/rsn_infra.jpg',
    link: '/contact',
    review: {
      quote: "The luxury portal built by Abhivorn elevated our brand presence dramatically. Qualified investor inquiries jumped 3.5x after launch.",
      author: "S. N. Ranga Rao",
      role: "Managing Director",
      company: "RSN Infra Properties Pvt Ltd",
      initials: "SR"
    }
  },
  {
    id: 'sreevedaa',
    number: '05',
    name: 'Sreevedaa',
    type: 'Website',
    category: 'Ayurveda & Holistic Wellness',
    headline: 'Authentic Ayurvedic Healthcare & Tele-Consultation Platform',
    summary: 'A serene, trustworthy digital wellness website bridging ancient Ayurvedic wisdom with modern tele-health. Patients complete intelligent lifestyle dosha evaluations and book verified practitioner consultations.',
    results: [
      { metric: '85%', label: 'Repeat Consultations' },
      { metric: '12K+', label: 'Dosha Assessments' },
      { metric: '4.9★', label: 'Patient Rating' }
    ],
    technologies: ['React', 'Node.js', 'Payment Gateway', 'TailwindCSS', 'REST APIs'],
    image: '/images/projects/sreevedaa.jpg',
    link: '/contact',
    review: {
      quote: "Abhivorn beautifully captured the authentic heritage of Ayurveda while delivering a fast tele-consultation platform that patients love.",
      author: "Vaidya Meera Shastry",
      role: "Founder & Chief Consultant",
      company: "Sreevedaa Holistic Wellness",
      initials: "MS"
    }
  },
  {
    id: 'well-wisher',
    number: '06',
    name: 'Well Wisher',
    type: 'Web App',
    category: 'Mental Health & Community',
    headline: 'Peer Support Community & Daily Sentiment Wellness Web App',
    summary: 'A compassionate, secure mental wellness web application dedicated to emotional wellbeing. Offers moderated peer support circles, daily mood pulse journaling, and confidential counselor sessions.',
    results: [
      { metric: '25K+', label: 'Active Members' },
      { metric: '94%', label: 'Positive Sentiment' },
      { metric: '256-Bit', label: 'Encrypted Privacy' }
    ],
    technologies: ['React', 'WebRTC', 'Node.js', 'MongoDB', 'TailwindCSS'],
    image: '/images/projects/wellwisher.jpg',
    link: '/contact',
    review: {
      quote: "Building a mental health app requires extreme privacy and speed. Abhivorn delivered encrypted peer rooms our community trusts daily.",
      author: "Priya Nambiar",
      role: "Head of Wellbeing",
      company: "Well Wisher Community",
      initials: "PN"
    }
  },
  {
    id: 'scrollme',
    number: '07',
    name: 'Scrollme',
    type: 'Web App',
    category: 'Creator Economy & Portfolios',
    headline: 'Next-Gen Dynamic Bio Link & Interactive Creator Showcase',
    summary: 'A high-performance creator web application enabling influencers and agencies to construct modular link-in-bio microsites, syndicate live social feeds, and analyze visitor conversion telemetry in real time.',
    results: [
      { metric: '500K+', label: 'Monthly Page Views' },
      { metric: '42%', label: 'Click-Through Rate' },
      { metric: '0.8s', label: 'Edge Latency' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Redis Cache', 'AWS CloudFront', 'TailwindCSS'],
    image: '/images/projects/scrollme.jpg',
    link: '/contact',
    review: {
      quote: "The micro-latency performance and modular portfolio builder Abhivorn engineered handles 500K+ monthly creator page hits without a hitch.",
      author: "Karthik Menon",
      role: "Co-Founder & Product Lead",
      company: "Scrollme Media Labs",
      initials: "KM"
    }
  },
  {
    id: 'limovi',
    number: '08',
    name: 'Limovi',
    type: 'Web App',
    category: 'Mobility & Smart Logistics',
    headline: 'Intelligent Fleet Management & Real-Time Dispatch Web App',
    summary: 'A mission-critical transportation web application providing real-time GPS telemetry, dynamic AI route optimization, computerized scheduling, and automated driver payout processing.',
    results: [
      { metric: '30%', label: 'Fuel Savings' },
      { metric: 'Live GPS', label: 'Real-Time Telemetry' },
      { metric: '99.95%', label: 'Platform Availability' }
    ],
    technologies: ['React', 'Mapbox GL', 'Node.js', 'WebSockets', 'PostgreSQL'],
    image: '/images/projects/limovi.jpg',
    link: '/contact',
    review: {
      quote: "Live GPS tracking, smart dispatch algorithms, and automated driver payouts worked reliably on day one. Fuel efficiency improved by 30%.",
      author: "Vikramaditya Sen",
      role: "Director of Fleet Logistics",
      company: "Limovi Mobility Network",
      initials: "VS"
    }
  }
];

export default function Projects() {
  return (
    <Layout>
      {/* Editorial High-End Light Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-32 pb-14 bg-[#FAFAFA]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/10 blur-[130px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-45" />
        </div>

        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xs border border-slate-200 mb-5">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-slate-700 tracking-[0.15em] uppercase">
                Portfolio & Implemented Work
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Engineering{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-primary">Excellence</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-primary/10 -z-10 -rotate-1 rounded-sm" />
              </span>{' '}
              & Digital Impact
            </h1>
            
            <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Explore our proven track record of custom web applications, proprietary SaaS platforms, and high-performance websites built for scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase - Compact Horizontal Split Cards (Low Height ~360px) */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 border-t border-slate-200/80">
        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_-8px_rgba(0,112,144,0.1)] hover:border-primary/30 transition-all duration-300 overflow-hidden lg:h-[370px]"
              >
                {/* Evenly Sized Horizontal Flex: Left 42% Image, Right 58% Content */}
                <div className="flex flex-col lg:flex-row items-stretch h-full">
                  
                  {/* Left: Image Side (Uniform 42% width, exact height) */}
                  <div className="w-full lg:w-[42%] h-[240px] sm:h-[280px] lg:h-full relative bg-slate-100 overflow-hidden group shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />

                    {/* Gradient Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Clean Pill in Top-Left */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white border border-white/20 shadow-sm">
                        <span className={`w-2 h-2 rounded-full ${project.type === 'Web App' ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                        {project.type}
                      </span>
                      <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-md text-slate-800 shadow-sm border border-white/60">
                        {project.category}
                      </span>
                    </div>

                    {/* Number Badge at Bottom Left */}
                    <div className="absolute bottom-3 left-3.5 font-mono text-xs font-bold text-white/80 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded">
                      PROJECT {project.number}
                    </div>
                  </div>

                  {/* Right: Content Side (58% width, exact uniform height and spacing) */}
                  <div className="w-full lg:w-[58%] h-full p-6 sm:p-7 lg:p-7 flex flex-col justify-between">
                    
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {project.name}
                        </h2>
                        <span className="text-xs font-mono font-bold text-primary/80 uppercase tracking-wider text-right shrink-0 truncate max-w-[220px]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug line-clamp-1">
                        {project.headline}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal mt-1.5 line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    {/* Compact Metrics Strip */}
                    <div className="grid grid-cols-3 gap-3 py-2.5 border-y border-slate-100 my-auto">
                      {project.results.map((result, idx) => (
                        <div key={result.label} className={`${idx === 0 ? '' : 'border-l border-slate-200/70 pl-3'}`}>
                          <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                            {result.metric}
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider truncate">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Compact Client Review */}
                    <div className="relative pl-3.5 border-l-2 border-primary/50 py-0.5">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed italic font-normal line-clamp-2">
                        “{project.review.quote}”
                      </p>

                      <div className="text-[11px] text-slate-500 font-medium mt-1 truncate">
                        <span className="font-bold text-slate-900">{project.review.author}</span>
                        <span className="text-slate-400"> — {project.review.role}, {project.review.company}</span>
                      </div>
                    </div>

                    {/* Footer Actions & Tech Pills */}
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 bg-slate-100/90 rounded-md text-[11px] font-semibold text-slate-600 border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link to="/contact">
                        <Button 
                          size="sm" 
                          className="rounded-full px-5 h-9 text-xs font-bold bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/20 transition-all duration-300 hover:gap-2 flex items-center gap-1.5 cursor-pointer"
                        >
                          Consult On Project
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Marquee Client Reviews at the Bottom */}
      <ReviewMarquee 
        title="What Our Clients Say"
        subtitle="Real feedback from company founders, directors, and executives who trusted Abhivorn with their digital systems."
        bgClassName="bg-[#FAFAFA] border-t border-slate-200"
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background px-4 sm:px-0">
        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-br from-primary via-[#007090] to-accent rounded-3xl sm:rounded-[3rem] px-6 py-10 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Build Your Next Project?
              </h2>
              <p className="text-sm sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                Whether you need an enterprise web application or a high-converting website, let's discuss your roadmap and launch with confidence.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-sm mx-auto sm:max-w-none">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-white text-primary hover:bg-white/90 rounded-full w-full transition-transform hover:scale-105 shadow-lg">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold border-white/30 text-white hover:bg-white/10 rounded-full w-full backdrop-blur-sm transition-transform hover:scale-105">
                    Discuss Scope & Pricing
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
