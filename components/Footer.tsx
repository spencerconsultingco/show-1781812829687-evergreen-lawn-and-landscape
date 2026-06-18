import Image from 'next/image';
import { Phone, Mail, Clock, TreePine } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Lawn Care and Mowing',
    'Landscape Design and Installation',
    'Hardscaping and Patios',
    'Irrigation and Sprinkler Systems',
    'Tree and Shrub Care',
    'Seasonal Cleanups',
  ];

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Evergreen', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Evergreen Lawn and Landscape logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="block font-heading text-white text-base font-semibold leading-tight">
                  Evergreen Lawn
                </span>
                <span className="block font-heading text-brand-accent text-xs tracking-widest uppercase">
                  &amp; Landscape
                </span>
              </div>
            </a>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-5">
              Full-service lawn care and landscape design for Austin homeowners who take pride in their outdoor spaces.
            </p>
            <div className="flex items-center gap-2 text-brand-accent">
              <TreePine size={16} />
              <span className="font-body text-xs font-medium tracking-wide">Austin, TX and the Hill Country</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-white/60 text-sm hover:text-brand-accent transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/60 text-sm hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5125550147"
                  className="flex items-start gap-3 group"
                >
                  <Phone size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="font-body text-white/60 text-sm group-hover:text-brand-accent transition-colors duration-200">
                    (512) 555-0147
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:todd@thesitesmith.co"
                  className="flex items-start gap-3 group"
                >
                  <Mail size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="font-body text-white/60 text-sm group-hover:text-brand-accent transition-colors duration-200">
                    Send Us a Message
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/60 text-sm">
                  Mon to Sat, 8am to 6pm
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center mt-7 bg-brand-accent text-brand-primary font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition-all duration-200 text-sm tracking-wide w-full"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-xs">
            &copy; {currentYear} Evergreen Lawn &amp; Landscape. All rights reserved.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/40 text-xs hover:text-brand-accent transition-colors duration-200"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
