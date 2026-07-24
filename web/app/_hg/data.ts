export type ProTip = { title: string; body: string };
export type JobDescription = {
  title: string;
  location: string;
  overview: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
};
export type JobBoard = { name: string; desc: string };
export type SocialPost = { n: number; text: string };
export type EmailTemplate = { n: number; subject: string; body: string };
export type TestLink = { name: string; url: string };
export type InterviewQuestion = { q: string; why: string; listen: string };
export type RejectionTemplate = { n: number; body: string };
export type Faq = { q: string; a: string };

export type HiringGuideData = {
  role: string;
  roleArticle: string;
  intro: string;
  howtoLead: string[];
  steps: string[];
  protips: ProTip[];
  jd: JobDescription;
  jobboards: JobBoard[];
  social: SocialPost[];
  emails: EmailTemplate[];
  tests: TestLink[];
  genq: InterviewQuestion[];
  techq: InterviewQuestion[];
  rejection: RejectionTemplate[];
  faqs: Faq[];
};

export const HIRING_GUIDE_TABS: { anchor: string; label: string }[] = [
  { anchor: '#howto', label: 'How to hire' },
  { anchor: '#jd', label: 'Job description' },
  { anchor: '#jobboards', label: 'Job boards' },
  { anchor: '#social', label: 'Social media outreach' },
  { anchor: '#emails', label: 'Email templates' },
  { anchor: '#assessment', label: 'Skills assessment' },
  { anchor: '#genq', label: 'General interview questions' },
  { anchor: '#techq', label: 'Technical interview questions' },
  { anchor: '#rejection', label: 'Rejection email' },
];

export const HIRING_GUIDES: Record<string, HiringGuideData> = {};
