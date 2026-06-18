'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Timer, ShieldCheck, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: BadgeCheck,
    title: 'Detail-Obsessed Crews',
    body: 'Every team member is trained to treat your property like their own. Edges, corners, and cleanup are never an afterthought.',
  },
  {
    icon: Timer,
    title: 'On Time, Every Time',
    body: 'We show up on the day we say, at the time we say. No waiting, no wondering, no excuses.',
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction Guarantee',
    body: 'Every job is backed by our satisfaction guarantee. If something is not right, we come back and make it right. Period.',
  },
];

const checkpoints = [
  'Consistent scheduling you can count on',
  'Licensed and insured professionals',
  'Transparent, upfront pricing',
  'Serving Austin and the Hill Country',
  'Eco-conscious practices and smart irrigation',
  'Single point of contact for all services',
];

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="feature" className="bg-brand-primary py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block text-brand-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Evergreen
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              The Crew Your
              <span className="block text-brand-accent">Neighbors Will Ask About</span>
            </h2>
            <p className="font-body text-white/75 text-lg leading-relaxed mb-10">
              Evergreen Lawn and Landscape was built for Austin homeowners who are tired of crews that cut corners, reschedule without notice, or disappear after one season. We run a tight operation because your yard and your time deserve nothing less.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {checkpoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-brand-accent flex-shrink-0" />
                  <span className="font-body text-white/80 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary font-semibold px-8 py-4 rounded-sm hover:brightness-110 transition-all duration-200 text-base tracking-wide"
            >
              Contact Us
            </a>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="relative rounded-sm overflow-hidden h-64 lg:h-80"
            >
              <Image
                src="/images/gallery-1.jpg"
                alt="Evergreen Lawn and Landscape crew working on a beautiful Austin yard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.12,
                      ease: 'easeOut',
                    }}
                    className="bg-brand-secondary/30 border border-white/10 rounded-sm p-5"
                  >
                    <Icon size={24} className="text-brand-accent mb-3" />
                    <h4 className="font-heading text-white text-sm font-semibold mb-2">
                      {pillar.title}
                    </h4>
                    <p className="font-body text-white/65 text-xs leading-relaxed">
                      {pillar.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
