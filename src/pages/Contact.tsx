import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { toast } from 'sonner';
import { initEmailJS, sendContactEmail, EMAILJS_CONFIG } from '@/lib/emailjs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
  {
    icon: Mail,
    title: 'General Inquiries',
    content: 'hello@abhivorn.com',
    href: 'mailto:hello@abhivorn.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 9876543210',
    href: 'tel:+919876543210'
  },
  {
    icon: MapPin,
    title: 'Office',
    content: 'Hyderabad, Telangana, India',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Fri: 9 AM - 6 PM IST',
    href: '#'
  }
];

const productContacts = [
  {
    title: 'VORN HR Product',
    email: 'hr@abhivorn.com',
    website: 'www.vornhr.com'
  },
  {
    title: 'VorQard (Healthcare)',
    email: 'healthcare@abhivorn.com',
    website: 'www.vorqard.com'
  }
];

const inquiryTypes = [
  'VORN HR Demo',
  'VorQard Beta Access',
  'Custom Development Project',
  'Partnership Inquiry',
  'General Question',
  'Career Opportunity'
];

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and more. Our solutions are adaptable to any business that needs HR management or healthcare solutions.'
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
    answer: 'Absolutely! All our plans include email support, and our Professional and Enterprise plans include priority support with faster response times.'
  },
  {
    question: 'Can you integrate with existing systems?',
    answer: 'Yes, we specialize in system integration. Our team can connect VORN HR with your existing ERP, payroll systems, biometric devices, and other enterprise software.'
  },
  {
    question: 'What are your pricing models?',
    answer: 'We offer flexible pricing: subscription-based for our SaaS products, fixed-price for well-defined projects, and time & material for evolving requirements. Contact us for a custom quote.'
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
    consent: false
  });

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error('Please agree to be contacted before submitting.');
      return;
    }

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
      toast.error('EmailJS is not configured. Please set up your EmailJS credentials in src/lib/emailjs.ts');
      console.log('Form data (EmailJS not configured):', formData);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        inquiryType: formData.inquiryType,
        message: formData.message,
      });
      
      toast.success('Thank you! We\'ll respond within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
        consent: false
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again or email us directly.');
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
              Let's Build Something{' '}
              <span className="text-accent">Great Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team. We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                      <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {item.content}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Product-Specific Contact</h3>
                <div className="space-y-4">
                  {productContacts.map((product) => (
                    <div key={product.title} className="p-4 bg-muted/50 rounded-xl">
                      <div className="font-medium text-foreground mb-2">{product.title}</div>
                      <div className="text-sm text-muted-foreground">
                        <a href={`mailto:${product.email}`} className="hover:text-accent transition-colors">
                          {product.email}
                        </a>
                        <span className="mx-2">•</span>
                        <span>{product.website}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-xl">
                <div className="flex items-center gap-2 text-accent font-medium mb-2">
                  <Clock className="h-4 w-4" />
                  Response Time
                </div>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        required
                        placeholder="Your name"
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
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      required
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="">Select an option</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your project or inquiry..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to be contacted by Abhivorn Technologies regarding my inquiry.
                    </label>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
