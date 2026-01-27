import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import VornHRLogo from '@/assets/logo5.png';
import VorQardLogo from '@/assets/VORQRD.png';


const products = [
    {
        name: 'VORN HR',
        tagline: 'Complete HR Management System',
        description: 'Transform your HR operations with our comprehensive HRMS solution. From attendance tracking to performance management, VORN HR handles it all.',
        icon: Users,
        color: 'from-water to-cyan-500',
        features: [
            'Employee Management & Database',
            'Facial Recognition Attendance',
            'Leave & Performance Management',
            'Payroll & Compensation',
            'Mobile Apps (iOS & Android)',
            'HR Analytics & Reports'
        ],
        metrics: [
            { value: '10+', label: 'Companies' },
            { value: '5,000+', label: 'Employees' },
            { value: '99.8%', label: 'Uptime' }
        ],
        pricing: 'Starting at ₹5,000/month',
        href: '/products/vorn-hr',
        badge: 'Most Popular',
        logo: VornHRLogo
    },
    {
        name: 'VorQard',
        tagline: 'QR-Based Healthcare Management',
        description: 'Streamline your healthcare operations with our intelligent patient management system. Reduce wait times and improve patient satisfaction.',
        icon: Heart,
        color: 'from-pink-500 to-rose-500',
        features: [
            'Patient Management System',
            'QR-Based Check-in',
            'Appointment Scheduling',
            'Billing & Invoicing',
            'Medical Records Management',
            'Analytics Dashboard'
        ],
        metrics: [
            { value: 'HIPAA', label: 'Compliant' },
            { value: '40%', label: 'Wait Time ↓' },
            { value: 'Beta', label: 'Available' }
        ],
        pricing: 'Beta Access Available',
        href: '/products/vorqard',
        badge: 'Beta Program',
        logo: VorQardLogo
    }
];

const benefits = [
    {
        icon: Zap,
        title: 'Quick Deployment',
        description: 'Get up and running in weeks, not months'
    },
    {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Bank-grade security and compliance'
    },
    {
        icon: BarChart3,
        title: 'Powerful Analytics',
        description: 'Data-driven insights for better decisions'
    }
];

export default function Products() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                            Enterprise-Grade{' '}
                            <span className="text-accent">SaaS Solutions</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Ready-to-deploy products built for modern businesses. Choose the solution that fits your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border border-border rounded-2xl overflow-hidden card-hover relative group"
                            >
                                {/* Elegant animated gradient - light through glass effect */}
                                <div
                                    className="absolute inset-0 pointer-events-none shutter-bg"
                                    style={{
                                        backgroundImage: product.name === 'VORN HR'
                                            ? 'linear-gradient(to bottom, transparent 0%, hsl(var(--water) / 0.3) 50%, transparent 100%)'
                                            : 'linear-gradient(to bottom, transparent 0%, rgba(236, 72, 153, 0.3) 50%, transparent 100%)',
                                    }}
                                />

                                {product.badge && (
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/10 text-primary text-xs font-medium z-10">
                                        {product.badge}
                                    </div>
                                )}

                                <div className={`h-2 bg-gradient-to-r ${product.color} relative z-10`} />

                                <div className="p-8 lg:p-10 bg-card/60 backdrop-blur-md relative z-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                                            <img
                                                src={product.logo}
                                                alt={`${product.name} Logo`}
                                                width="80"
                                                height="80"
                                                className="w-full h-full object-contain p-2 bg-white"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-foreground">{product.name}</h2>
                                            <p className="text-muted-foreground">{product.tagline}</p>
                                        </div>
                                    </div>

                                    <p className="text-foreground/80 mb-6">
                                        {product.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-xl">
                                        {product.metrics.map((metric) => (
                                            <div key={metric.label} className="text-center">
                                                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                        {product.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pricing */}
                                    <div className="mb-6">
                                        <p className="text-lg font-semibold text-foreground">{product.pricing}</p>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex gap-4">
                                        <Link to={product.href} className="flex-1">
                                            <Button variant="hero" className="w-full" aria-label={`Learn More about ${product.name}`}>
                                                Learn More
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link to="/contact">
                                            <Button variant="outline" aria-label={`Get Demo for ${product.name}`}>
                                                Get Demo
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Products?</h2>
                        <p className="text-muted-foreground">Built with enterprise needs in mind</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
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

            {/* CTA Section */}
            <section className="section-padding bg-primary">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-primary-foreground/80 mb-8">
                            Schedule a demo to see how our products can help streamline your operations.
                        </p>
                        <Link to="/contact">
                            <Button variant="hero" size="lg" className="bg-accent hover:bg-accent/90" aria-label="Book a Free Demo">
                                Book a Free Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
