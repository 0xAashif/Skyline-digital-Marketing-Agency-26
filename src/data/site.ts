import { NavItem, StatItem } from '../types';

export const siteConfig = {
  name: 'Skyline',
  fullName: 'Skyline Digital Marketing Agency',
  tagline: 'Rise above the noise.',
  description:
    'Growth-focused digital marketing agency for ambitious businesses and D2C brands — SEO, performance ads, social and brand, run by one senior team.',
  founders: [
    {
      name: 'Aashif Khan',
      role: 'Co-Founder & Head of Growth',
      initials: 'AK',
      bio: 'Growth strategist with 9+ years scaling consumer and tech brands across India. Specializes in performance marketing infrastructure and unit-economic positive customer acquisition.', // PLACEHOLDER
    },
    {
      name: 'Sachin Sahu',
      role: 'Co-Founder & Creative Director',
      initials: 'SS',
      bio: 'Brand architect and digital experience designer. Former agency lead focused on distinct brand positioning, high-converting digital interfaces, and high-retention content systems.', // PLACEHOLDER
    },
  ],
  contact: {
    email: 'hello@skylineagency.in', // PLACEHOLDER
    phone: '+91 98201 45890', // PLACEHOLDER
    address: 'Indiranagar, Bengaluru & Connaught Place, New Delhi', // PLACEHOLDER
    hours: 'Monday – Friday, 10:00 AM – 7:00 PM IST',
  },
  social: [
    { label: 'LinkedIn', url: '#' }, // PLACEHOLDER
    { label: 'Twitter / X', url: '#' }, // PLACEHOLDER
    { label: 'Instagram', url: '#' }, // PLACEHOLDER
  ],
};

export const navItems: NavItem[] = [
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const heroStats: StatItem[] = [
  { value: '3.2x', label: 'Average client ROAS uplift' }, // PLACEHOLDER
  { value: '₹42Cr+', label: 'Client revenue generated' }, // PLACEHOLDER
  { value: '94%', label: '12-month client retention' }, // PLACEHOLDER
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Deep dive into unit economics',
    description: 'We audit your customer acquisition funnel, search footprint, and ad accounts to locate high-leverage bottlenecks before spending a single rupee.',
  },
  {
    step: '02',
    title: 'Strategize',
    tagline: 'A bespoke 90-day growth roadmap',
    description: 'We draft clear channel hypotheses, target CPA/ROAS benchmarks, and creative guidelines matched strictly to your business model.',
  },
  {
    step: '03',
    title: 'Execute',
    tagline: 'Senior execution without handoffs',
    description: 'Our core senior team builds campaigns, writes copy, crafts creative assets, and optimizes landing pages with weekly sprints.',
  },
  {
    step: '04',
    title: 'Optimize',
    tagline: 'Relentless attribution & scale',
    description: 'Real-time telemetry, transparent weekly reporting dashboards, and continuous iterative testing to compound your return on marketing spend.',
  },
];

export const trustedBrands = [
  { name: 'Aarav Organics', tag: 'D2C Wellness' }, // PLACEHOLDER
  { name: 'Nimbus Dental', tag: 'Healthcare' }, // PLACEHOLDER
  { name: 'Kora Coffee', tag: 'Specialty Retail' }, // PLACEHOLDER
  { name: 'Veda Botanics', tag: 'Clean Skincare' }, // PLACEHOLDER
  { name: 'Astra Logistics', tag: 'B2B Freight' }, // PLACEHOLDER
];
