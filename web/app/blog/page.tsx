'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:80px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:56px;line-height:1.05;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:38px;line-height:1.1;font-weight:800;letter-spacing:-1.2px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.bhero{padding:60px 28px 30px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.tagbar{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:24px;}
.tag{border:1px solid #EFE2E3;background:#fff;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;color:#6A5A5D;cursor:pointer;transition:all .2s ease;font-family:inherit;}
.tag.on{background:#F23F44;color:#fff;border-color:#F23F44;}
.feat{display:grid;grid-template-columns:1.1fr 1fr;gap:0;border:1px solid #EFE2E3;border-radius:24px;overflow:hidden;background:#fff;box-shadow:0 24px 60px rgba(110,11,14,.08);}
.featimg{position:relative;min-height:340px;display:flex;align-items:flex-end;padding:28px;color:#fff;overflow:hidden;}
.pimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;}
.featimg::after,.postimg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(26,16,20,0) 40%,rgba(26,16,20,.55));z-index:0;}
.featimg .postcat,.postimg .postcat{position:relative;z-index:1;}
.featbody{padding:40px;display:flex;flex-direction:column;}
.bgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.post{display:flex;flex-direction:column;background:#fff;border:1px solid #EFE2E3;border-radius:20px;overflow:hidden;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;}
.post:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.postimg{position:relative;height:180px;display:flex;align-items:flex-end;padding:18px;overflow:hidden;}
.postcat{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:rgba(0,0,0,.28);padding:5px 11px;border-radius:999px;backdrop-filter:blur(4px);}
.postbody{padding:22px;display:flex;flex-direction:column;flex:1;}
.posttitle{font-size:18px;font-weight:700;letter-spacing:-.3px;line-height:1.3;margin:0 0 10px;}
.postexc{font-size:14px;color:#6A5A5D;line-height:1.55;margin:0 0 18px;}
.postmeta{font-size:12.5px;color:#9A878A;margin-top:auto;display:flex;gap:8px;align-items:center;}
.loadmore{display:flex;justify-content:center;margin-top:44px;}
.loadbtn{font-family:inherit;font-size:15px;font-weight:600;color:#F23F44;background:#fff;border:1.5px solid #F4D2D3;border-radius:999px;padding:14px 30px;cursor:pointer;transition:background .2s ease,transform .2s ease,box-shadow .2s ease;}
.loadbtn:hover{background:#FFF0EF;transform:translateY(-2px);box-shadow:0 12px 26px rgba(242,63,68,.16);}
@media(max-width:920px){
  .h1{font-size:40px;letter-spacing:-1.4px;}
  .h2{font-size:30px;}
  .sec{padding:60px 22px;}
  .feat{grid-template-columns:1fr;}
  .featimg{min-height:200px;}
  .featbody{padding:28px;}
  .bgrid{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type Post = {
  title: string;
  cat: string;
  group: string;
  excerpt: string;
  author: string;
  read: string;
  img: string;
};

const DATA: Post[] = [
  { title: 'How to write a job description that attracts skill', cat: 'Hiring strategy', group: 'hiring', excerpt: 'Stop listing years of experience. Start describing the work — and watch your candidate quality jump.', author: 'Aditya Rao', read: '7 min read', img: 'https://picsum.photos/seed/tl-blog-1/800/520' },
  { title: 'Designing assessments candidates actually finish', cat: 'Assessments', group: 'assess', excerpt: 'Completion rates make or break your funnel. Six research-backed ways to keep candidates engaged.', author: 'Elena Costa', read: '6 min read', img: 'https://picsum.photos/seed/tl-blog-2/800/520' },
  { title: 'Will AI make hiring fairer — or worse?', cat: 'AI & hiring', group: 'ai', excerpt: 'A clear-eyed look at where AI helps remove bias, where it can amplify it, and how to stay in control.', author: 'Daniel Mwangi', read: '9 min read', img: 'https://picsum.photos/seed/tl-blog-3/800/520' },
  { title: 'The real cost of a bad hire (and how to avoid it)', cat: 'Hiring strategy', group: 'hiring', excerpt: 'A bad hire can cost 30% of salary or more. Skills-first screening is the cheapest insurance you can buy.', author: 'Sara Neeson', read: '5 min read', img: 'https://picsum.photos/seed/tl-blog-4/800/520' },
  { title: 'Structured interviews: the playbook', cat: 'Assessments', group: 'assess', excerpt: 'Unstructured interviews predict performance barely better than chance. Here is how to fix yours.', author: 'Sneha Kulkarni', read: '8 min read', img: 'https://picsum.photos/seed/tl-blog-5/800/520' },
  { title: 'Widen your funnel without lowering the bar', cat: 'Diversity', group: 'dei', excerpt: 'Diversity and quality are not a trade-off. Skills-based hiring is how you get both at once.', author: 'Maria Alvarez', read: '6 min read', img: 'https://picsum.photos/seed/tl-blog-6/800/520' },
  { title: 'Scorecards that actually predict performance', cat: 'Assessments', group: 'assess', excerpt: 'Turn fuzzy gut-feel into a structured rubric every interviewer can apply consistently.', author: 'Priya Nair', read: '7 min read', img: 'https://picsum.photos/seed/tl-blog-7/800/520' },
  { title: 'Reducing time-to-hire without cutting corners', cat: 'Hiring strategy', group: 'hiring', excerpt: 'Where the days really go in your funnel — and the three levers that move them most.', author: 'Marcus Bell', read: '6 min read', img: 'https://picsum.photos/seed/tl-blog-8/800/520' },
  { title: 'Prompting AI interviewers responsibly', cat: 'AI & hiring', group: 'ai', excerpt: 'How to design AI-led screens that stay fair, explainable and candidate-friendly.', author: 'Daniel Mwangi', read: '8 min read', img: 'https://picsum.photos/seed/tl-blog-9/800/520' },
  { title: 'Inclusive job ads: a practical checklist', cat: 'Diversity', group: 'dei', excerpt: 'Small wording changes that measurably widen who applies — with examples.', author: 'Sofia Ramirez', read: '5 min read', img: 'https://picsum.photos/seed/tl-blog-10/800/520' },
  { title: 'Benchmarking candidates the right way', cat: 'Assessments', group: 'assess', excerpt: 'Raw scores mislead. Here is how to compare candidates against the role, not each other.', author: 'Elena Costa', read: '7 min read', img: 'https://picsum.photos/seed/tl-blog-11/800/520' },
];

const TAGS: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'hiring', label: 'Hiring strategy' },
  { key: 'assess', label: 'Assessments' },
  { key: 'ai', label: 'AI & hiring' },
  { key: 'dei', label: 'Diversity' },
];

export default function BlogPage() {
  const [tag, setTag] = useState('all');
  const [visible, setVisible] = useState(6);

  const filtered = tag === 'all' ? DATA : DATA.filter((x) => x.group === tag);
  const posts = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  const pick = (k: string) => {
    setTag(k);
    setVisible(6);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="New guide · The 2026 skills-based hiring playbook"
        announcementCta="Read now"
        homeHref="/"
      />

      <section className="bhero">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <p className="eyebrow reveal">
            The Testlify blog<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Ideas for hiring on skill
          </h1>
          <p className="lead reveal" style={{ margin: '20px auto 0', maxWidth: 560, transitionDelay: '.08s' }}>
            Research, playbooks and practical guides for building a fairer, faster hiring process.
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 28px 0' }}>
        <div className="wrap">
          <Link className="feat reveal" href="/blog-detail">
            <div className="featimg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pimg" src="https://picsum.photos/seed/testlify-feat/1040/720" alt="" loading="lazy" />
              <span className="postcat">Featured · Hiring strategy</span>
            </div>
            <div className="featbody">
              <h2 className="h2" style={{ fontSize: 30, marginBottom: 14 }}>
                The 2026 skills-based hiring playbook
              </h2>
              <p className="body" style={{ fontSize: 15.5 }}>
                Degrees are fading as a hiring signal. Here&apos;s the complete framework for designing a skills-first process — from job design to scorecards — that actually predicts performance.
              </p>
              <div className="postmeta" style={{ marginTop: 24 }}>
                <span>Sneha Kulkarni</span>
                <span>·</span>
                <span>12 min read</span>
                <span>·</span>
                <span>Jun 2026</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="reveal tagbar" style={{ marginBottom: 34 }}>
            {TAGS.map((t) => (
              <button
                key={t.key}
                className={`tag ${tag === t.key ? 'on' : ''}`}
                onClick={() => pick(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="bgrid">
            {posts.map((p, i) => (
              <Link className="post" href="/blog-detail" key={`${p.group}-${i}`}>
                <div className="postimg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="pimg" src={p.img} alt="" loading="lazy" />
                  <span className="postcat">{p.cat}</span>
                </div>
                <div className="postbody">
                  <h3 className="posttitle">{p.title}</h3>
                  <p className="postexc">{p.excerpt}</p>
                  <div className="postmeta">
                    <span>{p.author}</span>
                    <span>·</span>
                    <span>{p.read}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {hasMore && (
            <div className="loadmore">
              <button className="loadbtn" onClick={() => setVisible((v) => v + 3)}>
                Load more articles
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
