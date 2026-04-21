import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Clock, Tag } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  metaDescription: string;
  image: string;
}> = {
  'startups-hrms-2026': {
    title: 'Why Indian Startups Need Custom HRMS Software in 2026',
    excerpt: 'Discover why startups in India are switching to custom HRMS software for payroll, attendance, hiring, and employee management in 2026.',
    date: 'April 2026',
    readTime: '5 min read',
    category: 'HRMS',
    metaDescription: 'Discover why startups in India are switching to custom HRMS software for payroll, attendance, hiring, and employee management in 2026.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    content: [
      'Managing a startup is exciting, but handling employees manually can quickly become chaotic. Attendance sheets, salary calculations, leave approvals, and hiring processes often waste valuable time. That\'s why many growing businesses are now choosing custom HRMS software.',
      'What Is HRMS Software?',
      'HRMS stands for Human Resource Management System. It helps companies manage employee records, attendance tracking, leave management, payroll processing, recruitment, and performance reviews. Instead of using multiple tools, everything is managed in one place.',
      'Why Startups Need Custom HRMS',
      '1. Scales With Growth: As your team grows from 10 to 100 employees, manual systems fail. A custom HRMS grows with your business, adding features and capacity as needed.',
      '2. Saves Time: Automated payroll, leave approvals, and reports reduce admin work significantly. What took hours now takes minutes.',
      '3. Better Accuracy: Human errors in salary or attendance can damage trust. Automation improves reliability and reduces disputes.',
      '4. Strong Security: Employee data is sensitive. A secure HRMS protects business information with role-based access and encrypted storage.',
      'Why Choose Abhivorn',
      'Abhivorn builds custom HRMS software for startups and enterprises in India. We create solutions tailored to your workflow, not generic software that forces compromises. Our VORN HR platform is designed specifically for Indian businesses, handling compliance with local labor laws and regulations.',
      'Final Thoughts',
      'If your startup is growing, now is the time to upgrade from spreadsheets to smart HR systems. A custom HRMS is an investment in your company\'s future, helping you focus on what matters most—growing your business.'
    ]
  },
  'ai-healthcare-diagnostics': {
    title: 'AI in Healthcare: The Future of Medical Diagnostics',
    excerpt: 'Explore how artificial intelligence is revolutionizing medical diagnostics and transforming healthcare outcomes across India.',
    date: 'March 2026',
    readTime: '7 min read',
    category: 'Healthcare',
    metaDescription: 'Explore how artificial intelligence is revolutionizing medical diagnostics and transforming healthcare outcomes across India.',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=450&fit=crop',
    content: [
      'Artificial Intelligence is transforming healthcare across India, from urban hospitals to rural clinics. Medical diagnostics, once dependent solely on human expertise, now benefits from AI-powered tools that improve accuracy and speed.',
      'What is AI in Healthcare?',
      'AI in healthcare uses machine learning algorithms to analyze medical data, including images, patient records, and lab results. These systems can identify patterns that may be missed by human observation, leading to earlier detection and better outcomes.',
      'Key Applications of AI in Diagnostics',
      'Medical Imaging: AI algorithms can analyze X-rays, CT scans, and MRIs to detect conditions like cancer, fractures, and neurological disorders with remarkable accuracy.',
      'Pathology: Digital pathology combined with AI helps pathologists identify diseased cells faster and more accurately.',
      'Remote Monitoring: AI-powered devices can monitor patients with chronic conditions, alerting healthcare providers to potential issues before they become serious.',
      'The Indian Context',
      'India faces unique healthcare challenges: a vast population, uneven distribution of medical professionals, and varying levels of infrastructure. AI can help bridge these gaps by making quality diagnostics more accessible.',
      'Why Abhivorn?',
      'Abhivorn is developing AI-powered healthcare solutions through VorQard, our healthcare platform. We understand the Indian healthcare landscape and build solutions that address local needs while leveraging global best practices.',
      'Future Outlook',
      'The integration of AI in healthcare is just beginning. As technology advances and regulatory frameworks evolve, we can expect AI to play an increasingly important role in delivering quality healthcare across India.'
    ]
  },
  'custom-software-benefits-2026': {
    title: 'Top Benefits of Custom Software Development for Growing Businesses in 2026',
    excerpt: 'Discover how custom software development can help growing businesses scale faster, improve efficiency, and stay ahead of competition in 2026.',
    date: 'April 2026',
    readTime: '6 min read',
    category: 'Custom Software',
    metaDescription: 'Discover how custom software development can help growing businesses scale faster, improve efficiency, and stay ahead of competition in 2026.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    content: [
      'In 2026, businesses across India are increasingly turning to custom software solutions to gain competitive advantage. While off-the-shelf software serves basic needs, custom development unlocks unique capabilities tailored to specific business requirements.',
      'What is Custom Software Development?',
      'Custom software development involves creating applications specifically designed for a business unique workflows, processes, and goals. Unlike generic software, custom solutions are built from the ground up to address specific challenges.',
      'Top Benefits for Growing Businesses',
      '1. Perfect Fit: Custom software matches your exact business processes without compromise. No need to adapt your workflow to fit the software.',
      '2. Scalability: Built to grow with your business. Add features and capacity as needed without expensive migrations.',
      '3. Competitive Advantage: Unique capabilities that competitors cannot easily replicate with generic software.',
      '4. Integration: Seamlessly connects with existing systems, APIs, and third-party tools your business uses.',
      '5. Ownership: You own the code and can make changes anytime without dependency on vendor roadmaps.',
      'Why Indian Businesses Are Adopting Custom Solutions',
      'Indian companies, especially startups and SMEs, are recognizing that generic software often fails to address local market needs. Custom solutions handle regional languages, local compliance requirements, and India-specific business practices.',
      'Cost Considerations',
      'While custom software requires upfront investment, the long-term benefits far outweigh costs. Reduced licensing fees, improved efficiency, and better alignment with business goals deliver strong ROI.',
      'Why Abhivorn?',
      'Abhivorn specializes in custom software development for Indian businesses. Our team understands local market needs and builds solutions that deliver real business value.'
    ]
  },
  'indian-companies-hrms-2026': {
    title: 'Why Indian Companies Are Switching to Custom HRMS Software in 2026',
    excerpt: 'Learn why Indian businesses are moving away from generic HRMS to custom solutions tailored for Indian workforce management needs.',
    date: 'March 2026',
    readTime: '5 min read',
    category: 'HRMS',
    metaDescription: 'Learn why Indian businesses are moving away from generic HRMS to custom solutions tailored for Indian workforce management needs.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
    content: [
      'Indian companies are increasingly abandoning generic HRMS platforms in favor of custom solutions. This shift reflects unique workforce management challenges that global HRMS platforms often fail to address.',
      'The Problem with Generic HRMS',
      'Most HRMS platforms are designed for Western workforce patterns. They struggle with Indian-specific requirements like PF calculations, ESI compliance, overtime rules, and regional language support.',
      'Why Indian Companies Are Making the Switch',
      '1. Compliance: India has complex labor regulations that vary by state. Custom HRMS handles local compliance seamlessly.',
      '2. Payroll Complexity: Indian payroll involves PF, ESI, professional tax, and variable components. Custom solutions handle these accurately.',
      '3. Language: Employees across India speak multiple languages. Custom HRMS provides multilingual interfaces.',
      '4. Integration: Connects with Indian banking systems, government portals, and local HR tools.',
      '5. Cost Efficiency: No expensive international licenses or unnecessary features.',
      'Key Features Indian Companies Need',
      'PF and ESI management, professional tax handling, attendance tracking with shift management, loan and advance management, and compliance reporting for various government portals.',
      'The Growth of Domestic HRMS',
      'Indian companies now prefer solutions built in India, for India. This ensures better support, faster updates, and understanding of evolving regulations.',
      'Why Abhivorn?',
      'Abhivorn builds VORN HR, a custom HRMS designed specifically for Indian businesses. We understand Indian workforce management and build solutions that work.'
    ]
  },
  'ai-solutions-business-growth': {
    title: 'How AI Solutions Are Helping Businesses Reduce Costs and Grow Faster',
    excerpt: 'Explore how AI-powered solutions are transforming business operations, reducing costs, and accelerating growth across industries.',
    date: 'February 2026',
    readTime: '6 min read',
    category: 'AI',
    metaDescription: 'Explore how AI-powered solutions are transforming business operations, reducing costs, and accelerating growth across industries.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    content: [
      'Artificial Intelligence is no longer just a buzzword. In 2026, Indian businesses are leveraging AI to dramatically reduce costs and accelerate growth across every department.',
      'How AI Reduces Costs',
      'Automation: AI automates repetitive tasks that previously required manual effort. Data entry, report generation, and customer support are handled efficiently.',
      'Error Reduction: AI minimizes human errors in calculations, data processing, and decision-making, saving costly corrections.',
      'Resource Optimization: AI helps allocate resources efficiently, reducing waste and improving utilization.',
      'Predictive Maintenance: In manufacturing and operations, AI predicts equipment failures before they occur, preventing expensive downtime.',
      'How AI Accelerates Growth',
      'Better Decisions: AI analyzes data faster and more accurately than humans, enabling quicker, smarter decisions.',
      'Customer Insights: AI understands customer behavior, preferences, and patterns, helping businesses personalize offerings.',
      'Market Trends: AI identifies emerging trends before competitors, allowing proactive strategy adjustments.',
      'Sales Acceleration: AI-powered CRM helps sales teams prioritize leads and close deals faster.',
      'Industries Benefiting from AI',
      'Healthcare: AI assists in diagnostics and patient care. Finance: AI detects fraud and optimizes investments. Retail: AI personalizes shopping experiences. Manufacturing: AI optimizes production and quality.',
      'Getting Started with AI',
      'Start with specific use cases. Identify repetitive tasks, data analysis challenges, or decision-making processes that AI can improve.',
      'Why Abhivorn?',
      'Abhivorn develops AI-powered solutions tailored to business needs. We help identify the best AI opportunities and implement effective solutions.'
    ]
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug || ''];

  if (!post) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
            <Link to="/blog" className="text-accent hover:underline">Return to Blog</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-sm text-primary font-medium">
                <Tag className="h-4 w-4" />
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl prose prose-lg max-w-none"
          >
            <div className="space-y-6">
              {post.content.map((paragraph, index) => {
                if (paragraph.endsWith('?')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground pt-4">
                      {paragraph}
                    </h2>
                  );
                } else if (paragraph.match(/^[1-4]\./)) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground pt-4">
                      {paragraph}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            View All Blog Posts
          </Link>
        </div>
      </section>
    </Layout>
  );
}