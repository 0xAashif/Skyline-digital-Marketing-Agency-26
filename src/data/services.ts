import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'seo',
    slug: 'seo',
    title: 'Search Engine Optimization',
    benefit: 'Rank where your customers search',
    iconName: 'Search',
    summary:
      'Turn Google into your most predictable, compounding customer acquisition channel through technical hygiene, authority building, and commercial intent targeting.',
    description:
      'We do not chase vanity search volume. We architect search capture for transactional queries where your future buyers evaluate solutions. From technical architecture fixes to programmatic content hubs and digital PR authority.',
    deliverables: [
      'Comprehensive technical SEO & Core Web Vitals audit',
      'High-intent commercial keyword mapping & clustering',
      'On-page copy optimization & schema markup implementation',
      'Editorial link acquisition & digital PR placement',
      'Monthly organic revenue & ranking attribution reports',
    ],
    idealFor:
      'High-ticket B2B services, regional healthcare clinics, and established e-commerce brands seeking zero-CAC compounding organic traffic.',
    outcomeMetric: {
      value: '+212%', // PLACEHOLDER
      label: 'Average increase in qualified organic inquiries within 6 months',
    },
  },
  {
    id: 'performance-marketing',
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    benefit: 'Ads that pay for themselves',
    iconName: 'TrendingUp',
    summary:
      'Full-funnel paid media across Meta and Google that delivers positive return on ad spend with rigorous first-party attribution and creative iteration.',
    description:
      'Scaling paid media requires uniting conversion-rate architecture with relentless creative testing. We build structured ad accounts, run iterative UGC and static testing cadences, and guard your blended CAC.',
    deliverables: [
      'Meta Ads (Facebook & Instagram) structure & audience segmentation',
      'Google Search, Performance Max & YouTube campaign architectures',
      'Conversion API (CAPI) and server-side tracking setup',
      'Weekly creative fatigue analysis and fresh asset production',
      'Blended ROAS and MER (Marketing Efficiency Ratio) dashboards',
    ],
    idealFor:
      'D2C brands and funded startups with validated product-market fit ready to invest ₹1L+ per month into predictable ad scale.',
    outcomeMetric: {
      value: '3.4x', // PLACEHOLDER
      label: 'Average documented blended ROAS across 90-day scale campaigns',
    },
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing',
    benefit: 'Consistent presence, real community',
    iconName: 'Share2',
    summary:
      'Organic social content that positions your brand as an authority, builds genuine buyer resonance, and turns followers into repeat purchasers.',
    description:
      'Generic corporate posts do not build brand equity. We design social narratives, founder-led distribution systems, and engaging short-form video concepts that establish taste, credibility, and cultural relevance.',
    deliverables: [
      'Editorial brand voice guidelines & content pillars',
      'Monthly multi-format content calendar (Reels, carousels, text hooks)',
      'Community engagement & inbound comment nurturing',
      'Strategic micro-creator collaborations & gifting workflows',
      'Quarterly audience sentiment & growth retention reports',
    ],
    idealFor:
      'Lifestyle, food, apparel, and hospitality businesses whose customers make purchasing decisions driven by visual taste and community.',
    outcomeMetric: {
      value: '24x', // PLACEHOLDER
      label: 'Median social audience growth without artificial giveaways',
    },
  },
  {
    id: 'content-copywriting',
    slug: 'content-copywriting',
    title: 'Content & Copywriting',
    benefit: 'Words that earn attention and trust',
    iconName: 'FileText',
    summary:
      'Persuasive, editorial-grade copy that articulates complex value propositions with clarity, conviction, and high conversion velocity.',
    description:
      'Clear writing is clear thinking. We write website copy, email sequences, whitepapers, and ad hooks that cut through category clutter, address buyer objections head-on, and lead prospects naturally toward action.',
    deliverables: [
      'High-converting landing page & website messaging frameworks',
      'Automated email lifecycle flows (Welcome, Abandoned Cart, Win-back)',
      'Thought-leadership articles & customer case studies',
      'Direct response ad scripts and multi-angle ad copy hooks',
      'Brand tone-of-voice playbook for internal marketing teams',
    ],
    idealFor:
      'Founders who struggle to explain their differentiation simply, or businesses suffering from high traffic but low on-page conversion.',
    outcomeMetric: {
      value: '+48%', // PLACEHOLDER
      label: 'Lift in conversion rate on rewritten core landing pages',
    },
  },
  {
    id: 'branding-creative',
    slug: 'branding-creative',
    title: 'Branding & Creative',
    benefit: 'An identity people remember',
    iconName: 'Sparkles',
    summary:
      'Distinctive visual identities, design systems, and art direction that command respect, justify premium pricing, and stand apart in competitive markets.',
    description:
      'Branding is not just a logo; it is the total sensory impression you leave behind. We craft cohesive typography, palettes, layout principles, and packaging that make your brand feel established from day one.',
    deliverables: [
      'Comprehensive brand identity system & visual guidelines',
      'Typography pairing, bespoke colour system, and iconography rules',
      'Digital ad templates & social media design kits',
      'Packaging, collateral & pitch deck presentation templates',
      'Figma design tokens & brand asset repository',
    ],
    idealFor:
      'Startups launching new product lines, or legacy businesses modernizing their presence to appeal to contemporary consumers.',
    outcomeMetric: {
      value: '2.1x', // PLACEHOLDER
      label: 'Higher perceived brand value rating in customer survey benchmarks',
    },
  },
  {
    id: 'web-design-dev',
    slug: 'web-design-dev',
    title: 'Web Design & Development',
    benefit: 'Fast websites that convert',
    iconName: 'Code2',
    summary:
      'Bespoke, high-performance websites engineered for sub-second page loads, effortless mobile browsing, and maximum inquiry conversion.',
    description:
      'Your website is the single common denominator of all marketing spend. We build sleek, accessible, modern web experiences that look bespoke, load instantly, and turn casual visitors into booked discovery calls.',
    deliverables: [
      'User journey mapping & high-fidelity interactive Figma prototypes',
      'Custom modern web development with zero bloatware',
      'Mobile-first responsive architecture and micro-interactions',
      'Analytics, event tracking, and CRM integration',
      'Technical Core Web Vitals score exceeding 95 on mobile',
    ],
    idealFor:
      'Ambitious businesses that have outgrown rigid templates and need a digital flagship that reflects their true calibre.',
    outcomeMetric: {
      value: '< 0.8s', // PLACEHOLDER
      label: 'Average First Contentful Paint load time on 4G connections',
    },
  },
];
