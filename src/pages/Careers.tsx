import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, BookOpen, Globe, Rocket, MapPin, Clock, ChevronRight, Upload, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/layout/Layout';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { initEmailJS, sendApplicationEmail, sendApplicationForm, EMAILJS_CONFIG } from '@/lib/emailjs';

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
    title: 'Full Stack Developer Intern',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
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
    title: 'Frontend Developer Intern',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
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
    title: 'Business Development Associate Intern',
    type: 'Full-time',
    location: 'Hyderabad',
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
    title: 'QA Engineer Intern',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
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
    coverLetter: '',
    fileName: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mainFormRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bypass validation for testing if position is hidden
    if (!selectedPosition) {
      setSelectedPosition('Test Position');
      // Continue...
    }

    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.publicKey) {
      toast.error('EmailJS is not configured. Please set up your EmailJS credentials in the .env file');
      return;
    }

    setIsSubmitting(true);

    try {
      if (mainFormRef.current) {
        // Debug: Log the file to ensure it's present in the form data
        const formDataPayload = new FormData(mainFormRef.current);
        const file = formDataPayload.get('file') as File;

        await sendApplicationForm(mainFormRef.current);
      } else {
        throw new Error('Form reference is missing');
      }


      toast.success('Application sent! Please check the bottom of the email for the attached resume.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        portfolio: '',
        coverLetter: '',
        fileName: ''
      });
      setSelectedPosition('');

      // Reset forms manually if needed
      if (mainFormRef.current) mainFormRef.current.reset();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Failed to send application:', error);

      if (error?.status === 413 || error?.text?.includes('size limit')) {
        toast.error('Error: 413. Please go to EmailJS Dashboard > Email Services > Edit Service > Allow Attachments.', { duration: 8000 });
      } else {
        toast.error('Failed to submit application. Please try again or email us directly at careers@abhivorn.com');
      }
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
              <form ref={mainFormRef} onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="from_name"
                      required
                      maxLength={100}
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
                      name="from_email"
                      type="email"
                      required
                      maxLength={100}
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
                      name="phone"
                      required
                      maxLength={20}
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
                      name="position"
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
                      name="experience"
                      maxLength={50}
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
                      name="portfolio"
                      maxLength={200}
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
                  <div
                    className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors cursor-pointer"
                    onClick={() => {
                      if (fileInputRef.current) {
                        fileInputRef.current.click();
                      }
                    }}
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    {formData.fileName ? (
                      <div className="text-center">
                        <p className="text-sm font-medium text-accent break-all">
                          {formData.fileName}
                        </p>
                        <p className="text-xs text-green-600 font-semibold mt-1">
                          ✓ Ready to attach
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF, DOC up to 500KB
                        </p>
                      </>
                    )}
                    <input
                      type="file"
                      name="file"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          if (file.size > 500 * 1024) {
                            toast.error('File size must be less than 500KB');
                            e.target.value = '';
                            setFormData(prev => ({ ...prev, fileName: '' }));
                            return;
                          }
                          setFormData(prev => ({ ...prev, fileName: file.name }));
                        }
                      }}
                    />
                  </div>
                </div>


                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cover Letter
                  </label>
                  <Textarea
                    name="cover_letter"
                    maxLength={3000}
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
