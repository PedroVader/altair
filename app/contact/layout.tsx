// app/contact/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Altair Austin Roofing - Free Estimates',
  description: 'Contact Altair Austin Roofing for free estimates and 24/7 emergency service. Serving Austin, Round Rock, Cedar Park, and surrounding areas.',
  keywords: 'contact Austin roofer, free roof estimate, emergency roofing Austin, roofing quote Austin TX',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}