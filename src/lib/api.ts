import {
  ContactFormData,
  StoredLead,
  ServiceItem,
  CaseStudy,
  Testimonial,
  FAQItem,
} from '../types';
import { servicesData } from '../data/services';
import { caseStudiesData } from '../data/caseStudies';
import { testimonialsData } from '../data/testimonials';
import { faqsData } from '../data/faqs';

const STORAGE_KEY = 'skyline_leads';
const memoryLeads: StoredLead[] = [];

const simulateDelay = (min = 300, max = 800): Promise<void> => {
  const ms = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function getServices(): Promise<ServiceItem[]> {
  await simulateDelay(300, 500);
  return [...servicesData];
}

export async function getCaseStudies(category?: string): Promise<CaseStudy[]> {
  await simulateDelay(350, 600);
  if (!category || category === 'All') {
    return [...caseStudiesData];
  }
  return caseStudiesData.filter(
    (cs) => cs.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getCaseStudy(slug: string): Promise<CaseStudy> {
  await simulateDelay(300, 500);
  const found = caseStudiesData.find((cs) => cs.slug === slug);
  if (!found) {
    throw new Error(`Case study with slug "${slug}" not found.`);
  }
  return { ...found };
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await simulateDelay(300, 500);
  return [...testimonialsData];
}

export async function getFaqs(): Promise<FAQItem[]> {
  await simulateDelay(300, 500);
  return [...faqsData];
}

export async function submitContact(
  payload: ContactFormData
): Promise<{ ok: boolean; id: string }> {
  await simulateDelay(450, 750);

  // Strict Validation
  if (!payload.name || payload.name.trim().length < 2) {
    throw new Error('Please enter your full name (at least 2 characters).');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    throw new Error('Please provide a valid work email address.');
  }

  if (!payload.company || payload.company.trim().length < 2) {
    throw new Error('Please specify your company or brand name.');
  }

  if (!payload.serviceInterest) {
    throw new Error('Please select a service interest.');
  }

  if (!payload.budget) {
    throw new Error('Please indicate your target monthly budget.');
  }

  if (!payload.message || payload.message.trim().length < 10) {
    throw new Error('Please share a brief note about your goals (at least 10 characters).');
  }

  const id = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const newLead: StoredLead = {
    ...payload,
    id,
    createdAt: new Date().toISOString(),
  };

  // Safe storage with in-memory fallback
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const existing: StoredLead[] = raw ? JSON.parse(raw) : [];
    existing.unshift(newLead);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    // LocalStorage unavailable (e.g. private browsing or security restrictions)
    memoryLeads.unshift(newLead);
  }

  return { ok: true, id };
}
