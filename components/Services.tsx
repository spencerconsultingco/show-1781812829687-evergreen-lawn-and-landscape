'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, TreePine, Hammer, Droplets, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Care and Mowing',
    description:
      'Weekly and bi-weekly mowing, edging, and turf maintenance programs that keep your lawn consistently thick, level, and green all season long.',
  },
  {
    icon: TreePine,
    title: 'Landscape Design and Installation',
    description:
      'Custom planting plans built around your home, your lifestyle, and the Austin climate. We handle every detail from concept to the final mulch layer.',
  },
  {
    icon: Hammer,
    title: 'Hardscaping and Patios',
    description:
      'Stone patios, walkways, retaining walls, and outdoor living spaces that add real value to your property and hold up in the Texas heat.',
  },
  {
    icon: Droplets,
    title: 'Irrigation and Sprinkler Systems',
    description:
      'Smart irrigation design, installation, and repair that keeps your lawn healthy without wasting water or sending your utility bill through the roof.',
  },
  {
    icon: TreePine,
    title: 'Tree and Shrub Care',
    description:
      'Professional pruning, shaping, fertilization, and health assessments that protect your largest landscape investments for decades.',
  },
  {
    icon: Sparkles,
    title: 'Seasonal Cleanups',
    description:
      'Spring and fall cleanups that clear debris, refresh beds, and set your yard up for the season ahead. One call, spotless results.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What We Do
          </span>
          <h2 className="font-heading text-brand-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Complete Outdoor Services,
            <span className="block">One Reliable Crew</span>
          </h2>
          <p className="font-body text-brand-text/70 text-lg max-w-2xl mx-auto leading-relaxed">
            From the first mow of spring to the last cleanup of fall, Evergreen handles every part of your outdoor space so you never have to manage multiple contractors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={service.title}
                icon={<Icon size={28} className="text-brand-accent" />}
                title={service.title}
                description={service.description}
                index={index}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary font-semibold px-8 py-4 rounded-sm hover:brightness-110 transition-all duration-200 text-base tracking-wide group"
          >
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-white border border-brand-primary/8 rounded-sm p-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-brand-primary/5 rounded-sm flex items-center justify-center mb-5 group-hover:bg-brand-accent/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-heading text-brand-primary text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="font-body text-brand-text/65 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
