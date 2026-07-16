import { useEffect, useMemo, useRef, useState } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Reveal from './Reveal';
import FAQ from './FAQ';
import UseCaseCard from './UseCaseCard';
import SecuritySection from './SecuritySection';
import MagneticButtons from './MagneticButtons';
import StatsNetCanvas from './StatsNetCanvas';
import { MouseOrb, FloatingParticles, HeroLine } from './HeroAnimations';

/* ---------- data ---------- */


const MARQUEE = [
  'Solvay',
  'Airtel',
  'inDrive',
  'Northeastern University',
  'Doctors Without Borders',
  'Agilisium',
  'Netconomy',
  'Xneelo',
];

const STEPS = [
  { n: '1', title: 'Build the assessment', desc: 'Pick from 3,500+ ready tests or let AI generate a custom one from your job description in under a minute.' },
  { n: '2', title: 'Invite candidates', desc: 'Share one link or sync from your ATS. Candidates complete a fair, proctored experience on any device.' },
  { n: '3', title: 'Compare & shortlist', desc: 'Get an objective, ranked leaderboard. Move the strongest people forward in 30 minutes — bias left behind.' },
];

type DemoTab = { id: number; label: string };
const DEMO_TABS: DemoTab[] = [
  { id: 1, label: 'Test library' },
  { id: 2, label: 'Video interview' },
  { id: 0, label: 'AI resume screener' },
];

const TESTIMONIALS = [
  { img: 'https://testlify.com/wp-content/uploads/2026/03/Xneelo-Chrissie-Blom.png', name: 'Chrissie Blom', role: 'Technical Talent Specialist, Xneelo', quote: 'We cut screening time by two-thirds. The ranked shortlist is the first thing my hiring managers open every morning.' },
  { img: 'https://testlify.com/wp-content/uploads/2026/03/Kimp-Senthu-Velnayagam.png', name: 'Senthu Velnayagam', role: 'People Ops, Kimp', quote: 'Skills-based assessments doubled our shortlist diversity and our offer-acceptance rate. The data finally backs every decision.' },
  { img: 'https://testlify.com/wp-content/uploads/2026/03/Endiprev-Daniela-Santos.png', name: 'Daniela Santos', role: 'HR Lead, Endiprev', quote: 'Setup took an afternoon. Within a week we\u2019d replaced three rounds of phone screens with one fair assessment.' },
  { img: 'https://testlify.com/wp-content/uploads/2026/03/Virtual-Gurus-Abby-Belin.png', name: 'Abby Belin', role: 'Recruiting, Virtual Gurus', quote: 'Candidates actually thank us for the experience. It feels fair, it\u2019s fast, and our drop-off fell off a cliff.' },
];

const VS_OLD = [
  'Hours lost manually reading resumes for every role',
  'Keyword matching misses people who can really do the job',
  'Unconscious bias creeps into every shortlist',
  'A single mis-hire costs months of salary and momentum',
  'No defensible audit trail when decisions are questioned',
];

const VS_NEW = [
  'Screen a full pipeline in 30 minutes, not days',
  'Verified skills that genuinely predict on-the-job performance',
  'Bias-controlled and EEOC-defensible by design',
  'Up to 75% less screening time, with higher quality of hire',
  'Every decision scored, documented and fair',
];

const USE_CASES = [
  { icon: 'chart' as const, tint: '#FFEDED', ink: '#F23F44', title: 'Volume hiring', desc: 'Screen thousands of applicants automatically and surface the top few in minutes.' },
  { icon: 'globe' as const, tint: '#E6F0FD', ink: '#2A74E0', title: 'Remote & global', desc: 'Assess candidates anywhere, in 9 languages, with a consistent, fair experience.' },
  { icon: 'cap' as const, tint: '#E3F5EE', ink: '#1F9D7A', title: 'Campus & early talent', desc: 'Evaluate potential and aptitude at scale — no experience required to shine.' },
  { icon: 'users' as const, tint: '#FCF1DC', ink: '#D69100', title: 'Diversity & inclusion', desc: 'Remove bias from screening and build teams on merit, not pedigree.' },
  { icon: 'code' as const, tint: '#EEEBFB', ink: '#6D5BD0', title: 'Technical & coding', desc: 'Live coding, real-world dev tasks and auto-scored challenges across 50+ stacks.' },
  { icon: 'headset' as const, tint: '#FFEDED', ink: '#F23F44', title: 'Sales & customer-facing', desc: 'Role-play simulations and situational judgement tests that mirror the real job.' },
  { icon: 'compass' as const, tint: '#E6F0FD', ink: '#2A74E0', title: 'Leadership & psychometric', desc: 'Personality, aptitude and cognitive insight to build cohesive, high-trust teams.' },
  { icon: 'bolt' as const, tint: '#E3F5EE', ink: '#1F9D7A', title: 'Lateral & specialist', desc: 'Validate deep, role-specific expertise before you commit to a senior hire.' },
];

const INTEGRATIONS: [string, string][] = [
  ['https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png', 'Workday'],
  ['https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png', 'Greenhouse'],
  ['https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr', 'Lever'],
  ['https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg', 'SmartRecruiters'],
  ['https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png', 'BambooHR'],
  ['https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr', 'SuccessFactors'],
  ['https://testlify.com/wp-content/uploads/2025/10/logo.svg', 'UKG'],
  ['https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr', 'Recruitee'],
  ['https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png', 'Zoho Recruit'],
  ['https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr', 'JazzHR'],
];

const LIB_CATS: [string, string][] = [
  ['all', 'All tests'],
  ['engineering', 'Engineering'],
  ['sales', 'Sales & Revenue'],
  ['data', 'Data & Analytics'],
  ['support', 'Customer Support'],
  ['cognitive', 'Cognitive'],
  ['language', 'Language'],
  ['marketing', 'Marketing'],
];

const LIB_LABEL: Record<string, string> = {
  engineering: 'Engineering',
  sales: 'Sales & Revenue',
  data: 'Data & Analytics',
  support: 'Customer Support',
  cognitive: 'Cognitive ability',
  language: 'Language & Comms',
  marketing: 'Marketing',
};

