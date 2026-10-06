import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { submitContact } from '../lib/api';
import { ContactFormData, BudgetRange } from '../types';
import { siteConfig } from '../data/site';
import { Button } from '../components/ui/Button';

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  serviceInterest?: string;
  budget?: string;
  message?: string;
}

const BUDGET_OPTIONS: BudgetRange[] = [
  'Under ₹25k/mo',
  '₹25k–75k/mo',
  '₹75k–2L/mo',
  '₹2L+/mo',
  'Not sure yet',
];

const SERVICE_OPTIONS = [
  'Search Engine Optimization (SEO)',
  'Performance Marketing (Meta & Google Ads)',
  'Social Media Marketing & Community',
  'Content Strategy & Direct Copywriting',
  'Branding, Visual Identity & Creative',
  'High-Speed Web Design & Development',
  'Full Comprehensive Growth Partner Retainer',
];

export const ContactPage: React.FC = () => {
  useDocumentMeta({
    title: 'Book a Free Strategy Call — Skyline Agency',
    description:
      'Schedule a direct 30-minute growth review with founders Aashif Khan and Sachin Sahu. Audit your funnel and uncover key growth leverage points.',
  });

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    budget: '₹25k–75k/mo',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

  const validateField = (field: keyof ContactFormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Work email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return 'Please provide a valid email address.';
        return undefined;
      case 'company':
        if (!value.trim()) return 'Company or brand name is required.';
        return undefined;
      case 'serviceInterest':
        if (!value) return 'Please choose a primary service focus.';
        return undefined;
      case 'budget':
        if (!value) return 'Please select your target monthly budget.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Please share a brief note about your goals.';
        if (value.trim().length < 10)
          return 'Message should be at least 10 characters.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field] || '');
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all required fields
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      company: validateField('company', formData.company),
      serviceInterest: validateField('serviceInterest', formData.serviceInterest),
      budget: validateField('budget', formData.budget),
      message: validateField('message', formData.message),
    };

    setTouched({
      name: true,
      email: true,
      company: true,
      serviceInterest: true,
      budget: true,
      message: true,
    });
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    setIsSubmitting(true);
    try {
      const res = await submitContact(formData);
      setSubmittedLeadId(res.id);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : 'Unable to submit right now.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-32 md:pt-40 pb-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Intro */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E7E8E4] text-[#0B0F14]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
            Direct Growth Inquiry
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-[#0B0F14] leading-[1.08]">
            Let’s review your numbers, <br />
            <span className="italic font-normal">no sales fluff.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5B6470] leading-relaxed">
            Fill out the details below. We examine every submission personally and respond within 24 business hours with an honest assessment.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Form or Success State */}
          <div className="lg:col-span-7">
            {submittedLeadId ? (
              /* Success State */
              <div
                role="status"
                aria-live="polite"
                className="bg-white border border-[#E7E8E4] rounded-2xl p-8 sm:p-12 space-y-6 shadow-xs text-center sm:text-left"
              >
                <div className="w-12 h-12 rounded-full bg-[#EAF0FF] text-[#2B6BFF] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#0B0F14] tracking-tight">
                    Inquiry Received. Thank you, {formData.name.split(' ')[0]}.
                  </h2>
                  <p className="text-sm sm:text-base text-[#5B6470] leading-relaxed">
                    Aashif and Sachin have received your brief for{' '}
                    <strong className="text-[#0B0F14] font-semibold">{formData.company}</strong>. We are pulling preliminary search and ad benchmarks for your industry.
                  </p>
                </div>

                <div className="p-4 bg-[#FAFAF7] border border-[#E7E8E4] rounded-xl space-y-1 text-xs text-[#5B6470]">
                  <p>Reference ID: <span className="font-mono text-[#0B0F14] font-medium">{submittedLeadId}</span></p>
                  <p>Confirmation email scheduled to: <span className="text-[#0B0F14]">{formData.email}</span></p>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setSubmittedLeadId(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        serviceInterest: '',
                        budget: '₹25k–75k/mo',
                        message: '',
                      });
                      setTouched({});
                      setErrors({});
                    }}
                    variant="secondary"
                    size="sm"
                  >
                    Send another inquiry
                  </Button>
                </div>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-[#E7E8E4] rounded-2xl p-8 sm:p-10 space-y-6 shadow-xs"
              >
                {submitError && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#0B0F14]"
                    >
                      Your Full Name <span className="text-[#2B6BFF]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      placeholder="e.g. Vikram Malhotra"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0B0F14] bg-[#FAFAF7] placeholder:text-[#5B6470]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B6BFF] ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-[#E7E8E4]'
                      }`}
                    />
                    {errors.name && (
                      <p id="error-name" className="text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#0B0F14]"
                    >
                      Work Email <span className="text-[#2B6BFF]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      placeholder="vikram@brand.in"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0B0F14] bg-[#FAFAF7] placeholder:text-[#5B6470]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B6BFF] ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-[#E7E8E4]'
                      }`}
                    />
                    {errors.email && (
                      <p id="error-email" className="text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-company"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#0B0F14]"
                    >
                      Company / Brand <span className="text-[#2B6BFF]">*</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      onBlur={() => handleBlur('company')}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? 'error-company' : undefined}
                      placeholder="e.g. Acme Health"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0B0F14] bg-[#FAFAF7] placeholder:text-[#5B6470]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B6BFF] ${
                        errors.company
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-[#E7E8E4]'
                      }`}
                    />
                    {errors.company && (
                      <p id="error-company" className="text-xs text-red-600">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#0B0F14]"
                    >
                      Phone Number <span className="text-[#5B6470] font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98200 00000"
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E8E4] text-sm text-[#0B0F14] bg-[#FAFAF7] placeholder:text-[#5B6470]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B6BFF]"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-service"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#0B0F14]"
                  >
                    Primary Service Focus <span className="text-[#2B6BFF]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceInterest}
                    onChange={(e) => handleChange('serviceInterest', e.target.value)}
                    onBlur={() => handleBlur('serviceInterest')}
                    aria-invalid={!!errors.serviceInterest}
                    aria-describedby={errors.serviceInterest ? 'error-service' : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0B0F14] bg-[#FAFAF7] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B6BFF] cursor-pointer ${
                      errors.serviceInterest
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-[#E7E8E4]'
                    }`}
                  >
                    <option value="">Select a service category...</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceInterest && (
                    <p id="error-service" className="text-xs text-red-600">
                      {errors.serviceInterest}
                    </p>
                  )}
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-budget"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#0B0F14]"
                  >
                    Monthly Marketing Budget <span className="text-[#2B6BFF]">*</span>
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => handleChange('budget', e.target.value as BudgetRange)}
                    onBlur={() => handleBlur('budget')}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E8E4] text-sm text-[#0B0F14] bg-[#FAFAF7] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B6BFF] cursor-pointer"
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#0B0F14]"
                  >
                    Project Details & Goals <span className="text-[#2B6BFF]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    placeholder="Tell us about your current acquisition channels, average monthly revenue, and what needs solving..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0B0F14] bg-[#FAFAF7] placeholder:text-[#5B6470]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B6BFF] ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-[#E7E8E4]'
                    }`}
                  />
                  {errors.message && (
                    <p id="error-message" className="text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    withArrow
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    Submit strategy request
                  </Button>
                </div>

                <p className="text-xs text-[#5B6470] pt-2">
                  Privacy guaranteed. We never spam or sell founder contact data.
                </p>
              </form>
            )}
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-white border border-[#E7E8E4] rounded-2xl p-8 space-y-6">
              <h3 className="text-lg font-serif text-[#0B0F14] tracking-tight">
                Agency Touchpoints
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-[#0B0F14]">
                  <Mail className="w-4 h-4 text-[#2B6BFF] mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <span className="block text-xs uppercase font-semibold text-[#5B6470]">Direct Email</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#2B6BFF] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#0B0F14]">
                  <Phone className="w-4 h-4 text-[#2B6BFF] mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <span className="block text-xs uppercase font-semibold text-[#5B6470]">Phone Desk</span>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#2B6BFF] transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#0B0F14]">
                  <Clock className="w-4 h-4 text-[#2B6BFF] mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <span className="block text-xs uppercase font-semibold text-[#5B6470]">Response Cadence</span>
                    <span>{siteConfig.contact.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#0B0F14]">
                  <MapPin className="w-4 h-4 text-[#2B6BFF] mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <span className="block text-xs uppercase font-semibold text-[#5B6470]">Locations</span>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next in 3 Steps */}
            <div className="bg-[#FAFAF7] border border-[#E7E8E4] rounded-2xl p-8 space-y-6">
              <h3 className="text-lg font-serif text-[#0B0F14] tracking-tight">
                What happens next
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#0B0F14] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B0F14]">
                      Pre-call Funnel Audit
                    </h4>
                    <p className="text-xs text-[#5B6470] mt-0.5 leading-relaxed">
                      We check your organic search footprint and meta ad library before we ever hop on a call.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#0B0F14] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B0F14]">
                      30-Min Strategy Call
                    </h4>
                    <p className="text-xs text-[#5B6470] mt-0.5 leading-relaxed">
                      Direct discussion with Aashif or Sachin. Zero sales pressure, just actionable growth points.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#0B0F14] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B0F14]">
                      90-Day Sprint Proposal
                    </h4>
                    <p className="text-xs text-[#5B6470] mt-0.5 leading-relaxed">
                      If mutual fit is established, we deliver a concrete roadmap with targets, timeline, and exact scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
