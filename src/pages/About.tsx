import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Target, Lightbulb, Shield, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AboutOffice from '@/assets/about-office.png';


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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

const founders = [
  {
    name: 'Neelam Arun',
    title: 'Founder & Lead Developer',
    bio: 'Full-stack developer with 4+ years of experience. Expert in React, Django, PostgreSQL, and AWS. Led multiple HRMS implementations.',
    linkedin: 'https://linkedin.com/in/neelamarun'
  },
  {
    name: 'Palle Akshith',
    title: 'Co-Founder',
    bio: 'Strategic business partner focused on product development and market expansion. Leading training and talent development initiatives.',
    linkedin: 'https://linkedin.com/in/palleakshith'
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Building the Future of{' '}
              <span className="text-accent">Enterprise Software</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Founded in 2025, headquartered in Hyderabad. We're an MSME-registered software company
              specializing in HR and healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Abhivorn Technologies was founded with a clear vision: to make enterprise-grade
                  software accessible to businesses of all sizes across India.
                </p>
                <p>
                  Starting with our flagship product VORN HR, we've helped companies streamline
                  their HR operations, reduce administrative overhead, and focus on what matters
                  most—their people.
                </p>
                <p>
                  Today, we're expanding into healthcare with VorQard, bringing the same
                  commitment to quality and innovation to the medical industry.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-primary/10 rounded-lg">
                  <span className="text-sm text-primary font-medium">MSME Registered</span>
                </div>
                <div className="px-4 py-2 bg-accent/10 rounded-lg">
                  <span className="text-sm text-primary font-medium">10+ Team Members</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
                <img
                  src={AboutOffice}
                  alt="Abhivorn Technologies Office"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="text-xl font-bold">Abhivorn Technologies</div>
                    <div className="text-sm opacity-80">Our Hyderabad Development Center</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      {/* <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet the Founders</h2>
            <p className="text-muted-foreground">The team driving innovation at Abhivorn</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {founder.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{founder.name}</h3>
                <p className="text-accent font-medium mb-4">{founder.title}</p>
                <p className="text-muted-foreground text-sm mb-6">{founder.bio}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in our growth story</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.date}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-medium mb-1">{milestone.date}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              We're always looking for talented individuals to help us build the future of enterprise software.
            </p>
            <Link to="/careers">
              <Button variant="hero" size="lg" className="bg-accent hover:bg-accent/90" aria-label="View Open Positions at Abhivorn">
                View Open Positions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
