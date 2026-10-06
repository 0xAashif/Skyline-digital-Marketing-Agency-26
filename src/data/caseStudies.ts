import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'aarav-organics',
    slug: 'aarav-organics',
    client: 'Aarav Organics', // PLACEHOLDER
    category: 'Performance',
    industry: 'D2C Ayurvedic Wellness', // PLACEHOLDER
    headlineResult: '3.4x ROAS in 90 days', // PLACEHOLDER
    summary:
      'How an artisanal organic health brand restructured their Meta ad account, introduced creative angle testing, and scaled profitably during peak festive demand.',
    challenge:
      'Aarav Organics was relying on single-image product ads that hit a plateau at ₹3.5L monthly ad spend. Customer acquisition costs were climbing month-over-month, and blended ROAS had dipped below 1.6x, wiping out gross margins.',
    approach: [
      'Implemented full CAPI tracking to restore high-confidence purchase attribution.',
      'Developed 12 video creative angles emphasizing clean ingredient sourcing and founder transparency.',
      'Segmented cold prospect bidding from high-intent cart abandonment retargeting loops.',
      'Re-engineered product detail page copy to address customer hesitation on shipping timelines and return policies.',
    ],
    results: [
      { value: '3.4x', label: 'Blended ROAS sustained over 90 consecutive days' }, // PLACEHOLDER
      { value: '-46%', label: 'Reduction in customer acquisition cost (CAC)' }, // PLACEHOLDER
      { value: '₹1.8Cr', label: 'Net incremental revenue generated in Q4' }, // PLACEHOLDER
    ],
    duration: '3 Months',
  },
  {
    id: 'nimbus-dental',
    slug: 'nimbus-dental',
    client: 'Nimbus Dental', // PLACEHOLDER
    category: 'SEO',
    industry: 'Multi-Location Healthcare', // PLACEHOLDER
    headlineResult: '+212% organic leads', // PLACEHOLDER
    summary:
      'Rebuilding topical authority and hyper-local search intent for a multi-clinic dental network across Bengaluru and Hyderabad.',
    challenge:
      'Despite operating 8 modern clinics, Nimbus Dental was invisible for high-intent queries like "invisalign provider" and "emergency dental care". 80% of clinic bookings relied on expensive third-party aggregator listings charging steep commissions.',
    approach: [
      'Executed full site technical re-architecture, eliminating 1,200 crawl errors and broken canonical chains.',
      'Engineered localized clinic hub pages with granular schema markup, practitioner bios, and patient reviews.',
      'Produced 45 long-form clinical guides addressing dental anxiety, pricing clarity, and recovery protocols.',
      'Earned editorial mentions on leading regional wellness journals and city healthcare directories.',
    ],
    results: [
      { value: '+212%', label: 'Increase in organic consultation appointment bookings' }, // PLACEHOLDER
      { value: '#1–#3', label: 'Google rankings across 84 core treatment keywords' }, // PLACEHOLDER
      { value: '62%', label: 'Drop in dependency on third-party aggregator lead portals' }, // PLACEHOLDER
    ],
    duration: '6 Months',
  },
  {
    id: 'kora-coffee',
    slug: 'kora-coffee',
    client: 'Kora Coffee', // PLACEHOLDER
    category: 'Social',
    industry: 'Specialty Retail & Roastery', // PLACEHOLDER
    headlineResult: '2K to 48K followers in 6 months', // PLACEHOLDER
    summary:
      'Transforming a boutique roaster into a beloved cultural community through honest estate storytelling, barista education, and zero artificial gimmicks.',
    challenge:
      'Kora Coffee roasted exceptional single-estate beans from Chikmagalur, but their social presence looked identical to every generic café stock photo feed. Engagement was under 0.8% and online bean subscriptions were negligible.',
    approach: [
      'Pivoted to a documentary-style video content pillar capturing origin estate harvesting and brewing science.',
      'Equipped the head roaster to host weekly live tasting sessions answering viewer grind-size questions.',
      'Partnered organically with micro-roasting enthusiasts and home brewers via complimentary bean tastings.',
      'Designed a collectible packaging unboxing experience that encouraged natural customer social sharing.',
    ],
    results: [
      { value: '2K → 48K', label: 'Organic followers gained without artificial contests' }, // PLACEHOLDER
      { value: '5.2%', label: 'Average organic engagement rate across all video releases' }, // PLACEHOLDER
      { value: '380%', label: 'Direct e-commerce bean subscription subscriber growth' }, // PLACEHOLDER
    ],
    duration: '6 Months',
  },
  {
    id: 'veda-botanics',
    slug: 'veda-botanics',
    client: 'Veda Botanics', // PLACEHOLDER
    category: 'Branding',
    industry: 'Clean Skincare & Apothecary', // PLACEHOLDER
    headlineResult: '+180% average order value', // PLACEHOLDER
    summary:
      'Complete brand positioning and visual identity overhaul that elevated an indie skincare laboratory into a premium clean luxury staple.',
    challenge:
      'Veda Botanics formulated clinical-grade botanical serums, but their DIY packaging and generic typography caused consumers to view them as an inexpensive commodity, preventing them from charging viable luxury price points.',
    approach: [
      'Developed an editorial brand identity combining timeless serif typography with architectural minimalism.',
      'Formulated tactile amber-glass packaging specifications, minimalist box typography, and embossed finishes.',
      'Crafted an evocative brand manifesto focusing on patient science rather than superficial beauty trends.',
      'Supplied comprehensive brand guidelines, art direction parameters, and digital marketing design tokens.',
    ],
    results: [
      { value: '+180%', label: 'Average order value uplift following packaging relaunch' }, // PLACEHOLDER
      { value: '4.8/5', label: 'Perceived luxury rating in post-purchase customer feedback' }, // PLACEHOLDER
      { value: '3', label: 'Premium departmental retail placement partnerships secured' }, // PLACEHOLDER
    ],
    duration: '4 Months',
  },
  {
    id: 'astra-logistics',
    slug: 'astra-logistics',
    client: 'Astra Logistics', // PLACEHOLDER
    category: 'Web',
    industry: 'B2B Enterprise Freight', // PLACEHOLDER
    headlineResult: '4.2x organic demo requests', // PLACEHOLDER
    summary:
      'A sub-second enterprise web experience engineered to explain complex multi-modal supply chain software and convert freight directors.',
    challenge:
      'Astra Logistics operated on a dated legacy WordPress site taking 6.4 seconds to load. Enterprise logistics directors abandoned the quote request form due to confusing layout, lack of trust indicators, and poor mobile design.',
    approach: [
      'Designed an ultra-clean, content-first user experience showcasing real tracking software interfaces.',
      'Engineered an interactive route rate calculator providing instant preliminary freight estimates.',
      'Reduced initial page payload from 8.2MB to 310KB, achieving a 0.6s First Contentful Paint.',
      'Introduced prominent customer security badges, SOC2 compliance badges, and freight case study validation.',
    ],
    results: [
      { value: '4.2x', label: 'Increase in qualified enterprise RFQ submissions' }, // PLACEHOLDER
      { value: '0.6s', label: 'Load time achieved across low-bandwidth warehouse devices' }, // PLACEHOLDER
      { value: '68%', label: 'Reduction in quote form abandonment rate' }, // PLACEHOLDER
    ],
    duration: '8 Weeks',
  },
  {
    id: 'finedge-wealth',
    slug: 'finedge-wealth',
    client: 'FinEdge Wealth', // PLACEHOLDER
    category: 'Performance',
    industry: 'Private Wealth Advisory', // PLACEHOLDER
    headlineResult: '-58% CAC on accredited clients', // PLACEHOLDER
    summary:
      'Targeting high-net-worth portfolio management inquiries using sophisticated Google Search intent sculpting and bespoke consultation funnels.',
    challenge:
      'Competing against traditional wealth management institutions for affluent family office searches was burning ₹8,000+ per click on broad match keywords, yielding mostly unqualified inquiries looking for retail stock tips.',
    approach: [
      'Restructured Google Search campaigns around negative-match intent filtering and portfolio minimum queries.',
      'Built a private, high-discretion questionnaire landing page qualifying liquid net worth prior to call scheduling.',
      'Authored whitepaper teardowns of alternative debt yield strategies as primary top-funnel lead magnets.',
      'Conducted weekly CRM lead feedback loops to feed offline conversion value signals back into Google Smart Bidding.',
    ],
    results: [
      { value: '-58%', label: 'Lower cost per qualified portfolio consultation meeting' }, // PLACEHOLDER
      { value: '₹85Cr', label: 'Assets under management initiated through new digital funnel' }, // PLACEHOLDER
      { value: '71%', label: 'Lead-to-meeting completion rate from pre-screening questionnaire' }, // PLACEHOLDER
    ],
    duration: '4 Months',
  },
];
