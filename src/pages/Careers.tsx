import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, BookOpen, Globe, Rocket, MapPin, Clock, ChevronRight, Upload, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/layout/Layout';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { initEmailJS, sendApplicationEmail, EMAILJS_CONFIG } from '@/lib/emailjs';

const benefits = [
  {
    icon: BookOpen,
    title: 'Learning & Growth',
    description: 'Continuous learning budget, mentorship from founders, and clear career progression paths.'
  },
  {
    icon: Rocket,
    title: 'Modern Tech Stack',
    description: 'Work with React, Django, PostgreSQL, AWS, and the latest tools in the industry.'
  },
  {
    icon: Globe,
    title: 'Remote-Friendly',
    description: 'Flexible working hours and the ability to work from anywhere in India.'
  },
  {
    icon: Briefcase,
    title: 'Impact & Ownership',
    description: 'Own your projects end-to-end with direct customer interaction and real business impact.'
  }
];

const openPositions = [
  {
    id: 1,
    title: 'Full Stack Developer',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    experience: '2-4 years',
    responsibilities: [
      'Build and maintain web applications using React and Django',
      'Design and optimize PostgreSQL databases',
      'Collaborate with product team on new features',
      'Participate in code reviews and technical discussions'
    ],
    skills: ['React', 'Django', 'PostgreSQL', 'TypeScript', 'AWS']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    experience: '1-3 years',
    responsibilities: [
      'Develop responsive user interfaces with React',
      'Implement pixel-perfect designs from Figma',
      'Optimize application performance',
      'Write clean, maintainable code'
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 3,
    title: 'Business Development Associate',
    type: 'Full-time',
    location: 'Hyderabad',
    experience: '0-2 years',
    responsibilities: [
      'Generate and qualify leads for VORN HR',
      'Conduct product demos to potential clients',
      'Build relationships with key stakeholders',
      'Meet monthly sales targets'
    ],
    skills: ['Sales', 'Communication', 'CRM', 'Presentation Skills']
  },
  {
    id: 4,
    title: 'QA Engineer',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    experience: '1-2 years',
    responsibilities: [
      'Design and execute test cases',
      'Perform functional and regression testing',
      'Report and track bugs',
      'Collaborate with development team'
    ],
    skills: ['Manual Testing', 'Selenium', 'API Testing', 'JIRA']
  },
  {
    id: 5,
    title: 'Software Development Intern',
    type: 'Internship',
    location: 'Hyderabad',
    experience: 'Freshers',
    responsibilities: [
      'Learn and contribute to real projects',
      'Work closely with senior developers',
      'Participate in daily standups',
      'Build features under mentorship'
    ],
    skills: ['Python/JavaScript', 'Git', 'Problem Solving', 'Quick Learner']
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Submit Application',
    description: 'Fill out the form or email your CV to careers@abhivorn.com'
  },
  {
    step: 2,
    title: 'Technical Interview',
    description: 'Code review or project discussion based on your role'
  },
  {
    step: 3,
    title: 'Final Round',
    description: 'Meet the founders and discuss culture fit'
  }
];

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  });

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPosition) {
      toast.error('Please select a position.');
      return;
    }

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
      toast.error('EmailJS is not configured. Please set up your EmailJS credentials in src/lib/emailjs.ts');
      console.log('Application data (EmailJS not configured):', { ...formData, position: selectedPosition });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendApplicationEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: selectedPosition,
        experience: formData.experience,
        portfolio: formData.portfolio,
        coverLetter: formData.coverLetter,
      });
      
      toast.success('Thank you for your application! We\'ll be in touch within a week.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        portfolio: '',
        coverLetter: ''
      });
      setSelectedPosition('');
    } catch (error) {
      console.error('Failed to send application:', error);
      toast.error('Failed to submit application. Please try again or email us directly at careers@abhivorn.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Join Our{' '}
              <span className="text-accent">Growing Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Build the future of enterprise software with us. We're looking for passionate 
              individuals who want to make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground">Benefits that matter for your career and life</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-muted-foreground">Find your perfect role and apply today</p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <a href="#apply">
                    <Button
                      variant="hero"
                      onClick={() => setSelectedPosition(position.title)}
                    >
                      Apply Now
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Responsibilities:</h4>
                  <ul className="space-y-1">
                    {position.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {position.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">How to Apply</h2>
            <p className="text-muted-foreground">Our simple 3-step hiring process</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground">
              Average timeline: <span className="font-semibold text-foreground">1-2 weeks</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Apply Now</h2>
            <p className="text-muted-foreground">Take the first step towards your new career</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Position *
                    </label>
                    <select
                      required
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                    >
                      <option value="">Select a position</option>
                      {openPositions.map((pos) => (
                        <option key={pos.id} value={pos.title}>{pos.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Years of Experience
                    </label>
                    <Input
                      placeholder="e.g., 2"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Portfolio / GitHub
                    </label>
                    <Input
                      placeholder="https://github.com/username"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Resume *
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC up to 5MB
                    </p>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cover Letter
                  </label>
                  <Textarea
                    placeholder="Tell us why you'd be a great fit..."
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
