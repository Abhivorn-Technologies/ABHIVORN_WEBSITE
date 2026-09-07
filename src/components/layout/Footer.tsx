import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import logo from '@/assets/logo.png';

const footerLinks = {
  products: [
    { name: 'VORN HR', href: '/products/vorn-hr' },
    { name: 'VorQard', href: '/products/vorqard' },
    { name: 'Custom Development', href: '/custom-software-development' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  contact: [
    { icon: Mail, text: 'hello@abhivorn.com', href: 'mailto:hello@abhivorn.com' },
    { icon: Phone, text: '+91 9966629766', href: 'tel:+919966629766' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/abhivorn-technologies', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/abhivorn_technologies?igsh=amh3bWw2d2N1bDVq', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/919966629766', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Abhivorn Technologies"
                width="160"
                height="40"
                className="h-10 w-auto brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Enterprise-grade HR & Healthcare solutions for modern businesses. Building the future of digital innovation through cutting-edge architectures.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/90 mb-6">Partner Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/90 mb-6">Overview</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/90 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    <item.icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.google.com/maps/place/Cyber+Towers+-+HITEC+City/@17.4503676,78.3784705,16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors text-sm"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Podium, Ground floor, Cyber Towers,<br />
                    Quadrant-1, Madhapur, HITEC City,<br />
                    Hyderabad, Telangana 500081
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Abhivorn Technologies Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-white/80 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white/80 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
