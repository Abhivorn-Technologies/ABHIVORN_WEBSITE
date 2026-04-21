import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Projects = lazy(() => import("./pages/Projects"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const VornHR = lazy(() => import("./pages/VornHR"));
const VorQard = lazy(() => import("./pages/VorQard"));
const CustomSoftware = lazy(() => import("./pages/CustomSoftware"));
const HRMSSoftware = lazy(() => import("./pages/HRMSSoftware"));
const AIDevelopment = lazy(() => import("./pages/AIDevelopment"));
const MobileAppDevelopment = lazy(() => import("./pages/MobileAppDevelopment"));
const HealthcareSoftware = lazy(() => import("./pages/HealthcareSoftware"));
const WebDevelopmentHyderabad = lazy(() => import("./pages/WebDevelopmentHyderabad"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/products/vorn-hr" element={<VornHR />} />
            <Route path="/products/vorqard" element={<VorQard />} />
            {/* Service Pages */}
            <Route path="/custom-software-development" element={<CustomSoftware />} />
            <Route path="/hrms-software-development" element={<HRMSSoftware />} />
            <Route path="/ai-development-company" element={<AIDevelopment />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/healthcare-software-development" element={<HealthcareSoftware />} />
            <Route path="/web-development-company-hyderabad" element={<WebDevelopmentHyderabad />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
