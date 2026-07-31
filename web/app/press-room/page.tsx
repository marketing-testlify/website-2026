import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

const css = `
.presstabs{display:flex;justify-content:center;gap:8px;margin:0 0 30px;}
.presstab{font-size:14px;font-weight:600;color:#8A7A7D;text-decoration:none;padding:9px 18px;border-radius:999px;}
.presstab.on{background:#fff;color:#1A1014;box-shadow:0 4px 14px rgba(110,11,14,.10);}
.badgegrid{display:grid;grid-template-columns:repeat(6,1fr);gap:18px;}
.badgecard{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:18px 14px;text-align:center;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.badgecard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.12);}
.badgecard img{max-width:100%;max-height:110px;object-fit:contain;margin-bottom:10px;}
.badgecard p{font-size:12.5px;font-weight:600;color:#1A1014;margin:0;line-height:1.35;}
.newsrow{display:flex;flex-direction:column;gap:0;}
.newsitem{display:grid;grid-template-columns:130px 1fr auto;gap:20px;align-items:center;padding:22px 0;border-bottom:1px solid #F0E2E3;}
.newsitem:last-child{border-bottom:none;}
.newsdate{font-size:13px;color:#8A7A7D;font-weight:600;}
.newstitle{font-size:15.5px;font-weight:700;color:#1A1014;line-height:1.4;}
.newssrc{font-size:12.5px;color:#8A7A7D;font-weight:600;margin-top:4px;}
.newslink{font-size:14px;font-weight:700;color:#F23F44;text-decoration:none;white-space:nowrap;}
.newslink:hover{color:#A91E23;}
@media(max-width:960px){.badgegrid{grid-template-columns:repeat(3,1fr)!important;}}
@media(max-width:720px){.newsitem{grid-template-columns:1fr;gap:6px;}}
`;

type PressItem = { date: string; title: string; source: string; url: string };

const press: PressItem[] = [
  {
    date: "Oct 15, 2025",
    title: "Testlify: The recruiter who never sleeps — Testlify launches AI Conversational Interviews",
    source: "GLOBE NEWSWIRE",
    url: "/testlify-the-recruiter-who-never-sleeps",
  },
  {
    date: "Jan 15, 2024",
    title: "Testlify Pioneers the Future With Full AI Integration in Talent Assessment Revolution",
    source: "Testlify press release",
    url: "/testlify-pioneers-the-future-with-full-ai-integration-in-talentassessment-revolution",
  },
  {
    date: "May 18, 2026",
    title: "Testlify makes strong debut at SHRM Talent 2026 as part of SHRM Labs workplace tech accelerator",
    source: "Testlify press release",
    url: "https://testlify.com/press-release/testlify-debuts-at-shrm-talent-2026/",
  },
  {
    date: "May 16, 2026",
    title: "Testlify proctoring catches proxy hiring fraud at US insurance firm on day one",
    source: "Qwoted.com",
    url: "https://app.qwoted.com/press_releases/testlify-proctoring-catches-proxy-hiring-fraud-at-us-insurance-firm-on-day-one",
  },
  {
    date: "May 13, 2026",
    title: "8 ways HR analytics can improve your recruitment process and candidate quality",
    source: "Best of HR",
    url: "https://bestofhr.com/8-ways-hr-analytics-can-improve-your-recruitment-process-and-candidate-quality/",
  },
  {
    date: "Apr 6, 2026",
    title: "Why do candidates drop off (and how to fix your hiring funnel)?",
    source: "Medium",
    url: "https://medium.com/testlify/why-candidates-drop-off-and-how-to-fix-your-hiring-funnel-8c95f18b180e",
  },
  {
    date: "Mar 31, 2026",
    title: "SHRM Labs announces 2026 workplace tech accelerator cohort",
    source: "SHRM",
    url: "https://www.shrm.org/about/press-room/shrm-labs-announces-2026-workplacetech-accelerator-cohort-",
  },
  {
    date: "Jan 20, 2026",
    title: "11 ways businesses are using AI tools to boost productivity and reduce costs",
    source: "Founders Report",
    url: "https://founderreports.com/ways-businesses-use-ai-tools/",
  },
  {
    date: "Jan 15, 2026",
    title: "Addressing leadership performance concerns: insights & strategies",
    source: "CEO Official Magazine",
    url: "https://ceofficialmag.com/addressing-leadership-performance-concerns/",
  },
  {
    date: "Jan 4, 2026",
    title: "Build confidence and clarity this January and aim for better roles",
    source: "College Recruiter",
    url: "https://www.collegerecruiter.com/blog/2026/01/04/build-confidence-and-clarity-this-january-and-aim-for-better-roles",
  },
  {
    date: "Dec 24, 2025",
    title: "How students can stand out in a crowded job market: 14 interview tips that work",
    source: "Interview Focus",
    url: "https://interviewfocus.com/how-students-can-stand-out-in-a-crowded-job-market-14-interview-tips-that-work/",
  },
  {
    date: "Dec 23, 2025",
    title: "10 ways to incorporate data analytics into your sourcing strategy",
    source: "Featured.com",
    url: "https://blog.connectively.us/10-ways-to-incorporate-data-analytics-into-your-sourcing-strategy/",
  },
  {
    date: "Jun 11, 2025",
    title: "Testlify launches conversational AI interviews to redefine talent assessment at scale",
    source: "The Print",
    url: "https://theprint.in/ani-press-releases/testlify-launches-conversational-ai-interviews-to-redefine-talent-assessment-at-scale/2653810/",
  },
  {
    date: "Jun 10, 2025",
    title: "Testlify launches conversational AI interviews to redefine talent assessment at scale",
    source: "In Business Times",
    url: "https://inbusinesstimes.com/testlify-launches-conversational-ai-interviews-to-redefine-talent-assessment-at-scale/",
  },
  {
    date: "Apr 11, 2025",
    title: "How has AI helped you gain a competitive advantage as a small business?",
    source: "TechBullion",
    url: "https://techbullion.com/how-has-ai-helped-you-gain-a-competitive-advantage-as-a-small-business/",
  },
  {
    date: "Apr 8, 2024",
    title: "Visionary leaders felicitated at business excellence awards 2024",
    source: "In Business Times",
    url: "https://inbusinesstimes.com/visionary-leaders-felicitated-at-business-excellence-awards-2024/",
  },
  {
    date: "Mar 20, 2024",
    title: "Testlify empowers over 1,000 businesses with cutting-edge talent assessment solution",
    source: "Marketers Media Newsroom",
    url: "https://news.marketersmedia.com/testlify-empowers-over-1000-businesses-with-cutting-edge-talent-assessment-solution-2/89124869",
  },
  {
    date: "Jan 4, 2024",
    title: "Building inclusive workplaces: AI-driven solutions for disability and neurodiversity",
    source: "Medium",
    url: "https://medium.com/testlify/why-candidates-drop-off-and-how-to-fix-your-hiring-funnel-8c95f18b180e",
  },
  {
    date: "Dec 14, 2023",
    title: "2024 labor market outlook: skills shortages and flexibility",
    source: "HR Daily Advisor",
    url: "https://hrdailyadvisor.hci.org/2023/12/14/2024-labor-market-outlook-skills-shortages-and-flexibility/",
  },
];

