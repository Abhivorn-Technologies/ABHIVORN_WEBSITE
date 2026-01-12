import emailjs from '@emailjs/browser';

// EmailJS Configuration
// These are PUBLIC keys and safe to include in the codebase
// To set up EmailJS:
// 1. Go to https://emailjs.com and create an account
// 2. Create an Email Service (e.g., Gmail, Outlook)
// 3. Create an Email Template
// 4. Get your Public Key from Account > API Keys
// 5. Replace the values below with your own

export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  contactTemplateId: 'YOUR_CONTACT_TEMPLATE_ID', // Template for contact form
  applicationTemplateId: 'YOUR_APPLICATION_TEMPLATE_ID', // Template for job applications
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send contact form email
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: string;
  message: string;
}) => {
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.contactTemplateId,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      company: data.company || 'Not provided',
      inquiry_type: data.inquiryType,
      message: data.message,
      to_name: 'Abhivorn Technologies',
    }
  );
};

// Send job application email
export const sendApplicationEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience?: string;
  portfolio?: string;
  coverLetter?: string;
}) => {
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.applicationTemplateId,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      position: data.position,
      experience: data.experience || 'Not specified',
      portfolio: data.portfolio || 'Not provided',
      cover_letter: data.coverLetter || 'No cover letter provided',
      to_name: 'Abhivorn Technologies HR',
    }
  );
};
