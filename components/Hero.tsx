'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[680px] max-h-[1000px] overflow-hidden flex items-center"
      id="hero"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/hero.jpg)' }}
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-block text-brand-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Austin, TX and the Hill Country
          </span>
          <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Yards the Whole
            <span className="block text-brand-accent">Street Notices.</span>
          </h1>
          <p className="font-body text-white/85 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Full-service lawn care and landscape design for Austin homeowners who want a polished, low-maintenance yard they are proud to come home to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-semibold px-8 py-4 rounded-sm hover:brightness-110 transition-all duration-200 text-base tracking-wide group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="tel:5125550147"
              className="flex items-center justify-center gap-2 border border-white/50 text-white font-medium px-8 py-4 rounded-sm hover:border-brand-accent hover:text-brand-accent transition-all duration-200 text-base"
            >
              <Phone size={18} />
              (512) 555-0147
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-white/40 mx-auto"
        />
      </div>
    </section>
  );
}
