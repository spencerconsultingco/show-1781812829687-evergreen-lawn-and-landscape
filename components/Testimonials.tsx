'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Jenna P.',
    text: 'Marcus and his crew transformed our backyard into something out of a magazine.',
  },
  {
    name: 'David L.',
    text: 'Reliable, tidy, and the design ideas were spot on. Best landscaper we have used.',
  },
  {
    name: 'Priya S.',
    text: 'Our lawn has never looked better and they always show up when they say they will.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Happy Homeowners
          </span>
          <h2 className="font-heading text-brand-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Austin Yards Worth
            <span className="block">Talking About</span>
          </h2>
          <p className="font-body text-brand-text/65 text-lg max-w-xl mx-auto">
            Real words from real Austin homeowners who trust Evergreen with their outdoor spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="relative rounded-sm overflow-hidden h-72 lg:h-96"
        >
          <Image
            src="/images/gallery-2.jpg"
            alt="Beautiful Austin landscape maintained by Evergreen Lawn and Landscape"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/70 via-brand-primary/30 to-transparent flex items-center">
            <div className="px-10 lg:px-16 max-w-lg">
              <p className="font-heading text-white text-2xl lg:text-3xl font-semibold leading-snug mb-6">
                Ready for a yard you actually love coming home to?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary font-semibold px-7 py-3.5 rounded-sm hover:brightness-110 transition-all duration-200 text-base tracking-wide"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: { name: string; text: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="bg-white border border-brand-primary/8 rounded-sm p-8 flex flex-col"
    >
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
        ))}
      </div>
      <blockquote className="font-body text-brand-text/80 text-base leading-relaxed flex-1 mb-6 italic">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
          <span className="font-heading text-brand-primary font-semibold text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
        <span className="font-body text-brand-primary font-semibold text-sm">
          {review.name}
        </span>
      </div>
    </motion.div>
  );
}
