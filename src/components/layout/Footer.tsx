import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const footerLinks = {
  products: [
    { name: 'VORN HR', href: '/products/vorn-hr' },
    { name: 'VorQard', href: '/products/vorqard' },
    { name: 'Custom Development', href: '/services#custom' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  contact: [
    { icon: Mail, text: 'hello@abhivorn.com', href: 'mailto:hello@abhivorn.com' },
    { icon: Phone, text: '+91 9966629766', href: 'tel:+919966629766' },
    { icon: MapPin, text: 'Hyderabad, Telangana, India', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/abhivorn-technologies', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/abhivorn_technologies?igsh=amh3bWw2d2N1bDVq', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Abhivorn Technologies"
                width="160"
                height="40"
                className="h-10 w-auto brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Enterprise-grade HR & Healthcare solutions for modern businesses. Building the future of enterprise software.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 ${social.label === 'LinkedIn'
                    ? 'hover:bg-[#0A66C2] hover:scale-110'
                    : 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:scale-110'
                    }`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2026 Abhivorn Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
