'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:84px 28px;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.h2{font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1.2px;margin:0;color:#1A1014;}
.h3{font-size:20px;line-height:1.25;font-weight:700;letter-spacing:-.3px;margin:0;color:#1A1014;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-weight:600;font-size:15.5px;font-family:inherit;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease, border-color .2s;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.btn-ghost{background:#fff;color:#1A1014;border:1.5px solid #EADDDE;}
.btn-ghost:hover{transform:translateY(-2px);border-color:#F2B7B9;box-shadow:0 10px 24px rgba(110,11,14,.08);}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
/* hero */
.dhero{background:radial-gradient(1000px 520px at 82% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;padding:44px 28px 74px;}
.crumb{font-size:13px;color:#9A878A;font-weight:600;margin:0 0 28px;display:flex;align-items:center;gap:9px;flex-wrap:wrap;}
.crumb a{color:#F23F44;}
.crumb .sep{color:#D6C4C7;}
.dgrid{display:grid;grid-template-columns:1fr 384px;gap:52px;align-items:start;}
.dtag{display:inline-flex;align-items:center;gap:7px;background:#FFF0F0;color:#C0242B;font-size:12px;font-weight:700;letter-spacing:.04em;padding:6px 13px;border-radius:999px;}
.dtitle{font-size:46px;line-height:1.05;font-weight:800;letter-spacing:-1.8px;margin:17px 0 16px;}
.dlede{font-size:18px;line-height:1.62;color:#5A4B4E;margin:0;max-width:600px;}
.td-langs{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:26px;}
.td-langs .lab{font-size:12.5px;color:#9A878A;font-weight:600;margin-right:2px;}
.td-lang{font-size:12.5px;font-weight:600;color:#46383C;background:#fff;border:1px solid #EFDDDE;padding:5px 12px;border-radius:100px;}
.td-ai{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:24px;}
.td-ai .lab{font-size:12px;color:#A9999C;font-weight:500;}
.td-aichip{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;font-weight:600;color:#9A868A;background:#FAF4F2;border:1px solid #F0E6E4;padding:4px 9px;border-radius:100px;}
.td-aichip svg{color:#C9B0B3;}
/* action card */
.card{position:sticky;top:120px;background:#fff;border:1px solid #EFE2E3;border-radius:22px;padding:26px;box-shadow:0 24px 60px rgba(110,11,14,.10);}
.card-h{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:4px;}
.card-h .lv{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:4px 11px;border-radius:100px;background:#FFF3E0;color:#B5740F;}
.spec{list-style:none;margin:16px 0 22px;padding:0;}
.spec li{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid #F4E7E8;font-size:14px;}
.spec li:last-child{border-bottom:0;}
.spec .k{color:#8A7A7D;font-weight:500;display:inline-flex;align-items:center;gap:9px;}
.spec .k svg{color:#C0989B;flex:none;}
.spec .v{color:#1A1014;font-weight:700;text-align:right;}
.card .btn{width:100%;}
.card-inc{list-style:none;margin:20px 0 0;padding:16px 0 0;border-top:1px solid #F4E7E8;display:flex;flex-direction:column;gap:10px;}
.card-inc li{display:flex;align-items:flex-start;gap:9px;font-size:13px;color:#46383C;line-height:1.4;}
.card-inc svg{flex:none;margin-top:1px;color:#1FA463;}
.td-note{font-size:12px;color:#9A878A;text-align:center;margin:12px 0 0;}
.td-ticks{display:flex;align-items:center;gap:26px;flex-wrap:wrap;margin-top:18px;font-size:14.5px;color:#8A7A7D;font-weight:500;}
.td-ticks .tick{display:inline-flex;align-items:center;gap:7px;}
.td-ticks .tk{color:#F23F44;font-weight:700;}
/* section head */
.td-sh{max-width:680px;margin:0 0 36px;}
.td-sh.ctr{margin-left:auto;margin-right:auto;text-align:center;}
/* roles */
.td-roles{display:flex;flex-wrap:wrap;gap:9px;margin-top:8px;}
.td-role{font-size:14px;font-weight:600;color:#46383C;background:#fff;border:1px solid #EFDDDE;padding:9px 16px;border-radius:100px;transition:all .16s;}
.td-role:hover{border-color:#F4B9BB;color:#C0242B;}
/* prose */
.prose p{font-size:16px;line-height:1.72;color:#5A4B4E;margin:0 0 16px;}
.prose{max-width:760px;}
/* skills grid */
.skgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.skcard{background:#fff;border:1.4px solid #EFE1E2;border-radius:16px;padding:26px 24px;box-shadow:0 16px 30px rgba(110,11,14,.05);transition:transform .28s cubic-bezier(.2,.7,.3,1),box-shadow .28s,border-color .28s;}
.skcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 36px rgba(110,11,14,.10);}
.skhead{display:flex;align-items:center;gap:13px;margin-bottom:13px;}
.skic{flex:none;width:44px;height:44px;border-radius:12px;background:#FFF0EF;color:#F23F44;font-size:15px;font-weight:700;display:flex;align-items:center;justify-content:center;}
.skname{font-size:17px;font-weight:700;color:#1A1014;margin:0;letter-spacing:-.3px;}
.skdesc{font-size:13.5px;line-height:1.62;color:#6C5A5D;margin:0;}
@media(max-width:960px){.skgrid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:600px){.skgrid{grid-template-columns:1fr;}}
/* accordion */
.acc{display:flex;flex-direction:column;gap:12px;}
.ai{background:#fff;border:1.4px solid #EFE1E2;border-radius:16px;overflow:hidden;transition:box-shadow .2s,border-color .2s;}
.ai.on{border-color:#F4C7C8;box-shadow:0 14px 30px rgba(110,11,14,.07);}
.ah{display:flex;align-items:center;gap:15px;width:100%;background:none;border:0;font-family:inherit;cursor:pointer;padding:20px 22px;text-align:left;transition:background .16s;}
.ah:hover{background:#FFFAF9;}
.anum{flex:none;width:30px;height:30px;border-radius:8px;background:#FFF0EF;color:#F23F44;font-size:12.5px;font-weight:700;display:flex;align-items:center;justify-content:center;}
.at{font-size:16.5px;font-weight:700;color:#1A1014;letter-spacing:-.2px;}
.acar{margin-left:auto;color:#C0989B;display:flex;transition:transform .24s cubic-bezier(.2,.7,.3,1);}
.ai.on .acar{transform:rotate(180deg);color:#F23F44;}
.ab{padding:0 22px 22px 67px;}
.ab.flush{padding-left:22px;}
.ab p{margin:0;font-size:15px;line-height:1.64;color:#5A4B4E;}
.absub{margin-top:15px;}
.absub h4{font-size:11.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#C0242B;margin:0 0 5px;}
.absub p{color:#5A4B4E;}
/* faq groups */
.faqcols{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start;}
.faqcol h3{font-size:15px;font-weight:700;letter-spacing:.02em;color:#1A1014;margin:0 0 14px;}
/* sme */
.smegrid{display:grid;grid-template-columns:1fr 420px;gap:44px;align-items:center;}
.smecard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px;box-shadow:0 18px 40px rgba(110,11,14,.07);}
.smebadge{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.04em;color:#1FA463;background:#E8F6EE;padding:6px 13px;border-radius:100px;margin-bottom:16px;}
.smecard p{font-size:14.5px;line-height:1.62;color:#5A4B4E;margin:0;}
.smelink{display:inline-flex;align-items:center;gap:7px;margin-top:22px;font-size:15px;font-weight:700;color:#F23F44;}
.smelink svg{transition:transform .2s;}
.smelink:hover svg{transform:translateX(4px);}
/* related */
.relgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.relcard{background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:24px;transition:transform .22s ease, box-shadow .22s ease, border-color .22s;}
.relcard:hover{transform:translateY(-4px);box-shadow:0 20px 42px rgba(110,11,14,.10);border-color:#F4D2D3;}
.reltop{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}
.relic{width:42px;height:42px;border-radius:11px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.reltag{font-size:11px;font-weight:700;letter-spacing:.03em;padding:4px 10px;border-radius:100px;background:#F7ECEC;color:#8A767A;}
/* dark cta */
.ctaband{background:radial-gradient(900px 460px at 50% 0%,#2A1417 0%,#1A1014 60%);color:#fff;text-align:center;}
.ctaband h2{color:#fff;font-size:40px;}
.ctaband p{font-size:18px;color:rgba(255,255,255,.80);margin:18px auto 30px;max-width:560px;line-height:1.6;}
/* sample questions carousel */
.sqctrl{display:flex;gap:10px;}
.sqbtn{width:46px;height:46px;border-radius:50%;border:1.5px solid #EADDDE;background:#fff;color:#1A1014;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:border-color .2s,color .2s,box-shadow .2s,transform .2s;}
.sqbtn:hover{border-color:#F4B9BB;color:#F23F44;box-shadow:0 8px 20px rgba(110,11,14,.08);transform:translateY(-1px);}
.sqtrack{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;padding:6px 2px 14px;scrollbar-width:none;-ms-overflow-style:none;}
.sqtrack::-webkit-scrollbar{display:none;}
.sqcard{flex:0 0 384px;scroll-snap-align:start;display:flex;flex-direction:column;background:#fff;border:1.4px solid #F1DADB;border-radius:18px;padding:26px;box-shadow:0 18px 40px rgba(110,11,14,.08);}
.sqchead{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
.sqnum{width:34px;height:34px;border-radius:10px;background:#FFF0EF;color:#F23F44;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;}
.sqtype{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#8A767A;background:#FBF3EE;padding:5px 11px;border-radius:100px;}
.sqtitle{font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#C0242B;margin:0 0 8px;}
.sqq{font-size:16px;line-height:1.45;font-weight:700;letter-spacing:-.2px;color:#1A1014;margin:0 0 18px;}
.sqopts{display:flex;flex-direction:column;gap:10px;margin-top:auto;}
.sqopt{display:flex;align-items:center;gap:11px;font-size:13.5px;line-height:1.4;color:#46383C;background:#FDFAF9;border:1px solid #F0E6E4;border-radius:11px;padding:11px 13px;}
.sqopt.correct{background:#EAF7EF;border-color:#9FDDB6;color:#136B3E;font-weight:600;}
.sqkey{flex:none;width:24px;height:24px;border-radius:7px;background:#FBF1F0;color:#C0242B;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;}
.sqkey.on{background:#1FA463;color:#fff;}
.sqnote{text-align:center;font-size:13.5px;color:#9A868A;margin:26px 0 0;}
@media(max-width:640px){.sqcard{flex:0 0 84%;}}
@media(max-width:920px){
  .dtitle{font-size:34px;letter-spacing:-1px;}
  .h2{font-size:27px;}
  .sec{padding:60px 22px;}
  .dgrid{grid-template-columns:1fr;gap:36px;}
  .card{position:static;}
  .smegrid{grid-template-columns:1fr;gap:30px;}
  .relgrid{grid-template-columns:1fr;}
  .faqcols{grid-template-columns:1fr;gap:16px;}
  .ctaband h2{font-size:30px;}
}
.td-ai{flex-wrap:nowrap;}
#ai-chatgpt,#ai-perplexity,#ai-gemini,#ai-grok,#ai-claude{width:24px !important;height:24px !important;flex:none !important;background:#fff;border:0 !important;border-radius:6px !important;overflow:hidden;vertical-align:middle;}
.td-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:36px;}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const pad2 = (n: number) => String(n).padStart(2, '0');

const languages = ['English', 'Dutch', 'French', 'German', 'Spanish'];
const aiTools = [
  { name: 'ChatGPT', slotId: 'ai-chatgpt' },
  { name: 'Perplexity', slotId: 'ai-perplexity' },
  { name: 'Gemini', slotId: 'ai-gemini' },
  { name: 'Grok', slotId: 'ai-grok' },
  { name: 'Claude', slotId: 'ai-claude' },
];

const summary = [
  "The React developer assessment evaluates a candidate's ability to use React.js to build interactive, dynamic user interfaces. Candidates are tested on React components, JSX syntax, state management and lifecycle methods, and their ability to apply these concepts to real, high-quality web applications.",
  'The test blends multiple-choice questions with hands-on coding challenges. MCQs cover topics like components, React Router, Redux and hooks; coding challenges require writing working React code to solve specific problems, graded against a hidden test suite for objective, instant scoring.',
  'It measures sub-skills such as component-based architecture, state management, performance optimization and debugging — helping you identify developers who can write efficient, reusable code and ship maintainable applications.',
];

const skills = [
  { name: 'HTML5', desc: 'The backbone of web development — structuring pages, content hierarchy and semantic markup. Ensures candidates write clean, accessible, SEO-friendly foundations for React components.' },
  { name: 'CSS', desc: 'Styling, layout and responsive design. Strong CSS lets candidates style components, handle cross-browser compatibility and create engaging, consistent user experiences.' },
  { name: 'Bootstrap', desc: 'Leveraging the framework’s grid, typography and ready-made components to rapidly build responsive React interfaces with consistent design across devices.' },
  { name: 'JavaScript', desc: 'The core language behind React. Covers syntax, data types, functions, DOM manipulation, events, async operations and modern ES6+ features for robust, performant apps.' },
  { name: 'jQuery', desc: 'DOM manipulation, event handling and AJAX. Valuable for working with legacy codebases or bridging existing jQuery plugins within React applications.' },
  { name: 'React.js', desc: 'Components, JSX, props and state, hooks and lifecycle. The central skill — building reusable, component-based UIs and managing rendering and reactivity.' },
  { name: 'Redux', desc: 'Predictable state management for larger apps — store, actions, reducers and middleware — and knowing when centralized state is the right tool.' },
  { name: 'OOP', desc: 'Object-oriented principles — encapsulation, inheritance and composition — applied to structuring maintainable, scalable front-end code.' },
  { name: 'DSA', desc: 'Data structures and algorithms fundamentals that show a candidate can reason about efficiency and solve non-trivial problems in code.' },
];

const roles = ['Frontend Developer', 'Full Stack Developer', 'JavaScript Developer', 'React Developer', 'React Native Developer', 'Software Developer', 'Web Developer', 'UI Developer', 'Senior Frontend Developer'];

const interview = [
  { q: 'Explain state in React and how it differs from props.', why: 'Understanding state and props is fundamental to React. It reveals whether a candidate grasps component architecture and how component data is managed and updated.', listen: 'An accurate account of state as internal, mutable component data and props as data passed from a parent — plus how each affects rendering and reactivity.' },
  { q: 'Describe the React component lifecycle methods and when they run.', why: 'Lifecycle knowledge is essential for managing behavior and performing actions at the right stage of a component’s life.', listen: 'Clear explanation of methods like componentDidMount, componentDidUpdate and componentWillUnmount (or effect equivalents), and using them for data fetching, updates and cleanup.' },
  { q: 'How do you handle form validation and input in React?', why: 'Forms are a common task; this assesses practical input handling and validation technique.', listen: 'Controlled components or libraries like Formik, handling input events, validation checks, error messaging and submission — with attention to UX and data integrity.' },
  { q: 'Explain React hooks and give examples of commonly used ones.', why: 'Hooks changed how state and lifecycle features work in functional components.', listen: 'Hooks as functions that add state/features to functional components, with examples like useState, useEffect and useContext and what each is for.' },
  { q: 'How do you optimize the performance of a React application?', why: 'Performance optimization is crucial for fast, efficient apps and shows depth of experience.', listen: 'Strategies like code splitting, lazy loading, memoization and avoiding needless re-renders, plus tools like React Profiler to find and fix bottlenecks.' },
];

const faqTest = [
  { q: 'What is the React Developer assessment?', a: 'A skill-evaluation test that measures a candidate’s proficiency in React.js, the popular JavaScript library for building user interfaces.' },
  { q: 'How do I use it for hiring?', a: 'Use it as a screening step: send it to candidates early to gauge React.js ability and make informed, skills-first shortlisting decisions.' },
  { q: 'What roles can I use it for?', a: 'React Developer, Frontend Developer, Full Stack Developer, UI Developer, JavaScript Developer, Web Developer, Software Developer and React Native Developer, among others.' },
  { q: 'What topics are covered?', a: 'HTML5, CSS, Bootstrap, JavaScript, jQuery, React.js, Redux, OOP and DSA.' },
  { q: 'Why is this assessment important?', a: 'It identifies candidates with the real skills to excel in React roles, so you hire developers who contribute effectively from day one.' },
];

const faqPlatform = [
  { q: 'Can I try a sample test first?', a: 'Yes — start a free trial to explore the platform hands-on and see how Testlify simplifies your hiring process.' },
  { q: 'How do I choose tests from the library?', a: 'Browse the Test Library by category — role-specific, language, programming, software skills, cognitive, situational judgment and more — or search by name.' },
  { q: 'What are ready-to-go tests?', a: 'Pre-built assessments ready for immediate use, no customization needed, spanning thousands of skills across every category.' },
  { q: 'Can you integrate with our ATS?', a: 'Yes — Testlify offers native integrations with popular ATS platforms like Lever, BambooHR, Greenhouse and JazzHR. Contact us for a specific ATS.' },
  { q: 'Are your tests valid and reliable?', a: 'Yes — tests are built by subject-matter experts and reviewed by I/O psychologists to ensure strong validity and reliability, with accurate results.' },
];

interface Opt { t: string; correct?: boolean }
const samples: { title: string; multi: boolean; ask: string; opts: Opt[] }[] = [
  { title: 'Side effects on mount', multi: false, ask: 'Which hook fetches data when a component mounts and cleans up when it unmounts?', opts: [{ t: 'useMemo' }, { t: 'useEffect', correct: true }, { t: 'useState' }, { t: 'useRef' }] },
  { title: 'Preventing wasted re-renders', multi: true, ask: 'Which techniques reduce unnecessary re-renders in a large list? Select all that apply.', opts: [{ t: 'Wrap each row in React.memo', correct: true }, { t: 'Memoize handlers with useCallback', correct: true }, { t: 'Create a new object literal every render' }, { t: 'Derive expensive values with useMemo', correct: true }] },
  { title: 'Updating state correctly', multi: false, ask: 'What is the correct way to update state based on its previous value?', opts: [{ t: 'Mutate the state variable directly' }, { t: 'Call setCount(count + 1) repeatedly' }, { t: 'Call setCount(prev => prev + 1)', correct: true }, { t: 'Reassign state outside setState' }] },
  { title: 'Rendering dynamic lists', multi: false, ask: 'Why does React need a stable key on each list item?', opts: [{ t: 'Keys should always be the array index' }, { t: 'Keys let React match items across renders', correct: true }, { t: 'Keys are optional and change nothing' }, { t: 'Keys must be unique across the whole app' }] },
  { title: 'Sharing state between components', multi: true, ask: 'Which are valid ways to share state between siblings? Select all that apply.', opts: [{ t: 'Lift the state up to a common parent', correct: true }, { t: 'Provide it through React Context', correct: true }, { t: 'Duplicate it in both and hope they sync' }, { t: 'Use a library like Redux', correct: true }] },
  { title: 'Memoizing expensive work', multi: false, ask: 'Which hook memoizes a costly calculated value between renders?', opts: [{ t: 'useEffect' }, { t: 'useCallback' }, { t: 'useMemo', correct: true }, { t: 'useState' }] },
];

const related = [
  { name: 'JavaScript (Mid-level)', meta: 'Async, DOM, ES6+ · 30 min', tag: 'Programming', ic: 'code' },
  { name: 'Redux', meta: 'State management · 20 min', tag: 'Programming', ic: 'layers' },
  { name: 'Node.js', meta: 'APIs & back-end · 30 min', tag: 'Programming', ic: 'server' },
];

function RelIcon({ k }: { k: string }) {
  const p = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (k === 'layers') return <svg {...p}><path d="M12 2l9 5-9 5-9-5z"></path><path d="M3 12l9 5 9-5"></path><path d="M3 17l9 5 9-5"></path></svg>;
  if (k === 'server') return <svg {...p}><rect x="2" y="3" width="20" height="8" rx="2"></rect><rect x="2" y="13" width="20" height="8" rx="2"></rect><path d="M6 7h.01M6 17h.01"></path></svg>;
  return <svg {...p}><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path></svg>;
}

const category = 'Role specific';
const tag = 'Role-specific skills';
const title = 'React Developer Test';
const lede = "Evaluate a candidate's proficiency with React.js — components, JSX, state management and lifecycle — to build scalable, responsive web applications. Built and peer-reviewed by senior engineers to predict on-the-job performance.";
const type = 'Coding + MCQ';
const duration = '35 min';
const questions = 35;
const level = 'Intermediate';
const skillsCount = skills.length;

export default function TestLibraryDetailPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const trackRef = useRef<HTMLDivElement>(null);
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));
  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Every test peer-reviewed by subject-matter experts" announcementCta="How we build tests" />

      <section className="dhero"><div className="wrap">
        <p className="crumb reveal in"><Link href="/test-library">Test library</Link><span className="sep">›</span><span>{category}</span><span className="sep">›</span><span>{title}</span></p>
        <div className="dgrid">
          <div>
            <span className="dtag reveal in"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>{tag}</span>
            <h1 className="dtitle reveal in">{title}</h1>
            <p className="dlede reveal in">{lede}</p>
            <div className="td-langs reveal in"><span className="lab">Available in</span>{languages.map((l) => <span className="td-lang" key={l}>{l}</span>)}</div>
            <div className="td-ai reveal in"><span className="lab">Summarize this test with</span>{aiTools.map((a) => (
              <div key={a.slotId} id={a.slotId} style={{ width: 24, height: 24, flex: 'none', background: '#fff', border: '1px solid #EFDDDE', borderRadius: 6 }} title={a.name}></div>
            ))}</div>
            <div className="td-cta reveal in"><CtaButton label="Try for free" href="#" variant="primary" size="lg" icon="arrow" magnetic /><CtaButton label="View sample questions" href="#sample-questions" variant="secondary" size="lg" icon="none" /></div>
            <div className="td-ticks"><span className="tick"><b className="tk">✓</b>7-day free trial</span><span className="tick"><b className="tk">✓</b>No credit card required</span></div>
          </div>
          <div className="card reveal in">
            <div className="card-h"><span style={{ fontSize: '13px', color: '#9A878A', fontWeight: 600 }}>Ready to use</span><span className="lv">{level}</span></div>

            <ul className="spec" style={{ marginBottom: '0px', marginTop: '0px' }}>
              <li><span className="k"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 10h18"></path></svg>Test type</span><span className="v">{type}</span></li>
              <li><span className="k"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>Duration</span><span className="v">{duration}</span></li>
              <li><span className="k"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>Questions</span><span className="v">{questions}</span></li>
              <li><span className="k"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8 2 9.4h7.6z"></path></svg>Skills measured</span><span className="v">{skillsCount}</span></li>
            </ul>
            <ul className="card-inc" style={{ marginTop: '0px' }}>
              <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Auto-graded with instant, objective scoring</li>
              <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Anti-cheat &amp; full-screen proctoring</li>
              <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Mix with any of 3,500+ tests</li>
            </ul>
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="td-sh"><p className="eyebrow reveal">Skills measured<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>{skillsCount} skills, each scored independently</h2></div>
        <div className="skgrid reveal">
          {skills.map((s, i) => (
            <div className="skcard" key={s.name}><div className="skhead"><span className="skic">{pad2(i + 1)}</span><h3 className="skname">{s.name}</h3></div><p className="skdesc">{s.desc}</p></div>
          ))}
        </div>
      </div></section>

      <section className="sec" id="sample-questions" style={{ background: '#FFF0EF', scrollMarginTop: '92px' }}><div className="wrap">
        <div className="td-sh"><p className="eyebrow reveal">Sample questions<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>See the kind of questions candidates face</h2><p className="body reveal" style={{ transitionDelay: '.08s', marginTop: '12px', maxWidth: '640px' }}>A sample of real items from this assessment, with the correct answer marked. In the live test they&apos;re shuffled, timed and auto-graded.</p></div>
        <div className="sqctrl reveal" style={{ justifyContent: 'flex-end', marginBottom: '22px' }}><button className="sqbtn" onClick={() => scrollBy(-1)} aria-label="Previous questions"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"></path></svg></button><button className="sqbtn" onClick={() => scrollBy(1)} aria-label="Next questions"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"></path></svg></button></div>
        <div className="sqtrack" ref={trackRef}>
          {samples.map((s, i) => (
            <div className="sqcard" key={i}><div className="sqchead"><span className="sqnum">{pad2(i + 1)}</span><span className="sqtype">{s.multi ? 'Select all that apply' : 'Select one'}</span></div><p className="sqtitle">{s.title}</p><p className="sqq">{s.ask}</p><div className="sqopts">{s.opts.map((o, j) => (
              <div className={`sqopt ${o.correct ? 'correct' : ''}`} key={j}><span className={o.correct ? 'sqkey on' : 'sqkey'}>{o.correct ? '✓' : String.fromCharCode(65 + j)}</span><span>{o.t}</span></div>
            ))}</div></div>
          ))}
        </div>
        <p className="sqnote reveal">A small sample — the full test contains {questions} questions across {skillsCount} skills.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="td-sh"><p className="eyebrow reveal">Overview<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>What this test measures</h2></div>
        <div className="prose reveal">
          {summary.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div style={{ marginTop: '44px' }}>
          <p className="eyebrow reveal" style={{ marginBottom: '12px' }}>Relevant for<b>.</b></p>
          <div className="td-roles reveal">
            {roles.map((r) => <span className="td-role" key={r}>{r}</span>)}
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="smegrid">
          <div>
            <p className="eyebrow reveal">Built by experts<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Every test is written and peer-reviewed by subject-matter experts</h2>
            <p className="body reveal" style={{ transitionDelay: '.08s', marginTop: '16px', maxWidth: '520px' }}>Testlify&apos;s skill tests are designed by experienced SMEs, evaluated on expertise, capability and market reputation. Before publishing, each test is peer-reviewed by other experts and calibrated against a large pool of skilled test-takers — then continuously refined by built-in feedback systems.</p>
            <Link className="smelink reveal" style={{ transitionDelay: '.12s' }} href="/security">See the science behind our tests<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></Link>
          </div>
          <div className="smecard reveal" style={{ transitionDelay: '.06s' }}>
            <span className="smebadge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="9"></circle></svg>Validity assured</span>
            <p>These assessments are developed in strict adherence to BPS (British Psychological Society) guidelines, grounded in the EFPA (European Federation of Psychologists&apos; Associations) review model — so every result is defensible and fair.</p>
          </div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="td-sh"><p className="eyebrow reveal">Interview kit<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Top hard-skill interview questions</h2><p className="body reveal" style={{ transitionDelay: '.08s', marginTop: '12px' }}>Pair the assessment with these expert questions to dig deeper in the interview.</p></div>
        <div className="acc">
          {interview.map((q, i) => {
            const id = 'iv' + i;
            const isOpen = !!open[id];
            return (
              <div className={`ai ${isOpen ? 'on' : ''} reveal`} key={id}><button className="ah" onClick={() => toggle(id)}><span className="anum">{pad2(i + 1)}</span><span className="at">{q.q}</span><span className="acar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span></button>{isOpen && <div className="ab"><div className="absub"><h4>Why this matters</h4><p>{q.why}</p></div><div className="absub"><h4>What to listen for</h4><p>{q.listen}</p></div></div>}</div>
            );
          })}
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="td-sh ctr"><p className="eyebrow reveal">FAQ<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2></div>
        <div className="faqcols">
          <div className="faqcol">
            <h3 className="reveal">About this test</h3>
            <div className="acc">{faqTest.map((f, i) => {
              const id = 'fa' + i;
              const isOpen = !!open[id];
              return (
                <div className={`ai ${isOpen ? 'on' : ''} reveal`} key={id}><button className="ah" onClick={() => toggle(id)}><span className="at" style={{ fontSize: '15px' }}>{f.q}</span><span className="acar"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span></button>{isOpen && <div className="ab flush"><p>{f.a}</p></div>}</div>
              );
            })}</div>
          </div>
          <div className="faqcol">
            <h3 className="reveal">About Testlify</h3>
            <div className="acc">{faqPlatform.map((f, i) => {
              const id = 'fb' + i;
              const isOpen = !!open[id];
              return (
                <div className={`ai ${isOpen ? 'on' : ''} reveal`} key={id}><button className="ah" onClick={() => toggle(id)}><span className="at" style={{ fontSize: '15px' }}>{f.q}</span><span className="acar"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span></button>{isOpen && <div className="ab flush"><p>{f.a}</p></div>}</div>
              );
            })}</div>
          </div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="td-sh ctr"><p className="eyebrow reveal">Related tests<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Build a complete assessment</h2></div>
        <div className="relgrid">
          {related.map((r, i) => (
            <Link className="relcard reveal" href="/test-library-detail" key={i}><div className="reltop"><span className="relic"><RelIcon k={r.ic} /></span><span className="reltag">{r.tag}</span></div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '6px' }}>{r.name}</h3><p className="body" style={{ fontSize: '13.5px' }}>{r.meta}</p></Link>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
