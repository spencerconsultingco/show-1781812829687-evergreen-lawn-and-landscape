'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get Started
          </span>
          <h2 className="font-heading text-brand-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Request Your Free
            <span className="block">Landscape Estimate</span>
          </h2>
          <p className="font-body text-brand-text/65 text-lg max-w-xl mx-auto">
            Tell us about your yard and what you are looking for. We will follow up within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-brand-primary text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:5125550147"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 bg-brand-primary rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent transition-colors duration-200">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-brand-text/55 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                    <p className="font-body text-brand-primary font-semibold text-base group-hover:text-brand-accent transition-colors duration-200">
                      (512) 555-0147
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:todd@thesitesmith.co"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 bg-brand-primary rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent transition-colors duration-200">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-brand-text/55 text-xs uppercase tracking-wide mb-0.5">Email</p>
                    <p className="font-body text-brand-primary font-semibold text-base group-hover:text-brand-accent transition-colors duration-200">
                      Send Us a Message
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-brand-primary rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-brand-text/55 text-xs uppercase tracking-wide mb-0.5">Hours</p>
                    <p className="font-body text-brand-primary font-semibold text-base">
                      Mon to Sat, 8am to 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-primary rounded-sm p-6">
              <h4 className="font-heading text-white text-base font-semibold mb-2">
                Service Area
              </h4>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                We serve Austin and the surrounding Hill Country. Not sure if we cover your neighborhood? Give us a call and we will let you know right away.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white border border-brand-primary/8 rounded-sm p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <CheckCircle size={56} className="text-brand-accent mb-5" />
                <h3 className="font-heading text-brand-primary text-2xl font-bold mb-3">
                  Message Received
                </h3>
                <p className="font-body text-brand-text/65 text-base max-w-sm">
                  Thanks for reaching out. We will be in touch within one business day to talk through your project.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-brand-primary/8 rounded-sm p-8 lg:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-brand-text/70 text-xs font-medium uppercase tracking-wide mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-brand-primary/15 rounded-sm px-4 py-3 font-body text-brand-text text-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-brand-background"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-brand-text/70 text-xs font-medium uppercase tracking-wide mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(512) 000-0000"
                      className="w-full border border-brand-primary/15 rounded-sm px-4 py-3 font-body text-brand-text text-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-brand-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-brand-text/70 text-xs font-medium uppercase tracking-wide mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-brand-primary/15 rounded-sm px-4 py-3 font-body text-brand-text text-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-brand-background"
                  />
                </div>

                <div>
                  <label className="block font-body text-brand-text/70 text-xs font-medium uppercase tracking-wide mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-brand-primary/15 rounded-sm px-4 py-3 font-body text-brand-text text-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-brand-background"
                  >
                    <option value="">Select a service...</option>
                    <option>Lawn Care and Mowing</option>
                    <option>Landscape Design and Installation</option>
                    <option>Hardscaping and Patios</option>
                    <option>Irrigation and Sprinkler Systems</option>
                    <option>Tree and Shrub Care</option>
                    <option>Seasonal Cleanups</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-brand-text/70 text-xs font-medium uppercase tracking-wide mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your yard, what you are hoping to achieve, and any questions you have..."
                    className="w-full border border-brand-primary/15 rounded-sm px-4 py-3 font-body text-brand-text text-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-brand-background resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-semibold px-8 py-4 rounded-sm hover:brightness-110 transition-all duration-200 text-base tracking-wide"
                >
                  <Send size={18} />
                  Contact Us
                </button>

                <p className="font-body text-brand-text/45 text-xs text-center">
                  We respond within one business day. No spam, no pressure.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
