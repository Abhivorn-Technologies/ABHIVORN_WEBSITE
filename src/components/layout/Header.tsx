import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: null, // No direct navigation — dropdown only
    isMegaMenu: true,
    dropdown: [
      { name: 'Custom Software Development', href: '/custom-software-development' },
      { name: 'HRMS Software Development', href: '/hrms-software-development' },
      { name: 'AI & Machine Learning', href: '/ai-development-company' },
      { name: 'Mobile App Development', href: '/mobile-app-development' },
      { name: 'Healthcare Technology', href: '/healthcare-software-development' },
      { name: 'Web Application Development', href: '/web-development-company-hyderabad' },
    ],
  },
  {
    name: 'Products',
    href: null, // No direct navigation — dropdown only
    isMegaMenu: true,
    dropdown: [
      { name: 'VORN HR (HRMS)', href: '/products/vorn-hr' },
      { name: 'VorQard (Healthcare)', href: '/products/vorqard' },
    ],
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Abhivorn Technologies" 
              width="160" 
              height="40" 
              className="h-10 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="h-full flex items-center relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href ? (
                  /* Regular nav link — navigates on click */
                  <Link to={link.href} className="h-full flex items-center px-2 relative">
                    <Button
                      variant="nav"
                      className={`flex items-center gap-1 h-10 ${
                        location.pathname === link.href ? 'text-primary' : ''
                      } ${activeDropdown === link.name ? 'text-primary' : ''}`}
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    </Button>
                  </Link>
                ) : (
                  /* Dropdown-only button — no navigation */
                  <button
                    className={`h-full flex items-center px-2 relative cursor-pointer`}
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    <span className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                      activeDropdown === link.name ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                    }`}>
                      {link.name}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                )}

                {/* Desktop Mega Menu Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, x: "-50%", scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                      exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute top-14 left-1/2 pt-6 cursor-default ${link.dropdown.length > 2 ? 'w-[550px]' : 'w-64'}`}
                    >
                      {/* Pointer Arrow */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-200 rotate-45 z-20 rounded-tl-sm" />
                      
                      {/* Dropdown Container */}
                      <div className={`relative z-10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-200 rounded-2xl ${link.dropdown.length > 2 ? 'p-6' : 'p-3'}`}>
                        <div className={`grid ${link.dropdown.length > 2 ? 'grid-cols-2 gap-x-6 gap-y-1' : 'grid-cols-1 gap-y-1'}`}>
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                              <span className="block font-medium text-slate-700 group-hover:text-primary transition-colors text-[14px]">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    /* For items with dropdowns: show expand toggle */
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between py-3 text-foreground/80 hover:text-primary font-bold transition-colors"
                      >
                        {link.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === link.name ? 'rotate-180 text-primary' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1 pb-3">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block py-2 text-sm text-muted-foreground hover:text-primary font-medium transition-colors"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    /* Regular link */
                    <Link
                      to={link.href!}
                      className="block py-3 text-foreground/80 hover:text-primary font-bold transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <Link to="/contact" className="block">
                  <Button variant="hero" size="lg" className="w-full">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
