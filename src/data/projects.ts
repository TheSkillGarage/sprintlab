import {
  Boss,
  CoachMeAIHero,
  CoachMeAIDetail1,
  CoachMeAIDetail2,
  CoachMeAIDetail3,
  CoachMeAIDetail4,
  AfroshopHero,
  AfroshopDetail1,
  AfroshopDetail2,
  AfroshopDetail3,
  AfroshopDetail4,
  SpeakeetHero,
  SpeakeetDetail1,
  SpeakeetDetail2,
  SpeakeetDetail3,
  SpeakeetDetail4,
  CoachMeAIHeroMobile,
  CoachMeAIDetail1Mobile,
  CoachMeAIDetail2Mobile,
  CoachMeAIDetail3Mobile,
  CoachMeAIDetail4Mobile,
  AfroshopHeroMobile,
  AfroshopDetail1Mobile,
  AfroshopDetail2Mobile,
  AfroshopDetail3Mobile,
  AfroshopDetail4Mobile,
  SpeakeetHeroMobile,
  SpeakeetDetail1Mobile,
  SpeakeetDetail2Mobile,
  SpeakeetDetail3Mobile,
  SpeakeetDetail4Mobile,
} from '../asset';

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  category: string;
  year: string;
  country: string;
  scope: string;
  image: string;
  imageMobile?: string;
  gridClass: string;
  detailImages: string[];
  detailImagesMobile?: string[];
  challenge: string[];
  approach: string[];
  videoLink: string;
}