type LibTest = { n: string; c: string; f: string; q: number; m: number; k: string };
const LIB_TESTS: LibTest[] = [
  { n: 'JavaScript (Coding)', c: 'engineering', f: 'Live coding', q: 18, m: 25, k: 'js es6 frontend' },
  { n: 'React', c: 'engineering', f: 'MCQ + coding', q: 16, m: 20, k: 'jsx hooks frontend' },
  { n: 'Python (Coding)', c: 'engineering', f: 'Live coding', q: 20, m: 30, k: 'backend django' },
  { n: 'Java', c: 'engineering', f: 'MCQ + coding', q: 15, m: 25, k: 'spring backend' },
  { n: 'TypeScript', c: 'engineering', f: 'MCQ', q: 14, m: 18, k: 'ts types frontend' },
  { n: 'Node.js', c: 'engineering', f: 'MCQ', q: 14, m: 18, k: 'backend express' },
  { n: 'SQL', c: 'engineering', f: 'Live coding', q: 16, m: 20, k: 'database query' },
  { n: 'Data Structures & Algorithms', c: 'engineering', f: 'Live coding', q: 12, m: 35, k: 'dsa leetcode' },
  { n: 'HTML & CSS', c: 'engineering', f: 'MCQ + task', q: 18, m: 15, k: 'frontend markup' },
  { n: 'DevOps (CI/CD)', c: 'engineering', f: 'MCQ', q: 15, m: 20, k: 'docker kubernetes pipeline' },
  { n: 'AWS Cloud', c: 'engineering', f: 'MCQ', q: 16, m: 22, k: 'cloud devops amazon' },
  { n: 'Sales Aptitude', c: 'sales', f: 'MCQ', q: 20, m: 15, k: 'selling' },
  { n: 'SDR / BDR', c: 'sales', f: 'Scenario', q: 12, m: 18, k: 'prospecting outbound' },
  { n: 'Account Executive', c: 'sales', f: 'Scenario', q: 10, m: 20, k: 'closing quota' },
  { n: 'Negotiation', c: 'sales', f: 'Scenario', q: 8, m: 15, k: 'deal' },
  { n: 'Salesforce CRM', c: 'sales', f: 'MCQ', q: 15, m: 18, k: 'crm pipeline' },
  { n: 'Cold Calling', c: 'sales', f: 'Audio response', q: 6, m: 12, k: 'outbound phone' },
  { n: 'SQL for Analysts', c: 'data', f: 'Live coding', q: 16, m: 20, k: 'query database' },
  { n: 'Microsoft Excel', c: 'data', f: 'MCQ + task', q: 18, m: 25, k: 'spreadsheet formulas' },
  { n: 'Power BI', c: 'data', f: 'MCQ', q: 15, m: 20, k: 'dashboard bi' },
  { n: 'Tableau', c: 'data', f: 'MCQ', q: 14, m: 18, k: 'dashboard viz' },
  { n: 'Data Analysis', c: 'data', f: 'MCQ', q: 16, m: 22, k: 'analytics insights' },
  { n: 'Statistics', c: 'data', f: 'MCQ', q: 15, m: 20, k: 'probability stats' },
  { n: 'Customer Service', c: 'support', f: 'Scenario', q: 14, m: 15, k: 'cs help' },
  { n: 'Email Etiquette', c: 'support', f: 'Work sample', q: 8, m: 12, k: 'writing tone' },
  { n: 'Zendesk', c: 'support', f: 'MCQ', q: 12, m: 15, k: 'ticketing helpdesk' },
  { n: 'Live Chat Support', c: 'support', f: 'Work sample', q: 8, m: 12, k: 'chat tone' },
  { n: 'Conflict Resolution', c: 'support', f: 'Scenario', q: 10, m: 15, k: 'de-escalation' },
  { n: 'Numerical Reasoning', c: 'cognitive', f: 'Aptitude', q: 15, m: 18, k: 'maths logic' },
  { n: 'Verbal Reasoning', c: 'cognitive', f: 'Aptitude', q: 15, m: 18, k: 'comprehension logic' },
  { n: 'Logical Reasoning', c: 'cognitive', f: 'Aptitude', q: 15, m: 18, k: 'deductive logic' },
  { n: 'Abstract Reasoning', c: 'cognitive', f: 'Aptitude', q: 12, m: 15, k: 'pattern logic' },
  { n: 'Attention to Detail', c: 'cognitive', f: 'Aptitude', q: 20, m: 12, k: 'accuracy' },
  { n: 'English Proficiency', c: 'language', f: 'Proficiency', q: 20, m: 20, k: 'comms grammar' },
  { n: 'Business Communication', c: 'language', f: 'MCQ', q: 15, m: 18, k: 'writing comms' },
  { n: 'Spanish', c: 'language', f: 'Proficiency', q: 20, m: 20, k: 'language' },
  { n: 'French', c: 'language', f: 'Proficiency', q: 20, m: 20, k: 'language' },
  { n: 'German', c: 'language', f: 'Proficiency', q: 20, m: 20, k: 'language' },
  { n: 'SEO', c: 'marketing', f: 'MCQ', q: 16, m: 18, k: 'search organic' },
  { n: 'Content Marketing', c: 'marketing', f: 'MCQ', q: 14, m: 18, k: 'copy blog' },
  { n: 'Google Ads', c: 'marketing', f: 'MCQ', q: 15, m: 20, k: 'ppc sem ads' },
  { n: 'Social Media Marketing', c: 'marketing', f: 'MCQ', q: 14, m: 18, k: 'smm social' },
  { n: 'Digital Marketing', c: 'marketing', f: 'MCQ', q: 18, m: 22, k: 'growth funnel' },
];

const FAQ_ITEMS = [
  { q: 'What is Testlify?', a: 'Testlify is a skills assessment and interviewing platform that helps companies hire top talent quickly, accurately and affordably. We take the stress out of finding the best candidates with deep analysis that\u2019s accurate, automated and unbiased.' },
  { q: 'How does Testlify help in my hiring process?', a: 'Testlify\u2019s AI-powered pre-hire assessments measure the skills and job fitment of a candidate. These tests allow for quick screening, eliminate bias in hiring, and increase the productivity of recruiters and hiring managers — a proven solution against high employee turnover.' },
  { q: 'How are the pre-employment tests created?', a: 'Tests are built by subject-matter experts and I/O psychologists, validated psychometrically to accurately measure skills and predict job performance. Randomized question banks prevent answer sharing, while bias reviews ensure every candidate is assessed purely on merit.' },
  { q: 'How is Testlify different from other tools?', a: 'Our assessments are validated by I/O psychologists and built to withstand EEOC scrutiny. We prioritize on-the-job skills over trick questions, use non-googleable questions with advanced proctoring, and keep tests low-stress and adaptive — just 30 minutes, with minimal drop-off.' },
  { q: 'What types of questions can I ask?', a: 'Depending on the role: multiple choice, descriptive, video and audio questions, open-ended, typing tests, file upload, Google Docs/Sheets/Slides questions, programming questions and live coding challenges.' },
];

const STATS = [
  { count: 1500, suffix: '+', label: 'Talent teams hiring smarter' },
  { count: 3500, suffix: '+', label: 'Expert-validated tests' },
  { count: 94, suffix: '%', label: 'Candidate satisfaction' },
  { count: 55, suffix: '%', label: 'Faster time to hire' },
];

/* ---------- small helpers ---------- */

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const dur = 1500;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e).toLocaleString('en-US') + suffix;
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && run()),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, suffix]);
  return <span ref={ref}>0</span>;
}

