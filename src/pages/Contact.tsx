import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Loader2, ChevronDown, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { toast } from 'sonner';
import { initEmailJS, sendContactEmail, EMAILJS_CONFIG } from '@/lib/emailjs';
import HeroBg from '@/assets/hero_bg.jpg';

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
    content: '+91 9966629766',
    href: 'tel:+91 9966629766'
  },
  {
    icon: MapPin,
    title: 'Office (HITEC City)',
    content: 'Podium, Ground floor, Cyber Towers, Quadrant-1, Madhapur, HITEC City, Hyderabad, Telangana 500081',
    href: 'https://www.google.com/maps/place/Cyber+Towers+-+HITEC+City/@17.4503676,78.3784705,16z/data=!3m1!4b1!4m6!3m5!1s0x3bcb930036e02df5:0xafd92e6778539645!8m2!3d17.4503676!4d78.3810454!16s%2Fg%2F11xdl26znk!5m1!1e4'
  },
  {
    icon: MapPin,
    title: 'Office (Karimnagar)',
    content: 'House No: 2-8-294, Mukarampura, SAHASRA TOWERS, beside Raghavendra Mess, Near Geetha Bhavan, Karimnagar',
    href: 'https://maps.google.com/?q=House+No:+2-8-294,+Mukarampura,+Karimnagar'
  },
  {
    icon: MapPin,
    title: 'Office (Kukatpally)',
    content: 'Shanthi Nilayam, MIG 648, near Temple Bus Stop, KPHB Phase 2, Kukatpally, Hyderabad, Telangana - 500072',
    href: 'https://www.google.com/maps/place/Abhivorn+Technologies/@17.4868787,78.3940046,17z/data=!3m1!4b1!4m6!3m5!1s0x49f364b62c0799dd:0x97e0bc47c22fdf60!8m2!3d17.4868787!4d78.3965795!16s%2Fg%2F11yn9kw_tm'
  }
];