export const projects: PortfolioProject[] = [
  {
    id: '1',
    title: 'CoachMeAI',
    subtitle: 'AI-powered job search and application platform',
    quote: 'One platform, from search to interview',
    category: 'AI Platform',
    year: '2026',
    country: 'Canada',
    scope:
      'Product Strategy, Business Analysis, Brand & UX/UI Design, Full-Stack Development, AI Integration, Launch & Optimization',
    image: CoachMeAIHero,
    imageMobile: CoachMeAIHeroMobile,
    gridClass: 'lg:col-span-2',
    detailImages: [
      CoachMeAIDetail1,
      CoachMeAIDetail2,
      CoachMeAIDetail3,
      CoachMeAIDetail4,
    ],
    detailImagesMobile: [
      CoachMeAIDetail1Mobile,
      CoachMeAIDetail2Mobile,
      CoachMeAIDetail3Mobile,
      CoachMeAIDetail4Mobile,
    ],
    challenge: [
      'Job seekers lose hours on every application. They rewrite resumes and cover letters for each posting, jump between job boards, and lose track of which roles they applied to and who replied. CoachMe AI wanted one platform that takes a candidate from search to interview. SprintLab Digital was the end-to-end delivery partner and owned the whole value chain: discovery, requirements, design, engineering, launch and ongoing improvement.',
    ],
    approach: [
      'We started with discovery: we ran stakeholder workshops, mapped the job seeker’s journey and benchmarked competing resume builders and job platforms. From that, we engineered the product requirements and defined the MVP. In parallel, our design team created the CoachMe AI brand and design architecture. The resulting platform centers on a single structured candidate profile that holds each user’s experience, skills and job preferences. Every feature reads from that profile, so the resume tools, the application engine and the analytics stay consistent with one another.',
      'At its core is an AI tailoring pipeline. It parses each job description, extracts the required skills and keywords, and matches them against the candidate’s profile and any additional context they provide. It then generates a targeted resume and cover letter using only experience the user actually has. Interview AI uses the same job context to run role-specific practice sessions.',
      'The application engine automates the rest of the search. AI Apply matches open roles to the user’s preferences, prepares tailored materials and submits applications, logging each one to a central tracker. Candidates who want a human touch can send requests to trained Application Assistants. The Application Inbox closes the loop: it takes in employer replies, classifies them, links each one to the right application and notifies the user.',
      'The platform runs on a freemium monetization model and is designed to be modular and scalable. New modules are released in beta, and usage analytics and user feedback decide what moves to general release.',
    ],
    videoLink: '',
  },
  {
    id: '2',
    title: 'Afroshop',
    subtitle: 'Multi-vendor African and Caribbean grocery marketplace',
    quote: 'Authentic groceries, delivered',
    category: 'Marketplace',
    year: '2026',
    country: 'Canada',
    scope:
      'Product Strategy, Business Analysis, Brand & UX/UI Design, Full-Stack Development, Launch & Optimization',
    image: AfroshopHero,
    imageMobile: AfroshopHeroMobile,
    gridClass: 'lg:col-span-1',
    detailImages: [AfroshopDetail1, AfroshopDetail2, AfroshopDetail3, AfroshopDetail4],
    detailImagesMobile: [
      AfroshopDetail1Mobile,
      AfroshopDetail2Mobile,
      AfroshopDetail3Mobile,
      AfroshopDetail4Mobile,
    ],
    challenge: [
      'Canada’s African and Caribbean communities have long struggled to find authentic groceries. Most of these products are sold by independent stores with little or no online presence, so shoppers travel across the city to find specific items, and store owners have no easy way to sell or deliver beyond their neighborhood. Afroshop wanted one marketplace that connects shoppers, stores and delivery drivers. SprintLab Digital was the end-to-end delivery partner and owned the whole value chain: discovery, requirements, design, engineering, launch and ongoing improvement.',
    ],
    approach: [
      'A marketplace only works when buyers, sellers and drivers all show up, so discovery focused on what each group needed to join. We spent time with store owners to understand how they handled orders and stock, studied how diaspora shoppers searched for hard-to-find products, and analyzed how mainstream grocery delivery apps balance supply and demand. That work shaped a phased launch plan that brought stores on board first, so shoppers would find real choice from day one. Alongside this, we developed Afroshop’s visual identity: warm, community-focused and instantly recognizable on a crowded phone screen. Underneath it all is one shared order flow, from checkout to store fulfillment to doorstep delivery, so shoppers, stores and drivers always see the same live status.',
      'For shoppers, the platform makes discovery simple. They can browse stores by region (North, East, West and Southern Africa, and the Caribbean) or by location, search products across stores, and check out securely with real-time order tracking. For stores, a dedicated vendor portal turns any local shop into an online business. Owners customize their storefront, manage inventory, pricing and product details, process orders, and track sales performance through built-in analytics. Stores are onboarded in phases and appear as “Coming Soon” until they are ready to trade. For drivers, a self-service onboarding flow handles eligibility checks, document uploads and background screening before approval, after which drivers receive delivery requests directly.',
    ],
    videoLink: '',
  },
  {
    id: '3',
    title: 'TheSkillGarage',
    subtitle: 'Career-change learning platform with real client projects',
    quote: 'Real projects. Real experience.',
    category: 'EdTech Platform',
    year: '2026',
    country: 'Canada / Global',
    scope:
      'Product Strategy, Business Analysis, Brand & UX/UI Design, Full-Stack Development, Conversion Optimization, Launch & Optimization',
    image: Boss,
    gridClass: 'lg:col-span-1',
    detailImages: [Boss, Boss],
    challenge: [
      'Career changers can learn business analysis or product management from any course, but hiring managers still ask the same question: where is your experience? TheSkillGarage built its offer around answering it, placing learners on real client projects in cross-functional teams across North America, Europe and Africa. Selling that promise online is hard. Prospective students are cautious about cost and credibility, and every enrollment sets off an operational chain of scheduling, payment, team placement and mentoring across time zones. TheSkillGarage needed a platform that could win a skeptical learner’s trust and then deliver on it at scale. SprintLab Digital was the end-to-end delivery partner and owned the whole value chain: discovery, requirements, design, engineering, launch and ongoing improvement.',
    ],
    approach: [
      'The platform had two jobs: convince a hesitant career changer to commit, then run the experience behind that commitment. Discovery traced the learner’s journey from first visit to enrollment and surfaced three objections that stalled it: no prior experience, cost, and doubt about outcomes. Each one shaped the public experience:',
      'First step: a free crash course, live or recorded, lowers the barrier to starting.',
      'Outcomes: success stories in written, audio and video formats, plus the companies alumni now work for, answer the doubt.',
      'Cost: pricing by region in USD, CAD or GBP, with one-time or instalment payment, answers the question of affordability.',
      'Reassurance: downloadable brochures and a direct line to a student success advisor support learners who need more before committing.',
      'Every offering runs on one program model: live bootcamps, short courses, self-paced and free courses, and project placements. Each program carries its own regional cohorts, schedule, curriculum, capacity and pricing, so new programs such as the AI Business Analysis and AI Product Management bootcamps launch as configuration, not new development.',
      'After enrollment, learners work from a personal dashboard that brings their classes, project sessions and mentor bookings into one calendar in their own time zone. Guided next steps and tailored recommendations keep them progressing and point them to their next program.',
      'A built-in mentor marketplace extends the platform beyond courses. Learners find and book one-to-one sessions with industry mentors, and professionals can join as mentors and earn from their expertise, which grows the platform’s coaching capacity without adding headcount.',
      'Growth is built into the product. A referral program rewards learners for inviting friends, and community, content and partnership channels keep learners engaged and bring in the client projects each cohort depends on.',
    ],
    videoLink: '',
  },
  {
    id: '4',
    title: 'Speakeet',
    subtitle: 'Live African language learning marketplace',
    quote: 'Learn African languages, live',
    category: 'Learning Marketplace',
    year: '2026',
    country: 'Global',
    scope:
      'Product Strategy, Business Analysis, Brand & UX/UI Design, Full-Stack Development, Live Video & Scheduling Architecture, Launch & Optimization',
    image: SpeakeetHero,
    imageMobile: SpeakeetHeroMobile,
    gridClass: 'lg:col-span-2',
    detailImages: [SpeakeetDetail1, SpeakeetDetail2, SpeakeetDetail3, SpeakeetDetail4],
    detailImagesMobile: [
      SpeakeetDetail1Mobile,
      SpeakeetDetail2Mobile,
      SpeakeetDetail3Mobile,
      SpeakeetDetail4Mobile,
    ],
    challenge: [
      'African language learning has historically suffered from fragmented resources, static phrasebooks, and a lack of access to verified native speakers. For diaspora communities, career professionals, and culturally motivated learners, mastering languages like Swahili, Yoruba, Igbo, or Amharic requires real-time, conversational immersion, which traditional self-paced language apps fail to deliver effectively. Speakeet set out to build a premier live-learning ecosystem connecting global learners with vetted African language tutors and rich cultural insights. SprintLab Digital was engaged as the end-to-end delivery partner, owning the complete product lifecycle: discovery, requirements engineering, multi-sided marketplace architecture, UX/UI design, full-stack engineering, and launch optimization.',
    ],
    approach: [
      'To design a platform that serves both sides of the marketplace—learners (Mentees) and tutors (Mentors), SprintLab Digital conducted extensive discovery, analyzing tutor availability models, video latency standards, and regional payment preferences. We defined a dual-engine product strategy focused on low-friction onboarding, dynamic session booking, and live, interactive instruction.',
      'SprintLab Digital crafted a modern, approachable visual identity paired with a clean UI optimized for mobile and desktop responsiveness. Key elements of the delivery include:',
      'Flexible 1:1 and Group Learning Engines: To balance affordability and personalization, we architected two distinct session pipelines:',
      '1:1 Personalized Sessions: Designed for tailored instruction and direct feedback.',
      'Group Sessions (2–5 Learners): Engineered around shared cohort scheduling, collaborative dynamic calendars, and flexible bundle pricing options.',
      'Tutor Marketplace & Discovery: An intuitive tutor directory featuring native-speaker profiles, upfront pricing transparency (e.g., hourly rates in USD), ratings, reviews, and primary teaching specialties across targeted languages (including Swahili, Yoruba, Igbo, Amharic, Afrikaans, Bambara, Chichewa, Dioula, Ewe, Fulfulde, and Ga).',
      'Live Session Architecture & Scheduling: Integrated real-time video conferencing, flexible availability slots, automated time-zone synchronization, and frictionless booking flows featuring first-session-free incentives for new user conversion.',
      'Engagement & Conversion Mechanics: Incorporates community trust signals, authentic user reviews, cultural insight integration, and direct lead acquisition tools (such as newsletter subscriptions and dedicated student/tutor portals).',
    ],
    videoLink: '',
  },
];