export default function HomeClient() {
  const [tab, setTab] = useState(1);
  const [stage, setStage] = useState(0);
  const [slide, setSlide] = useState(0);
  const [statActive, setStatActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [libQuery, setLibQuery] = useState('');
  const [libCat, setLibCat] = useState('all');

  const libResults = useMemo(() => {
    const q = libQuery.trim().toLowerCase();
    const cat = libCat || 'all';
    return LIB_TESTS.filter(
      (t) =>
        (cat === 'all' || t.c === cat) &&
        (!q ||
          t.n.toLowerCase().includes(q) ||
          (LIB_LABEL[t.c] || '').toLowerCase().includes(q) ||
          (t.f || '').toLowerCase().includes(q) ||
          (t.k || '').toLowerCase().includes(q)),
    );
  }, [libQuery, libCat]);
  const libCount = libResults.length
    ? `Showing ${Math.min(libResults.length, 6)}${libResults.length > 6 ? '+' : ''} of 3,500+ validated tests`
    : 'No tests match — try another role or skill.';
  const trackRef = useRef<HTMLDivElement>(null);
  const howCardRef = useRef<HTMLDivElement>(null);
  const howStepsRef = useRef<HTMLDivElement>(null);

  const heroRef = useRef<HTMLElement>(null);

  /* "how it works" auto-cycle */
  const [stageBump, setStageBump] = useState(0);
  const pickStage = (i: number) => {
    setStage(i);
    setStageBump((b) => b + 1);
  };
  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % STEPS.length), 3200);
    return () => clearInterval(id);
  }, [stageBump]);

  /* "how it works" — match the visual card height to the steps column */
  useEffect(() => {
    const sync = () => {
      const card = howCardRef.current;
      const steps = howStepsRef.current;
      if (!card || !steps) return;
      if (window.innerWidth <= 860) {
        card.style.height = '600px';
        return;
      }
      const h = Math.round(steps.getBoundingClientRect().height);
      if (h > 200) card.style.height = h + 'px';
    };
    sync();
    const t1 = setTimeout(sync, 400);
    const t2 = setTimeout(sync, 1200);
    window.addEventListener('resize', sync, { passive: true });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', sync);
    };
  }, []);

  /* testimonial carousel */
  const [slideBump, setSlideBump] = useState(0);
  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => setSlide((s) => s + 1), 4800);
    return () => clearInterval(id);
  }, [hovering, slideBump]);

  const realCount = TESTIMONIALS.length;
  const [noTransition, setNoTransition] = useState(false);
  useEffect(() => {
    if (slide === realCount) {
      const id = setTimeout(() => {
        setNoTransition(true);
        setSlide(0);
      }, 620);
      return () => clearTimeout(id);
    }
    if (noTransition) {
      const id = requestAnimationFrame(() => setNoTransition(false));
      return () => cancelAnimationFrame(id);
    }
  }, [slide, realCount, noTransition]);

  const goPrev = () => {
    setSlide((s) => (s <= 0 ? realCount - 1 : s - 1));
    setSlideBump((b) => b + 1);
  };
  const goNext = () => {
    setSlide((s) => s + 1);
    setSlideBump((b) => b + 1);
  };
  const activeDot = slide % realCount;

  /* testimonial drag */
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ down: false, startX: 0, moved: 0, w: 1 });
  const dragStart = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current.down = true;
    dragState.current.moved = 0;
    dragState.current.startX = clientX;
    dragState.current.w = track.getBoundingClientRect().width || 1;
    setDragging(true);
  };
  const dragMove = (clientX: number, e?: { cancelable: boolean; preventDefault: () => void }) => {
    const st = dragState.current;
    if (!st.down) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = clientX - st.startX;
    st.moved = dx;
    track.style.transition = 'none';
    track.style.transform = `translateX(calc(-${slide * 100}% + ${dx}px))`;
    if (Math.abs(dx) > 6 && e && e.cancelable) e.preventDefault();
  };
  const dragEnd = () => {
    const st = dragState.current;
    if (!st.down) return;
    st.down = false;
    setDragging(false);
    const track = trackRef.current;
    const threshold = st.w * 0.18;
    let target = slide;
    if (st.moved < -threshold) target = slide + 1;
    else if (st.moved > threshold) target = slide <= 0 ? realCount - 1 : slide - 1;
    if (track) {
      track.style.transition = 'transform .62s cubic-bezier(.22,.61,.36,1)';
      track.style.transform = `translateX(-${target * 100}%)`;
    }
    setSlide(target);
    setSlideBump((b) => b + 1);
  };
  useEffect(() => {
    const onMove = (e: MouseEvent) => dragMove(e.clientX, e);
    const onUp = () => dragEnd();
    const onTouchMove = (e: TouchEvent) => dragMove(e.touches[0].clientX, e);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide]);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* fixed background wash */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background:
            'radial-gradient(1200px 700px at 80% 12%,rgba(251,163,165,.16),transparent 60%),rgb(255,247,246)',
        }}
      />

      <SiteHeader
        overlay
        announcement="Testlify AI is here — screen, interview & score candidates automatically."
        announcementCta="See what's new →"
        announcementHref="#demo"
      />

      {/* ============ HERO ============ */}
      <MagneticButtons scopeRef={heroRef} />
      <MouseOrb />
      <section
        ref={heroRef}
        id="top"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '112px 28px 56px',
          background: 'linear-gradient(180deg,#FFF8F7 0%,#FFF0EF 60%,#FFF8F7 100%)',
          textAlign: 'center',
        }}
      >
        {/* background: grid + radial orbs + floating particles */}
        <div aria-hidden className="tl-grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
        <div aria-hidden className="tl-orb-red" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, pointerEvents: 'none', opacity: 0.7, zIndex: 0 }} />
        <div aria-hidden className="tl-orb-orange" style={{ position: 'absolute', top: '33%', left: 0, width: 500, height: 500, pointerEvents: 'none', opacity: 0.5, zIndex: 0 }} />
        <div aria-hidden className="tl-orb-rose" style={{ position: 'absolute', top: '50%', right: 0, width: 400, height: 400, pointerEvents: 'none', opacity: 0.4, zIndex: 0 }} />
        <FloatingParticles count={24} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto' }}>
          {/* eyebrow pill */}
          <Reveal className="inline-flex items-center gap-[9px] bg-white border border-[#FBD0D1] px-4 py-[9px] rounded-full shadow-[0_6px_18px_rgba(242,63,68,0.10)] mb-8">
            <span className="w-[7px] h-[7px] rounded-full bg-coral inline-block" style={{ animation: 'tl-pulsedot-kf 2s ease-in-out infinite' }} />
            <span className="text-[13.5px] font-semibold text-coral-deep tracking-[0.2px]">
              AI-powered skills assessment
            </span>
          </Reveal>

          {/* headline with scramble decode + staggered rise + gradient line */}
          <h1
            style={{
              fontSize: 'clamp(48px, 7.5vw, 92px)',
              lineHeight: 1.0,
              fontWeight: 800,
              letterSpacing: '-3px',
              margin: '0 0 28px',
            }}
          >
            <HeroLine text="Hire on skill," scrambleDelay={600} riseDelay={350} />
            <HeroLine text="not on" scrambleDelay={900} riseDelay={500} gradient />
            <HeroLine text="a résumé." scrambleDelay={1200} riseDelay={650} />
          </h1>

          {/* sub */}
          <Reveal
            as="p"
            delay={0.9}
            style={{
              fontSize: 20,
              lineHeight: 1.65,
              color: '#6C5A5D',
              maxWidth: 580,
              margin: '0 auto 40px',
              fontWeight: 400,
            }}
          >
            Your next great hire is already in your pipeline. Testlify surfaces them in 30&nbsp;minutes with validated assessments&nbsp;— no resume bias, no gut-check guesses.
          </Reveal>

          {/* CTAs */}
          <Reveal delay={1.05} className="flex flex-wrap gap-4 justify-center mb-6">
            <a
              href="#"
              data-magnetic
              className="tl-glow-md btn-sheen inline-flex items-center gap-[9px] bg-coral text-white font-semibold text-[17px] px-[34px] py-[17px] rounded-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(242,63,68,0.48)]"
            >
              Try for free
              <span className="text-[18px] leading-none">→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-white text-ink font-semibold text-[17px] px-[30px] py-[17px] rounded-[16px] border-[1.5px] border-[#F0D9DA] transition-all duration-300 hover:border-coral hover:shadow-[0_8px_24px_rgba(242,63,68,0.12)]"
            >
              <span className="w-[30px] h-[30px] rounded-full bg-[#FFF0F0] inline-flex items-center justify-center text-coral shrink-0">
                <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor" className="block ml-px" aria-hidden>
                  <path d="M0 0.6v9.8l9-4.9z" />
                </svg>
              </span>
              Book a demo
            </a>
          </Reveal>

          {/* trust micro-copy */}
          <Reveal delay={1.2} className="flex items-center justify-center gap-6 flex-wrap">
            <span className="inline-flex items-center gap-[7px] text-[14px] text-muted font-medium">
              <span className="text-coral font-bold text-[15px]">✓</span>7-day free trial
            </span>
            <span className="w-px h-4 bg-[#E8D8DA]" aria-hidden />
            <span className="inline-flex items-center gap-[7px] text-[14px] text-muted font-medium">
              <span className="text-coral font-bold text-[15px]">✓</span>No credit card required
            </span>
            <span className="w-px h-4 bg-[#E8D8DA]" aria-hidden />
            <span className="inline-flex items-center gap-[7px] text-[14px] text-muted font-medium">
              <span className="text-coral font-bold text-[15px]">✓</span>Setup in under 5 minutes
            </span>
          </Reveal>

          {/* stat chips */}
          <Reveal delay={1.34} className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {[
              { val: '1,500+', label: 'talent teams' },
              { val: '3,500+', label: 'validated tests' },
              { val: '94%', label: 'candidate satisfaction' },
              { val: '55%', label: 'faster hiring' },
            ].map((s) => (
              <div
                key={s.label}
                className="inline-flex items-center gap-2 bg-white border border-[#F0D9DA] rounded-full px-5 py-2.5 shadow-[0_4px_14px_rgba(242,63,68,0.07)]"
              >
                <span className="text-[15px] font-extrabold text-coral tracking-[-0.5px]">{s.val}</span>
                <span className="text-[13px] font-medium text-muted">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section style={{ padding: '44px 28px 54px', background: 'transparent' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: 13.5,
            fontWeight: 600,
            letterSpacing: '1.5px',
            color: '#A9999C',
            textTransform: 'uppercase',
            margin: '0 0 30px',
          }}
        >
          Trusted by leading talent teams worldwide
        </p>
        <div
          style={{
            position: 'relative',
            maxWidth: 1100,
            margin: '0 auto',
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
            maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              gap: 64,
              animation: 'tl-marquee 28s linear infinite',
              alignItems: 'center',
            }}
          >
            {[...MARQUEE, ...MARQUEE].map((name, i) => (
              <span
                key={i}
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#C9B9BC',
                  letterSpacing: '-.5px',
                  whiteSpace: 'nowrap',
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY / PROOF vs RESUMES ============ */}
      <section id="why" className="px-7" style={{ padding: '96px 28px', background: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ maxWidth: 720, margin: '0 0 8px' }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              Why Testlify<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-3.5 text-ink">
              Stop screening on resumes. Start hiring on proof.
            </Reveal>
            <Reveal as="p" delay={0.12} className="text-[17px] leading-[1.6] text-body m-0">
              Resumes tell you where someone has been — not what they can actually do. Testlify replaces guesswork with verified, job-relevant evidence.
            </Reveal>
          </div>
          <div className="vs grid grid-cols-2 gap-[18px] mt-[46px] max-[900px]:grid-cols-1">
            <Reveal className="rounded-[24px] px-8 py-9 bg-transparent border border-transparent">
              <div className="flex items-center gap-3 mb-[22px]">
                <span className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-[16px] font-bold bg-[#F0E4E5] text-muted">✕</span>
                <span className="text-[13px] font-bold tracking-[0.04em] uppercase text-muted">Resume-first hiring</span>
              </div>
              {VS_OLD.map((t, i) => (
                <Reveal
                  key={t}
                  delay={0.06 * (i + 1)}
                  className="flex items-start gap-[13px] py-[13px] text-[15.5px] leading-[1.45] border-t border-[#F1E2E3] first-of-type:border-t-0 text-[#46383C]"
                >
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] shrink-0 mt-px bg-[#EADDDE] text-muted">✕</span>
                  <span>{t}</span>
                </Reveal>
              ))}
            </Reveal>
            <Reveal
              delay={0.1}
              className="relative rounded-[24px] px-8 py-9 border-[1.5px] border-[#F7B4B6] shadow-[0_24px_50px_rgba(242,63,68,0.18),0_0_0_4px_rgba(242,63,68,0.06)]"
              style={{ background: 'linear-gradient(160deg,#FFF0F0,#FFF8F6)' }}
            >
              <div className="flex items-center gap-3 mb-[22px]">
                <span className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-[16px] font-bold bg-coral text-white">✓</span>
                <span className="text-[13px] font-bold tracking-[0.04em] uppercase text-coral">Skills-first with Testlify</span>
              </div>
              {VS_NEW.map((t, i) => (
                <Reveal
                  key={t}
                  delay={0.16 + 0.06 * i}
                  className="flex items-start gap-[13px] py-[13px] text-[15.5px] leading-[1.45] border-t border-[#F1E2E3] first-of-type:border-t-0"
                >
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] shrink-0 mt-px bg-coral text-white">✓</span>
                  <span className="text-ink font-medium">{t}</span>
                </Reveal>
              ))}
            </Reveal>
          </div>
          <Reveal
            delay={0.16}
            className="flex flex-wrap items-center justify-center gap-5 mt-[46px] text-center"
          >
            <a
              href="#"
              className="btn-sheen inline-flex items-center gap-[9px] bg-coral text-white font-semibold text-[16.5px] px-[30px] py-[15px] rounded-[14px] shadow-[0_14px_30px_rgba(242,63,68,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(242,63,68,0.42)]"
            >
              Try for free
              <span className="text-[18px]">→</span>
            </a>
            <span className="text-[14.5px] font-medium text-muted">
              See a proof-based shortlist in 30 minutes. No credit card.
            </span>
          </Reveal>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how" className="px-7" style={{ padding: '96px 28px', background: '#FBF3EE' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto 56px' }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              How it works<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[46px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink">
              From open role to offer, watch it build
            </Reveal>
          </div>
          <div
            className="how-grid max-[900px]:grid-cols-1!"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}
          >
            <div className="how-visual max-[900px]:static!" style={{ position: 'sticky', top: 110 }}>
              <div
                ref={howCardRef}
                style={{
                  position: 'relative',
                  height: 600,
                  background: '#fff',
                  border: '1px solid #F4E4E5',
                  borderRadius: 24,
                  boxShadow: '0 26px 60px rgba(110,11,14,.12)',
                  overflow: 'hidden',
                }}
              >
                <HowStage active={stage === 0}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-[9px]">
                      <span style={{ width: 26, height: 26, borderRadius: 8, background: 'linear-gradient(135deg,#FF8A6B,#F23F44)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" /></svg>
                      </span>
                      <span className="text-[11.5px] font-bold text-muted tracking-[0.4px]">AI ASSESSMENT BUILDER</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-coral bg-[#FFF0F0] px-2.5 py-[5px] rounded-full">
                      <span className="tl-pulsedot inline-block w-1.5 h-1.5 rounded-full bg-coral" />Generating
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-[#FFF8F8] border border-[#F4E4E5] rounded-xl px-3.5 py-[11px] mb-3.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9999C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                    <div className="text-[13.5px] text-body">From <strong className="text-ink">&quot;Senior Frontend Engineer&quot;</strong></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'TypeScript', 'CSS systems', 'Accessibility'].map((t) => (
                      <span key={t} className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-coral-deep bg-[#FFF0F0] border border-[#FBD0D1] px-3 py-1.5 rounded-full">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t}
                      </span>
                    ))}
                  </div>
                  <div className="bg-white border border-[#F2E6E7] rounded-[14px] px-[15px] py-3.5 shadow-[0_10px_24px_rgba(110,11,14,0.07)] mb-4">
                    <div className="flex justify-between items-center mb-[9px]">
                      <span className="text-[11px] font-bold text-coral tracking-[0.3px]">Q3 · MULTIPLE CHOICE</span>
                      <span className="text-[11px] font-semibold text-muted">React · Hooks</span>
                    </div>
                    <div className="text-[13.5px] font-semibold text-ink leading-[1.45] mb-[11px]">Which hook memoizes a value so it isn&apos;t recomputed on every render?</div>
                    <div className="flex flex-col gap-[7px]">
                      <div className="flex items-center gap-[9px] bg-[#FFF8F8] border border-[#F4E4E5] rounded-[9px] px-[11px] py-2 text-[12.5px] text-[#6C5A5D]"><span className="w-4 h-4 rounded-full border-[1.5px] border-[#E6D2D3]" />useState()</div>
                      <div className="flex items-center gap-[9px] bg-[#F0FBF4] border-[1.5px] border-[#BFE9CF] rounded-[9px] px-[11px] py-2 text-[12.5px] font-semibold text-[#1B7A4B]"><span className="w-4 h-4 rounded-full bg-[#22A35B] flex items-center justify-center"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>useMemo()</div>
                      <div className="flex items-center gap-[9px] bg-[#FFF8F8] border border-[#F4E4E5] rounded-[9px] px-[11px] py-2 text-[12.5px] text-[#6C5A5D]"><span className="w-4 h-4 rounded-full border-[1.5px] border-[#E6D2D3]" />useEffect()</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-[7px]">
                    <span className="text-[12px] font-semibold text-muted">Building questions</span>
                    <span className="text-[12px] font-bold text-ink">14 / 18</span>
                  </div>
                  <div className="h-2 bg-[#F4EBEC] rounded-md overflow-hidden">
                    <div style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg,#FF8A6B,#F23F44)', borderRadius: 6 }} />
                  </div>
                </HowStage>

                <HowStage active={stage === 1}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11.5px] font-bold text-muted tracking-[0.4px]">CANDIDATES</span>
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#1B8A5A] bg-[#E7F6EF] px-2.5 py-[5px] rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B8A5A" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>Two-way ATS sync
                    </span>
                  </div>
                  <div className="flex gap-[9px] mb-3.5">
                    <div className="flex-1 bg-[#FFF8F8] border border-[#F4E4E5] rounded-xl px-[13px] py-3">
                      <div className="text-[21px] font-extrabold text-ink tracking-[-0.5px]">248</div>
                      <div className="text-[11px] font-semibold text-muted">Invited</div>
                    </div>
                    <div className="flex-1 bg-[#FFF8F8] border border-[#F4E4E5] rounded-xl px-[13px] py-3">
                      <div className="text-[21px] font-extrabold text-ink tracking-[-0.5px]">176</div>
                      <div className="text-[11px] font-semibold text-muted">Completed</div>
                    </div>
                    <div className="flex-1 bg-[#FFF0F0] border border-[#FBD0D1] rounded-xl px-[13px] py-3">
                      <div className="text-[21px] font-extrabold text-coral tracking-[-0.5px]">71%</div>
                      <div className="text-[11px] font-semibold text-[#C0696C]">Response</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px]">
                    {[
                      { av: 'JL', g: 'linear-gradient(135deg,#F76A6E,#F23F44)', name: 'Jordan L.', st: 'Completed', c: '#1B8A5A', bg: '#E7F6EF' },
                      { av: 'AM', g: 'linear-gradient(135deg,#FBA3A5,#F76A6E)', name: 'Aisha M.', st: 'In progress', c: '#A36A00', bg: '#FBEFD9' },
                      { av: 'RK', g: 'linear-gradient(135deg,#FDD5D6,#FBA3A5)', name: 'Rahul K.', st: 'Invited', c: '#8A7A7D', bg: '#F1ECED' },
                      { av: 'SN', g: 'linear-gradient(135deg,#F23F44,#A91E23)', name: 'Sana N.', st: 'Completed', c: '#1B8A5A', bg: '#E7F6EF' },
                    ].map((r) => (
                      <div key={r.av} className="flex items-center gap-3 bg-[#FFF8F8] border border-[#F4E4E5] rounded-[13px] px-[15px] py-3">
                        <span style={{ width: 36, height: 36, borderRadius: 10, background: r.g, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13 }}>{r.av}</span>
                        <div className="flex-1 font-semibold text-[14.5px] text-ink">{r.name}</div>
                        <span className="text-[12px] font-semibold px-[11px] py-[5px] rounded-lg" style={{ color: r.c, background: r.bg }}>{r.st}</span>
                      </div>
                    ))}
                  </div>
                </HowStage>

                <HowStage active={stage === 2}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11.5px] font-bold text-muted tracking-[0.4px]">RANKED LEADERBOARD</span>
                    <span className="text-[11.5px] font-bold text-white bg-coral px-3 py-[5px] rounded-lg">Shortlist top 5</span>
                  </div>
                  <div className="flex flex-col gap-[11px]">
                    <div className="bg-[#FFF6F6] border-[1.5px] border-[#FBD0D1] rounded-[14px] px-[15px] py-[13px] shadow-[0_10px_22px_rgba(242,63,68,0.12)]">
                      <div className="flex items-center gap-[13px]">
                        <span className="font-extrabold text-coral text-[15px] w-[18px]">1</span>
                        <span style={{ width: 38, height: 38, borderRadius: 11, background: 'linear-gradient(135deg,#F76A6E,#F23F44)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13 }}>JL</span>
                        <div className="flex-1">
                          <div className="font-semibold text-[14.5px] text-ink">Jordan L.</div>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B8A5A]">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1B8A5A" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Shortlisted
                          </span>
                        </div>
                        <span className="font-extrabold text-coral text-[19px]">94</span>
                      </div>
                      <div className="flex gap-[5px] mt-[11px] pl-[31px]">
                        <span className="flex-1 h-[5px] rounded-[3px]" style={{ background: '#F23F44' }} />
                        <span className="flex-1 h-[5px] rounded-[3px]" style={{ background: '#F76A6E' }} />
                        <span className="flex-1 h-[5px] rounded-[3px]" style={{ background: '#FBA3A5' }} />
                        <span className="flex-1 h-[5px] rounded-[3px]" style={{ background: '#F23F44' }} />
                      </div>
                    </div>
                    <div className="flex items-center gap-[13px] bg-white border border-[#F2E6E7] rounded-[14px] px-[15px] py-[13px]">
                      <span className="font-extrabold text-[15px] w-[18px]" style={{ color: '#A91E23' }}>2</span>
                      <span style={{ width: 38, height: 38, borderRadius: 11, background: 'linear-gradient(135deg,#F23F44,#A91E23)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13 }}>SN</span>
                      <div className="flex-1 font-semibold text-[14.5px] text-ink">Sana N.</div>
                      <span className="font-extrabold text-[17px]" style={{ color: '#A91E23' }}>91</span>
                    </div>
                    <div className="flex items-center gap-[13px] bg-white border border-[#F2E6E7] rounded-[14px] px-[15px] py-[13px]">
                      <span className="font-extrabold text-[15px] w-[18px]" style={{ color: '#C13238' }}>3</span>
                      <span style={{ width: 38, height: 38, borderRadius: 11, background: 'linear-gradient(135deg,#FBA3A5,#F76A6E)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13 }}>AM</span>
                      <div className="flex-1 font-semibold text-[14.5px] text-ink">Aisha M.</div>
                      <span className="font-extrabold text-[17px]" style={{ color: '#C13238' }}>88</span>
                    </div>
                  </div>
                </HowStage>
              </div>
            </div>

            <div ref={howStepsRef} className="flex flex-col gap-4">
              {STEPS.map((s, i) => {
                const on = stage === i;
                return (
                  <div
                    key={s.n}
                    onClick={() => pickStage(i)}
                    onMouseEnter={() => pickStage(i)}
                    style={{
                      cursor: 'pointer',
                      background: on ? '#fff' : '#FFF9F9',
                      border: on ? '1.5px solid #F23F44' : '1.5px solid #F2E6E7',
                      borderRadius: 18,
                      padding: '24px 26px',
                      boxShadow: on ? '0 16px 40px rgba(110,11,14,.12)' : 'none',
                      transition: 'border-color .3s ease, box-shadow .3s ease, background .3s ease',
                    }}
                  >
                    <div className="flex items-center gap-3.5 mb-2.5">
                      <span
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: on ? '#F23F44' : '#FDD5D6',
                          color: on ? '#fff' : '#A91E23',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: 18,
                          transition: 'all .3s ease',
                          transform: on ? 'scale(1.12)' : 'scale(1)',
                        }}
                      >
                        {s.n}
                      </span>
                      <h3 className="text-[21px] font-bold m-0 text-ink tracking-[-0.4px]">{s.title}</h3>
                    </div>
                    <p className="text-[15.5px] leading-[1.6] text-body m-0 mb-3 pl-[54px]">{s.desc}</p>
                    <div className="h-[3px] bg-[#F4EBEC] rounded-[3px] ml-[54px] overflow-hidden">
                      <div style={{ width: on ? '100%' : '0%', height: '100%', background: '#F23F44', borderRadius: 3, transition: 'width .4s ease' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEST LIBRARY PREVIEW ============ */}
      <section id="library" className="px-7" style={{ padding: '96px 28px', background: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ maxWidth: 720, margin: '0 0 30px' }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              The test library<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-3.5 text-ink">
              3,500+ validated tests. A match for every role you hire.
            </Reveal>
            <Reveal as="p" delay={0.12} className="text-[17px] leading-[1.6] text-body m-0">
              Search by role, skill or language — Testlify pulls a job-ready assessment in minutes, every test expert-validated and bias-checked.
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="flex items-center gap-3 bg-white border-[1.5px] border-[#F0E2E3] rounded-2xl px-5 py-4 shadow-[0_16px_30px_rgba(110,11,14,0.08)] max-w-[620px] mb-4 text-[#A9999C]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={libQuery}
                onChange={(e) => setLibQuery(e.target.value)}
                placeholder="Search tests by role, skill or language…"
                className="flex-1 min-w-0 border-none outline-none bg-transparent font-[inherit] text-[15.5px] text-ink font-medium placeholder:text-[#A9999C] placeholder:font-medium"
              />
            </div>
            <div className="flex flex-wrap gap-[9px] mb-9">
              {LIB_CATS.map(([key, label]) => {
                const on = libCat === key;
                return (
                  <span
                    key={key}
                    onClick={() => setLibCat(key)}
                    className={`text-[13.5px] font-semibold rounded-full px-[15px] py-2 border-[1.5px] cursor-pointer transition-colors duration-200 ${
                      on
                        ? 'bg-ink text-white border-ink'
                        : 'bg-white text-[#6C5A5D] border-[#F0E2E3] hover:border-coral hover:text-coral'
                    }`}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </Reveal>

          <p className="text-[13.5px] font-semibold text-muted m-0 mb-4">{libCount}</p>

          {libResults.length > 0 ? (
            <div className="grid grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
              {libResults.slice(0, 6).map((t) => (
                <a
                  key={t.n}
                  href="#library"
                  className="tlib-card2 relative flex flex-col bg-white border border-[#F0E2E3] rounded-2xl p-5 transition-all duration-[250ms] hover:-translate-y-1 hover:border-coral hover:shadow-[0_22px_46px_rgba(110,11,14,0.12)]"
                >
                  <div className="flex items-center justify-between gap-2.5 mb-3">
                    <span className="text-[10.5px] font-bold tracking-[0.05em] uppercase text-coral bg-[#FFF0F0] border border-[#FBD0D1] px-2.5 py-1 rounded-full whitespace-nowrap">
                      {LIB_LABEL[t.c] || t.c}
                    </span>
                    <span className="text-[12px] font-semibold text-muted whitespace-nowrap">{t.f}</span>
                  </div>
                  <p className="text-[17px] font-bold tracking-[-0.3px] text-ink m-0 mb-4 leading-[1.3]">{t.n}</p>
                  <div className="text-[12.5px] font-semibold text-muted mt-auto">
                    {t.q} questions · {t.m} min
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-11 px-5 text-muted text-[15px] font-semibold bg-white border border-dashed border-[#F0E2E3] rounded-2xl">
              No tests match — try another role or skill.
            </div>
          )}

          <Reveal className="flex items-center justify-between flex-wrap gap-5 mt-9">
            <div className="flex flex-wrap gap-6 text-[14px] text-[#6C5A5D] font-semibold">
              <span><b className="text-ink">3,500+</b> tests</span>
              <span><b className="text-ink">4,500+</b> roles</span>
              <span><b className="text-ink">45+</b> coding languages</span>
              <span><b className="text-ink">13+</b> question formats</span>
            </div>
            <a
              href="#library"
              className="btn-sheen inline-flex items-center gap-[9px] bg-coral text-white font-semibold text-[16px] px-[26px] py-[14px] rounded-2xl shadow-[0_14px_30px_rgba(242,63,68,0.32)] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(242,63,68,0.42)]"
            >
              Browse the full library
              <span className="text-[18px]">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ SKILLS INTELLIGENCE ============ */}
      <section id="intelligence" className="px-7" style={{ padding: '96px 28px', background: '#FBF3EE' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div
            className="dwrap max-[900px]:grid-cols-1!"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 54, alignItems: 'center' }}
          >
            <div>
              <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
                Skills intelligence<span className="text-coral">.</span>
              </Reveal>
              <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 text-ink">
                From application to ranked shortlist — automatically
              </Reveal>
              <Reveal as="p" delay={0.1} className="text-[17.5px] leading-[1.6] text-body mt-[22px] mb-0">
                Every candidate is scored the moment they finish. Testlify validates skills, weighs them against the role, and surfaces your strongest people — no spreadsheets, no bias, no waiting.
              </Reveal>
              <Reveal delay={0.16} className="flex flex-col gap-3.5 mt-7">
                {[
                  'Objective, role-weighted skill scoring',
                  'Automatic, bias-controlled ranking',
                  'Shortlist-ready in minutes, not days',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <span className="w-[30px] h-[30px] rounded-[9px] bg-[#FFF0F0] border border-[#FBD0D1] flex items-center justify-center text-coral text-[14px] font-bold shrink-0">✓</span>
                    <span className="text-[15.5px] font-medium text-[#33282B]">{t}</span>
                  </div>
                ))}
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <Dashboard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT DEMO TABS ============ */}
      <section id="demo" className="px-7" style={{ padding: '96px 28px', background: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 40px' }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              See it in action<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[46px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink">
              One platform, the whole funnel
            </Reveal>
          </div>
          <Reveal delay={0.1} className="demo-tabs flex justify-center gap-3 mb-[34px] max-[900px]:flex-wrap">
            {DEMO_TABS.map((t) => {
              const on = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className="font-semibold text-[15.5px] px-[22px] py-3 rounded-[13px] cursor-pointer transition-all duration-300"
                  style={{
                    border: on ? '1.5px solid #F23F44' : '1.5px solid #F0D9DA',
                    background: on ? '#F23F44' : '#fff',
                    color: on ? '#fff' : '#1A1014',
                    boxShadow: on ? '0 10px 24px rgba(242,63,68,.3)' : 'none',
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </Reveal>

          <div
            style={{
              position: 'relative',
              background: '#fff',
              border: '1px solid #F2E6E7',
              borderRadius: 26,
              boxShadow: '0 26px 60px rgba(110,11,14,.10)',
              padding: 30,
              minHeight: 380,
            }}
          >
            <DemoPanel active={tab === 0}>
              <PanelGrid>
                <div>
                  <PanelPill>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
                    Screens 248 resumes in 11 seconds
                  </PanelPill>
                  <h3 className="text-[27px] font-bold tracking-[-0.6px] m-0 mb-3 text-ink">AI reads every résumé so you don&apos;t have to</h3>
                  <p className="text-[16px] leading-[1.6] text-body m-0 mb-[18px]">Every applicant is scored against the role&apos;s must-have skills and ranked instantly — surfacing real signal long before the first interview.</p>
                  <div className="flex flex-col gap-2.5">
                    <PanelCheck>Knockout questions &amp; must-have filters</PanelCheck>
                    <PanelCheck>Bias-controlled, explainable scoring</PanelCheck>
                  </div>
                </div>
                <div className="bg-[#FFF8F8] border border-[#F4E4E5] rounded-[18px] p-[18px]">
                  <div className="flex justify-between items-center mb-3.5">
                    <span className="text-[13px] font-bold text-muted tracking-[0.3px]">SCREENING QUEUE</span>
                    <span className="text-[12px] font-semibold text-coral bg-white border border-[#FBD0D1] px-2.5 py-1 rounded-lg">
                      <span className="tl-livedot" />Live
                    </span>
                  </div>
                  <div className="tl-screencre">
                    <div className="tl-scanbeam" />
                    <div className="flex flex-col gap-[9px]">
                      {[
                        { av: 'JL', g: 'linear-gradient(135deg,#F76A6E,#F23F44)', name: 'Jordan L.', meta: 'React · TypeScript · 6 yrs', sc: '94', sc_c: '#F23F44', inkAv: false },
                        { av: 'AM', g: 'linear-gradient(135deg,#FBA3A5,#F76A6E)', name: 'Aisha M.', meta: 'Vue · CSS · 4 yrs', sc: '88', sc_c: '#A91E23', inkAv: false },
                        { av: 'RK', g: 'linear-gradient(135deg,#FDD5D6,#FBA3A5)', name: 'Rahul K.', meta: 'Angular · 5 yrs', sc: '81', sc_c: '#C13238', inkAv: true },
                      ].map((r) => (
                        <div key={r.av} className="flex items-center gap-[11px] bg-white border border-[#F2E6E7] rounded-xl px-[13px] py-[11px]">
                          <span style={{ width: 34, height: 34, borderRadius: 9, background: r.g, color: r.inkAv ? '#A91E23' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13 }}>{r.av}</span>
                          <div className="flex-1">
                            <div className="font-semibold text-[14px]">{r.name}</div>
                            <div className="text-[12px] text-muted">{r.meta}</div>
                          </div>
                          <span className="font-bold text-[15px]" style={{ color: r.sc_c }}>{r.sc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PanelGrid>
            </DemoPanel>

            <DemoPanel active={tab === 1}>
              <PanelGrid>
                <div>
                  <PanelPill>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                    3,500+ expert-validated tests
                  </PanelPill>
                  <h3 className="text-[27px] font-bold tracking-[-0.6px] m-0 mb-3 text-ink">A test for every role, skill and level</h3>
                  <p className="text-[16px] leading-[1.6] text-body m-0 mb-[18px]">Role-specific, cognitive, coding, language and personality assessments — or let AI generate a custom one from your job description in under a minute.</p>
                  <div className="flex flex-wrap gap-[9px]">
                    {['Coding', 'Cognitive', 'Language', 'Personality', 'Situational'].map((t) => (
                      <span key={t} className="text-[13.5px] font-semibold text-coral-deep bg-[#FFF0F0] border border-[#FBD0D1] px-[13px] py-[7px] rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#FFF8F8] border border-[#F4E4E5] rounded-[18px] p-5">
                  <div className="text-[12px] font-bold text-muted tracking-[0.3px] mb-3">SAMPLE QUESTION · JAVASCRIPT</div>
                  <div className="text-[15.5px] font-semibold text-ink leading-[1.5] mb-4">
                    What does <span className="font-mono bg-[#FFF0F0] text-coral-deep px-[7px] py-0.5 rounded-md">Array.prototype.flat()</span> return on a nested array by default?
                  </div>
                  <div className="flex flex-col gap-[9px]">
                    <div className="tl-optglow flex items-center gap-[11px] bg-white border-[1.5px] border-[#FBD0D1] rounded-[11px] px-3.5 py-3 text-[14.5px] font-medium">
                      <span className="w-[22px] h-[22px] rounded-full bg-coral text-white flex items-center justify-center text-[12px] font-bold">A</span>
                      Flattens one level deep
                      <span className="tl-okbadge ml-auto inline-flex items-center gap-[5px] text-[11.5px] font-bold text-[#1F8A5B] bg-[#E3F5EE] px-[9px] py-1 rounded-md">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        Correct
                      </span>
                    </div>
                    <div className="flex items-center gap-[11px] bg-white border border-[#F2E6E7] rounded-[11px] px-3.5 py-3 text-[14.5px] font-medium text-body">
                      <span className="w-[22px] h-[22px] rounded-full bg-[#F4EBEC] text-muted flex items-center justify-center text-[12px] font-bold">B</span>
                      Flattens infinitely
                    </div>
                    <div className="flex items-center gap-[11px] bg-white border border-[#F2E6E7] rounded-[11px] px-3.5 py-3 text-[14.5px] font-medium text-body">
                      <span className="w-[22px] h-[22px] rounded-full bg-[#F4EBEC] text-muted flex items-center justify-center text-[12px] font-bold">C</span>
                      Throws a TypeError
                    </div>
                  </div>
                </div>
              </PanelGrid>
            </DemoPanel>

            <DemoPanel active={tab === 2}>
              <PanelGrid>
                <div>
                  <PanelPill>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
                    One-way &amp; live interviews
                  </PanelPill>
                  <h3 className="text-[27px] font-bold tracking-[-0.6px] m-0 mb-3 text-ink">Structured interviews everyone scores fairly</h3>
                  <p className="text-[16px] leading-[1.6] text-body m-0 mb-[18px]">Async and live video with shared scorecards, so every reviewer judges the same things the same way — and bias has nowhere to hide.</p>
                  <div className="flex flex-col gap-2.5">
                    <PanelCheck>Pre-set questions &amp; rating rubrics</PanelCheck>
                    <PanelCheck>Side-by-side candidate comparison</PanelCheck>
                  </div>
                </div>
                <div className="bg-[#FFF8F8] border border-[#F4E4E5] rounded-[18px] p-[18px]">
                  <div
                    className="tl-stripemove"
                    style={{
                      position: 'relative',
                      borderRadius: 14,
                      overflow: 'hidden',
                      background: 'repeating-linear-gradient(135deg,#FBE4E5,#FBE4E5 12px,#FDD5D6 12px,#FDD5D6 24px)',
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 14,
                    }}
                  >
                    <span className="tl-playpulse" style={{ position: 'relative', width: 54, height: 54, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F23F44', fontSize: 18, boxShadow: '0 8px 22px rgba(110,11,14,.18)' }}>▶</span>
                    <span style={{ position: 'absolute', top: 10, right: 12, background: 'rgba(26,16,20,.78)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 9px', borderRadius: 7 }}>
                      <span className="tl-recdot" />REC
                    </span>
                    <span style={{ position: 'absolute', bottom: 10, left: 12, background: 'rgba(26,16,20,.78)', color: '#fff', fontSize: 11.5, fontWeight: 600, padding: '4px 10px', borderRadius: 7 }}>Q2 · Tell us about a tradeoff you made</span>
                  </div>
                  <div className="text-[12px] font-bold text-muted tracking-[0.3px] mb-[9px]">SCORECARD</div>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'Communication', filled: 5 },
                      { label: 'Problem solving', filled: 4 },
                      { label: 'Culture add', filled: 5 },
                    ].map((r) => (
                      <div key={r.label} className="flex justify-between items-center text-[14px]">
                        <span className="text-[#33282B]">{r.label}</span>
                        <span className="tl-starseq text-coral tracking-[1px]">
                          {[0, 1, 2, 3, 4].map((s) => (
                            <i key={s} style={{ fontStyle: 'normal', opacity: s < r.filled ? undefined : 0.28 }}>★</i>
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </PanelGrid>
            </DemoPanel>
          </div>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section id="usecases" className="px-7" style={{ padding: '96px 28px', background: '#FBF3EE' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ maxWidth: 720, margin: '0 0 8px' }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              Built for every hiring scenario<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-3.5 text-ink">
              One platform, every way you hire
            </Reveal>
            <Reveal as="p" delay={0.12} className="text-[17px] leading-[1.6] text-body m-0">
              From high-volume frontline roles to senior leadership, teams use Testlify to hire fairly and fast across every function and region.
            </Reveal>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-[46px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            {USE_CASES.map((u, i) => (
              <Reveal key={u.title} delay={(i % 4) * 0.06}>
                <UseCaseCard icon={u.icon} title={u.title} desc={u.desc} href="#" tint={u.tint} ink={u.ink} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section id="voices" className="px-7" style={{ padding: '96px 28px', background: '#fff' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
          <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
            Loved by HR teams<span className="text-coral">.</span>
          </Reveal>
          <Reveal as="h2" delay={0.06} className="text-[46px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 mb-11 text-ink">
            Hiring managers don&apos;t go back
          </Reveal>
          <Reveal delay={0.1} className="relative max-w-[1060px] mx-auto">
            <div
              className="rounded-[26px] overflow-hidden"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div
                ref={trackRef}
                className="flex"
                onMouseDown={(e) => dragStart(e.clientX)}
                onTouchStart={(e) => dragStart(e.touches[0].clientX)}
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                  transition: noTransition ? 'none' : 'transform .62s cubic-bezier(.22,.61,.36,1)',
                  cursor: dragging ? 'grabbing' : 'grab',
                  touchAction: 'pan-y',
                }}
              >
                {[...TESTIMONIALS, TESTIMONIALS[0]].map((t, i) => (
                  <div key={i} style={{ flex: '0 0 100%', padding: 6 }}>
                    <div className="tl-tcard2">
                      <div className="tl-tphoto">
                        <img src={t.img} alt={t.name} draggable={false} />
                        <span className="tl-g2badge"><b>G2</b>5.0 ★</span>
                      </div>
                      <div className="tl-tcontent">
                        <div className="tl-tquotemark">&quot;</div>
                        <div className="tl-tstars">★★★★★</div>
                        <p className="tl-tquote2">{t.quote}</p>
                        <div>
                          <div className="tl-tname2">{t.name}</div>
                          <div className="tl-trole2">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={goPrev} aria-label="Previous" className="tl-tnav" style={{ left: -22 }}>‹</button>
            <button onClick={goNext} aria-label="Next" className="tl-tnav" style={{ right: -22 }}>›</button>
          </Reveal>
          <div className="flex justify-center gap-[9px] mt-[26px]">
            {TESTIMONIALS.map((_, i) => (
              <span
                key={i}
                onClick={() => {
                  setSlide(i);
                  setSlideBump((b) => b + 1);
                }}
                style={{
                  width: activeDot === i ? 26 : 9,
                  height: 9,
                  borderRadius: 6,
                  background: activeDot === i ? '#F23F44' : '#FBD0D1',
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section id="stats" style={{ padding: 0, background: '#FFF8F7' }}>
        <div style={{ maxWidth: '100%', margin: 0 }}>
          <div
            style={{
              position: 'relative',
              borderRadius: 0,
              overflow: 'hidden',
              padding: '74px 40px 92px',
              background: 'linear-gradient(165deg,#2A0E10 0%,#1A0A0C 60%,#12080A 100%)',
              border: '1px solid transparent',
              boxShadow: '0 30px 70px rgba(0,0,0,.18)',
            }}
          >
            <StatsNetCanvas active={statActive} />
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 2,
                pointerEvents: 'none',
                background: 'linear-gradient(180deg,#160A0C 0%,rgba(18,8,10,0) 32%)',
              }}
            />

            <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', maxWidth: 1180, margin: '0 auto', pointerEvents: 'none' }}>
              <Reveal
                as="p"
                className="text-[14px] font-bold tracking-[1px] uppercase m-0 mb-3.5"
                style={{ color: '#B5A4A7' }}
              >
                Global reach<span style={{ color: '#F23F44' }}>.</span>
              </Reveal>
              <Reveal
                as="h2"
                delay={0.06}
                className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] mx-auto mb-3 max-w-[1000px] text-white"
              >
                Find the best talent anywhere in the world
              </Reveal>
              <Reveal
                as="p"
                delay={0.1}
                className="text-[16.5px] leading-[1.6] mx-auto mb-[50px] max-w-[540px]"
                style={{ color: 'rgba(255,255,255,.66)' }}
              >
                A smooth, simple hiring experience that candidates and hiring teams love every step of the way.
              </Reveal>
              <Reveal delay={0.14} className="grid grid-cols-4 gap-6 text-center max-[900px]:grid-cols-2">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    onMouseEnter={() => setStatActive(i)}
                    className={`gr2stat${statActive === i ? ' active' : ''}`}
                    style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                  >
                    <div className="text-[52px] font-extrabold tracking-[-2px] leading-none text-white">
                      <CountUp target={s.count} suffix={s.suffix} />
                    </div>
                    <div className="text-[14.5px] font-medium mt-2.5" style={{ color: 'rgba(255,255,255,.6)' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section id="integrations" className="px-7" style={{ padding: '96px 28px', background: 'transparent' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 44px' }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              Integrations<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-3.5 text-ink">
              Connected to 100+ ATS tools
            </Reveal>
            <Reveal as="p" delay={0.12} className="text-[17px] leading-[1.6] text-body m-0">
              Native two-way sync with Workday, Greenhouse, Lever and 97 more — no middleware, no data mapping.
            </Reveal>
          </div>
          <Reveal delay={0.16} className="grid grid-cols-5 gap-3.5 max-[900px]:grid-cols-3">
            {INTEGRATIONS.map(([src, alt]) => (
              <div key={alt} className="tl-intg-tile">
                <img src={src} alt={alt} />
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="text-center mt-[26px]">
            <a href="#" className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]">
              View all integrations<span>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ SECURITY ============ */}
      <section id="security">
        <SecuritySection
          eyebrow="Security & compliance"
          heading="Built to keep your organization secure"
          sub="Audited controls, strong data governance and privacy protections — every assessment validated and EEOC-defensible."
        />
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="px-7" style={{ padding: '96px 28px', background: '#FBF3EE' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 38px' }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              FAQ<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 text-ink">
              Questions, answered
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ---------- sub-components ---------- */

function HowStage({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity: active ? 1 : 0,
        transition: 'opacity .4s ease, transform .4s ease',
        transform: active ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: active ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  );
}

function PanelGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid grid-cols-2 gap-[26px] items-center max-[900px]:grid-cols-1"
      style={{ alignItems: 'center' }}
    >
      {children}
    </div>
  );
}

function DemoPanel({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: active ? 'block' : 'none',
        animation: active ? 'tl-fadein .35s ease' : undefined,
      }}
    >
      {children}
    </div>
  );
}

function PanelPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#FFF0F0] text-coral-deep font-semibold text-[13px] px-3.5 py-[7px] rounded-full mb-4">
      {children}
    </div>
  );
}

function PanelCheck({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[15px] text-[#33282B]">
      <span className="w-[22px] h-[22px] rounded-full bg-[#FFF0F0] text-coral flex items-center justify-center text-[12px] font-bold">✓</span>
      {children}
    </div>
  );
}

/* Skills-intelligence dashboard with looping rAF animation */
function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    const gfill = panel.querySelector<SVGCircleElement>('[data-gfill]');
    const gv = panel.querySelector<HTMLElement>('[data-gauge]');
    const scan = panel.querySelector<HTMLElement>('[data-dscan]');
    const sks = Array.from(panel.querySelectorAll<HTMLElement>('[data-sk]'));
    const skvs = Array.from(panel.querySelectorAll<HTMLElement>('[data-skv]'));
    const rows = Array.from(panel.querySelectorAll<HTMLElement>('[data-rank]'));
    if (!gfill) return;
    const C = 2 * Math.PI * 52;
    gfill.style.strokeDasharray = String(C);
    gfill.style.strokeDashoffset = String(C);
    const target = 94;
    const cycle = 7600;
    const ease = (p: number) => (p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.pow(1 - p, 3));
    const seg = (t: number, a: number, b: number) => ease(Math.min(Math.max((t - a) / (b - a), 0), 1));
    let raf = 0;
    const tick = (now: number) => {
      const t = (now % cycle) / cycle;
      const gp = seg(t, 0.1, 0.46);
      gfill.style.strokeDashoffset = String(C * (1 - gp * (target / 100)));
      if (gv) gv.textContent = String(Math.round(target * gp));
      sks.forEach((el, i) => {
        const v = parseFloat(el.getAttribute('data-sk') || '0');
        const sp = seg(t, 0.22 + i * 0.05, 0.55 + i * 0.05);
        el.style.width = v * sp + '%';
        if (skvs[i]) skvs[i].textContent = Math.round(v * sp) + '%';
      });
      rows.forEach((el) => {
        const idx = parseInt(el.getAttribute('data-rank') || '1', 10) - 1;
        const rp = seg(t, 0.04 + idx * 0.08, 0.3 + idx * 0.08);
        el.style.opacity = String(rp);
        if (el.getAttribute('data-rank') === '1') {
          const won = t > 0.52;
          el.classList.toggle('won', won);
          const pop = won ? 1 + 0.025 * Math.max(0, 1 - (t - 0.52) / 0.12) : 1;
          el.style.transform = `translateX(${((1 - rp) * 26).toFixed(1)}px) scale(${pop.toFixed(3)})`;
        } else {
          el.style.transform = `translateX(${((1 - rp) * 26).toFixed(1)}px)`;
        }
      });
      if (scan) {
        const sp = (t % 0.5) / 0.5;
        scan.style.transform = `translateY(${(sp * 460).toFixed(0)}px)`;
        scan.style.opacity = String(t < 0.5 ? 0.6 * (1 - sp) : 0);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        background: '#fff',
        border: '1px solid #F2E6E7',
        borderRadius: 22,
        overflow: 'hidden',
        boxShadow: '0 30px 70px rgba(110,11,14,.14)',
      }}
    >
      <div data-dscan style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 120, background: 'linear-gradient(180deg,rgba(242,63,68,.14),transparent)', pointerEvents: 'none', opacity: 0.7 }} />
      <div className="flex items-center gap-2 px-[18px] py-3.5" style={{ boxShadow: 'inset 0 -1px 0 #F4E4E5' }}>
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: '#FF5F57' }} />
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: '#FEBC2E' }} />
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: '#28C840' }} />
        <span className="text-[13px] font-semibold text-muted ml-2">Testlify · Assessment results</span>
        <span className="ml-auto text-[11px] font-bold tracking-[0.04em] text-coral inline-flex items-center gap-1.5">
          <i className="tl-dashlive" />Live scoring
        </span>
      </div>
      <div className="grid items-center gap-[26px] p-[26px] max-[900px]:grid-cols-1" style={{ gridTemplateColumns: 'auto 1fr' }}>
        <div style={{ position: 'relative', width: 148, height: 148, flex: 'none' }}>
          <svg viewBox="0 0 120 120" style={{ width: 148, height: 148, transform: 'rotate(-90deg)' }}>
            <defs>
              <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#F23F44" />
                <stop offset="1" stopColor="#FF8A6B" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="52" fill="none" stroke="#F4E4E5" strokeWidth="9" />
            <circle data-gfill cx="60" cy="60" r="52" fill="none" stroke="url(#gg)" strokeWidth="9" strokeLinecap="round" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="text-[38px] font-extrabold text-ink tracking-[-0.03em] leading-none">
              <span data-gauge>0</span>
              <i style={{ fontSize: 18, fontStyle: 'normal', color: '#F23F44', marginLeft: 1 }}>%</i>
            </div>
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-muted mt-1.5">Skill match</div>
          </div>
        </div>
        <div className="flex flex-col gap-[13px]">
          {[
            ['JavaScript', 92],
            ['Problem solving', 88],
            ['Communication', 95],
            ['Cognitive ability', 90],
          ].map(([label, v]) => (
            <div key={label as string} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[13px] font-semibold text-body">
                <span>{label}</span>
                <b data-skv className="text-ink font-bold">0%</b>
              </div>
              <div className="h-[7px] rounded-[7px] bg-[#F4EBEC] overflow-hidden">
                <div data-sk={v} className="h-full rounded-[7px]" style={{ width: 0, background: 'linear-gradient(90deg,#F23F44,#FF8A6B)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[9px] px-[26px] pb-[26px]">
        {[
          { r: '1', av: 'AK', g: 'linear-gradient(135deg,#F23F44,#FF7A52)', name: 'Aanya Kapoor', role: 'Senior Frontend Engineer', sc: '94', badge: true },
          { r: '2', av: 'DM', g: 'linear-gradient(135deg,#7C3AED,#F23F44)', name: 'Diego Morales', role: 'Senior Frontend Engineer', sc: '87', badge: false },
          { r: '3', av: 'LC', g: 'linear-gradient(135deg,#0EA5A4,#2A6FDB)', name: 'Lin Chen', role: 'Senior Frontend Engineer', sc: '82', badge: false },
        ].map((r) => (
          <div key={r.r} data-rank={r.r} className="tl-rankrow flex items-center gap-3 px-3 py-2.5 rounded-xl">
            <span className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0" style={{ background: r.g }}>{r.av}</span>
            <div>
              <div className="text-[14px] font-semibold text-ink">{r.name}</div>
              <div className="text-[11.5px] text-muted">{r.role}</div>
            </div>
            {r.badge && <span className="tl-rankbadge">Top match</span>}
            <span className="tl-rankscore ml-auto text-[15px] font-extrabold text-ink tracking-[-0.02em]">{r.sc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
