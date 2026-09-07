import { Star } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  rating: number;
}

export const clientReviews: Testimonial[] = [
  {
    quote: "Abhivorn's HRMS solution transformed our HR operations. We've seen a 70% reduction in administrative work.",
    name: 'HR Director',
    company: 'Insurance Company',
    rating: 5,
  },
  {
    quote: "The document extraction system exceeded our expectations with 98.5% accuracy. It's been a game-changer for our mortgage processing.",
    name: 'Operations Manager',
    company: 'Mortgage Processing Firm',
    rating: 5,
  },
  {
    quote: "Professional team, excellent communication, and delivered on time. We highly recommend Abhivorn for healthcare solutions.",
    name: 'Founder',
    company: 'Elevate Rootz',
    rating: 5,
  },
  {
    quote: "Their team built a highly resilient cloud architecture for our core platform. We handled a 5x traffic surge without a single hitch.",
    name: 'Chief Technology Officer',
    company: 'FinTech Innovations',
    rating: 5,
  },
  {
    quote: "VorQard completely transformed our patient check-in workflow. Patient wait times dropped by over 60% within the first month.",
    name: 'Medical Director',
    company: 'Apollo Health Partner Clinic',
    rating: 5,
  },
  {
    quote: "The custom AI recommendation model they built drove a 35% increase in customer conversions. Exceptional engineering capability.",
    name: 'VP of Engineering',
    company: 'E-Commerce Enterprise',
    rating: 5,
  },
  {
    quote: "VORN HR made attendance tracking and payroll processing effortless across our multiple branch locations. Highly recommended!",
    name: 'Head of People Operations',
    company: 'Global Logistics Ltd',
    rating: 5,
  },
  {
    quote: "From initial sprint planning to production release, Abhivorn's transparency and technical depth exceeded all our expectations.",
    name: 'Product Lead',
    company: 'NextGen Mobility',
    rating: 5,
  },
];

interface ReviewMarqueeProps {
  title?: string;
  subtitle?: string;
  reviews?: Testimonial[];
  className?: string;
  bgClassName?: string;
}

export default function ReviewMarquee({
  title = "What Our Clients Say",
  subtitle = "Trusted by industry leaders, growing enterprises, and fast-paced startups across India.",
  reviews = clientReviews,
  className = "",
  bgClassName = "bg-slate-50/60 border-t border-border",
}: ReviewMarqueeProps) {
  // Duplicate for seamless infinite marquee loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className={`py-16 sm:py-24 overflow-hidden relative ${bgClassName} ${className}`}>
      <div className="container-custom mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      {/* Marquee Wrapper with edge fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Gradient Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

        {/* Continuous Auto-Scrolling Track */}
        <div className="animate-marquee flex gap-6 px-4 py-2 hover:[animation-play-state:paused]">
          {duplicatedReviews.map((testimonial, index) => (
            <div
              key={`${testimonial.company}-${index}`}
              className="w-[310px] sm:w-[380px] lg:w-[410px] flex-shrink-0 bg-white border border-border/80 shadow-sm hover:shadow-md rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 select-none hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm sm:text-base mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Company */}
              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm sm:text-base">
                  {testimonial.name}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
