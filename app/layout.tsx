import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Evergreen Lawn & Landscape | Austin, TX',
  description:
    'Full-service landscaping and lawn care in Austin and the surrounding Hill Country. Design, installation, hardscaping, irrigation, and seasonal maintenance from a crew that shows up on time, every time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="bg-brand-background font-body text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