const productContacts = [
  {
    title: 'VORN HR Product',
    email: 'hr@abhivorn.com',
    website: 'www.vornhr.com',
    link: 'https://www.vornhr.com/'
  },
  {
    title: 'VorQard (Healthcare)',
    email: 'support@vorqard.com',
    website: 'www.vorqard.com',
    link: 'https://www.vorqard.com/'
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

const slowFadeIn = {
  initial: { opacity: 0, y: 50, filter: 'blur(20px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: "100px" },
  transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    initEmailJS();
  }, []);

  const validateField = (name: string, value: string | boolean): string => {
    let error = '';
    const strValue = typeof value === 'string' ? value.trim() : '';

    switch (name) {
      case 'name':
        if (!/^[A-Za-z\s\-.']{2,50}$/.test(strValue)) {
          error = 'Please enter a valid name (letters, spaces, hyphens, periods, and apostrophes only).';
        }
        break;
      case 'email':
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(strValue)) {
          error = 'Please enter a valid email address (e.g., you@company.com).';
        }
        break;
      case 'phone':
        if (!/^[6-9]\d{9}$/.test(strValue)) {
          error = 'Phone number must be 10 digits and start with 6, 7, 8, or 9.';
        }
        break;
      case 'company':
        if (!/^[A-Za-z0-9\s&.,'-]{2,100}$/.test(strValue)) {
          error = 'Please enter a valid company name.';
        }
        break;
      case 'inquiryType':
        if (!strValue || strValue === 'default') {
          error = 'Please select an inquiry type from the dropdown.';
        }
        break;
      case 'message':
        if (strValue.length < 10 || strValue.length > 1000) {
          error = 'Message must be between 10 and 1000 characters.';
        }
        break;
      case 'consent':
        if (!value) {
          error = 'You must agree to be contacted before submitting.';
        }
        break;
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    const error = validateField(name, val);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let val: string | boolean = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    if (typeof val === 'string') {
      if (name === 'name') {
        val = val.replace(/[^A-Za-z\s\-.']/g, ''); // Allow letters, spaces, hyphens, periods, apostrophes
      } else if (name === 'company') {
        val = val.replace(/[^A-Za-z0-9\s&.,'-]/g, ''); // Standard corporate chars
      } else if (name === 'phone') {
        val = val.replace(/[^0-9]/g, '').slice(0, 10); // Only 10 digits
      } else if (name === 'email') {
        val = val.replace(/[^a-zA-Z0-9._%+\-@]/g, ''); // Valid email chars
      } else if (name === 'message') {
        val = val.slice(0, 1000); // Max 1000 chars
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: val }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form before submitting.');
      return;
    }

    if (!EMAILJS_CONFIG.publicKey) {
      toast.error('EmailJS is not configured. Please set up your EmailJS credentials in the .env file');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        inquiryType: formData.inquiryType,
        message: formData.message.trim(),
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
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-12 bg-black">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={HeroBg} 
            alt="Contact Background" 
            className="absolute inset-0 w-full h-full object-cover max-sm:object-contain max-sm:object-top sm:object-center opacity-80"
          />
          <div className="absolute inset-0 max-sm:bg-gradient-to-b max-sm:from-black/80 max-sm:via-black/40 max-sm:to-black/90 sm:bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent sm:hidden" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-4xl h-[160%] bg-black/60 blur-[100px] -z-10 rounded-[100%] pointer-events-none hidden sm:block" />
        </div>

        <div className="container-custom relative z-10 w-full mt-10 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center relative"
          >
            <h1 className="text-[10vw] sm:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-[1.1] drop-shadow-2xl">
              Let's Build Something <br />
              <span className="text-accent">Great Together</span>
            </h1>
            <p className="text-sm sm:text-xl max-w-2xl mx-auto text-white/90 font-medium leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
              Get in touch with our team. We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classic & Professional Contact Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden -mt-8 sm:-mt-20 z-20">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Contact Details (Left side) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 h-full"
            >
              <div className="bg-white rounded-3xl border border-border/40 p-8 sm:p-10 shadow-lg shadow-slate-200/50 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-5 group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300 shadow-sm border border-sky-100 group-hover:border-primary">
                          <item.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-500 mb-1 tracking-wide uppercase">{item.title}</div>
                          <div className="font-bold text-slate-900 group-hover:text-primary transition-colors text-base">
                            {item.content}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-500 tracking-wide uppercase mb-6">Product-Specific Support</h3>
                  <div className="space-y-4">
                    {productContacts.map((product) => (
                      <a 
                        href={product.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        key={product.title} 
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50 transition-all duration-300 group"
                      >
                        <div className="font-bold text-slate-900 group-hover:text-primary transition-colors">{product.title}</div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                          <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form (Right side) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 h-full"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-border/40 relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 opacity-50 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700"></div>
                
                <h2 className="text-3xl font-bold text-slate-900 mb-8 relative z-10">Send us a message</h2>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-slate-50 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-transparent transition-all ${errors.name ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/50' : 'border-slate-200'}`}
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3 flex-shrink-0" />{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-slate-50 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-transparent transition-all ${errors.email ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/50' : 'border-slate-200'}`}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3 flex-shrink-0" />{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-slate-500 text-sm font-medium">+91</span>
                        <Input
                          name="phone"
                          required
                          placeholder="9876543210"
                          maxLength={10}
                          onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`pl-12 bg-slate-50 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-transparent transition-all ${errors.phone ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        />
                      </div>
                      {errors.phone && <p className="mt-1.5 text-xs text-red-500 flex items-start gap-1 leading-snug"><AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="company"
                        required
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-slate-50 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-transparent transition-all ${errors.company ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/50' : 'border-slate-200'}`}
                      />
                      {errors.company && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3 flex-shrink-0" />{errors.company}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="inquiryType"
                        required
                        className={`w-full h-12 px-4 rounded-xl border bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary appearance-none transition-all ${errors.inquiryType ? 'border-red-500 focus:ring-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        value={formData.inquiryType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="" className="text-slate-500">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type} className="text-slate-900">{type}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                    {errors.inquiryType && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3 flex-shrink-0" />{errors.inquiryType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      required
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`bg-slate-50 text-slate-900 placeholder:text-slate-400 rounded-xl focus-visible:ring-primary focus-visible:border-transparent resize-none transition-all ${errors.message ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/50' : 'border-slate-200'}`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3 flex-shrink-0" />{errors.message}</p>}
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        className={`mt-1 accent-primary w-4 h-4 rounded border-slate-300 ${errors.consent ? 'outline-red-500 outline outline-1 outline-offset-1' : ''}`}
                        checked={formData.consent}
                        onChange={handleChange}
                      />
                      <label htmlFor="consent" className="text-sm font-medium text-slate-600 leading-relaxed cursor-pointer">
                        I agree to be contacted by Abhivorn Technologies regarding my inquiry. <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.consent && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3 flex-shrink-0" />{errors.consent}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                    disabled={isSubmitting || Object.values(errors).some(err => err !== '')}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
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
      <section className="relative section-padding bg-slate-50 border-t border-slate-200/50">
        <div className="container-custom">
          <motion.div
            variants={slowFadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "100px" }}
            className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[2rem] border border-border/40 p-5 sm:p-8 md:p-12 shadow-lg shadow-slate-200/50"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-8 sm:mb-12 text-center">Frequently Asked Questions</h2>
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left py-4 sm:py-6 flex justify-between items-center focus:outline-none group"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-primary transition-colors text-sm sm:text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180 text-primary' : ''}`} 
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
                        <p className="pb-4 sm:pb-6 text-xs sm:text-base text-slate-600 leading-relaxed font-medium">
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
    </Layout>
  );
}
