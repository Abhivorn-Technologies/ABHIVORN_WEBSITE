import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const blogPosts = [
  {
    slug: 'startups-hrms-2026',
    title: 'Why Indian Startups Need Custom HRMS Software in 2026',
    excerpt: 'Discover why startups in India are switching to custom HRMS software for payroll, attendance, hiring, and employee management in 2026.',
    date: 'April 2026',
    readTime: '5 min read',
    category: 'HRMS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop'
  },
  {
    slug: 'ai-healthcare-diagnostics',
    title: 'AI in Healthcare: The Future of Medical Diagnostics',
    excerpt: 'Explore how artificial intelligence is revolutionizing medical diagnostics and transforming healthcare outcomes across India.',
    date: 'March 2026',
    readTime: '7 min read',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=450&fit=crop'
  },
  {
    slug: 'custom-software-benefits-2026',
    title: 'Top Benefits of Custom Software Development for Growing Businesses in 2026',
    excerpt: 'Discover how custom software development can help growing businesses scale faster, improve efficiency, and stay ahead of competition in 2026.',
    date: 'April 2026',
    readTime: '6 min read',
    category: 'Custom Software',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop'
  },
  {
    slug: 'indian-companies-hrms-2026',
    title: 'Why Indian Companies Are Switching to Custom HRMS Software in 2026',
    excerpt: 'Learn why Indian businesses are moving away from generic HRMS to custom solutions tailored for Indian workforce management needs.',
    date: 'March 2026',
    readTime: '5 min read',
    category: 'HRMS',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop'
  },
  {
    slug: 'ai-solutions-business-growth',
    title: 'How AI Solutions Are Helping Businesses Reduce Costs and Grow Faster',
    excerpt: 'Explore how AI-powered solutions are transforming business operations, reducing costs, and accelerating growth across industries.',
    date: 'February 2026',
    readTime: '6 min read',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights on HRMS, healthcare technology, and software development for modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-sm text-primary font-medium mb-4">
                    {post.category}
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights on HR technology and software development.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-primary-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}