export default function PressRoomPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Press & media enquiries welcome" announcementCta="Contact press" homeHref="/" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <div className="presstabs reveal">
            <Link className="presstab on" href="/press-room">Latest press</Link>
            <Link className="presstab" href="/awards">Awards and recognition</Link>
            <Link className="presstab" href="/press-kit">Press kit</Link>
          </div>
          <p className="eyebrow reveal" style={{ transitionDelay: ".04s" }}>Press &amp; media<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".08s" }}>Testlify in the <span style={{ color: "#F23F44" }}>spotlight</span></h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: "640px", transitionDelay: ".12s" }}>Helping companies hire based on real skills instead of resumes has given us the opportunity to shape conversations around the future of hiring, skills assessments, and recruitment innovation.</p>
          <div className="reveal" style={{ marginTop: "36px", transitionDelay: ".16s", maxWidth: "420px", marginLeft: "auto", marginRight: "auto" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2026/05/Testlify-in-the-spotlight-867x1024.png"
              alt="Testlify in the spotlight"
              style={{ width: "100%", borderRadius: "16px", boxShadow: "0 16px 30px rgba(110,11,14,.10)" }}
            />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Recognition<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Recent achievements</h2>
          </div>
          <div className="badgegrid reveal">
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/g2bestmeets.png" alt="Best meets requirements badge" />
              <p>Spring 2026 — Best meets requirements — G2</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/trust1.png" alt="Trust Radius Buyer's choice badge" />
              <p>Trust Radius — Buyer&apos;s choice 2025</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/g2recommend.png" alt="Users most likely to recommend badge" />
              <p>Spring 2026 — Users most likely to recommend — G2</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/g2highperf.png" alt="High performer badge" />
              <p>Spring 2026 — High performer — G2</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/trust2.png" alt="Trust Radius Top rated badge" />
              <p>Trust Radius — Top rated 2025</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/g2leader.png" alt="Leader badge" />
              <p>Spring 2026 — Leader — G2</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: "900px" }}>
          <div className="center-head">
            <p className="eyebrow reveal">Coverage<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>All press</h2>
          </div>
          <div className="newsrow reveal" style={{ marginTop: "36px", transitionDelay: ".1s" }}>
            {press.map((p) => (
              <div className="newsitem" key={`${p.date}-${p.source}-${p.title}`}>
                <span className="newsdate">{p.date}</span>
                <div>
                  <span className="newstitle">{p.title}</span>
                  <div className="newssrc">{p.source}</div>
                </div>
                {p.url.startsWith("http") ? (
                  <a className="newslink" href={p.url} target="_blank" rel="noopener noreferrer">Read now →</a>
                ) : (
                  <Link className="newslink" href={p.url}>Read now →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap grid2" style={{ maxWidth: "820px" }}>
          <div className="card reveal" style={{ textAlign: "center" }}>
            <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Get in touch with our press team</h3>
            <a className="lnk" href="mailto:press@testlify.com" style={{ fontSize: "14px" }}>Reach out →</a>
          </div>
          <div className="card reveal" style={{ transitionDelay: ".05s", textAlign: "center" }}>
            <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>View our press kit</h3>
            <Link className="lnk" href="/press-kit" style={{ fontSize: "14px" }}>See press kit →</Link>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
