export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  benefit: string;
  iconName: 'Search' | 'TrendingUp' | 'Share2' | 'FileText' | 'Sparkles' | 'Code2';
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  outcomeMetric: {
    value: string;
    label: string;
  };
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  category: 'SEO' | 'Performance' | 'Social' | 'Branding' | 'Web';
  industry: string;
  headlineResult: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: {
    value: string;
    label: string;
  }[];
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  metricHighlight?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type BudgetRange =
  | 'Under ₹25k/mo'
  | '₹25k–75k/mo'
  | '₹75k–2L/mo'
  | '₹2L+/mo'
  | 'Not sure yet';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  serviceInterest: string;
  budget: BudgetRange;
  message: string;
}

export interface StoredLead extends ContactFormData {
  id: string;
  createdAt: string;
}
