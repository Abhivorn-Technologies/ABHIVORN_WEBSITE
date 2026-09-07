import { ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
}

export default function Layout({ children, hideFooter = false }: LayoutProps) {
  const { pathname, hash } = useLocation();

  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      if (!hash) {
        window.scrollTo(0, 0);
      }
      prevPathname.current = pathname;
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        // Small timeout to ensure the DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
