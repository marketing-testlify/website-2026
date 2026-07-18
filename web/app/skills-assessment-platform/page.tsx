import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';

export default function SkillsAssessmentPlatformPage() {
  return (
    <>
      <SiteHeader announcement="The finest talent assessment platform" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">
            Skills assessment platform<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Prove skill<br />before you hire
          </h1>
          <p
            className="lead reveal"
            style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}
          >
            Testlify is an AI-native skills assessment platform that helps you hire the best talent
            quickly, accurately and affordably — with 3,500+ validated tests and AI interviews on one
            platform.
          </p>
          <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
            <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" />
            <CtaButton
              label="See how it works"
              href="/how-testlify-works"
              variant="ghost"
              size="md"
              icon="none"
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '10px 28px 0' }}>
        <div className="wrap">
          <div className="statrow reveal">
            <div className="stat">
              <div className="statn">3,500+</div>
              <div className="statl">validated tests</div>
            </div>
            <div className="stat">
              <div className="statn">6x</div>
              <div className="statl">recruiter efficiency</div>
            </div>
            <div className="stat">
              <div className="statn">75%</div>
              <div className="statl">less screening</div>
            </div>
            <div className="stat">
              <div className="statn">4.7</div>
              <div className="statl">rating on G2</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">
              All in one place<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Everything you need to assess
            </h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                3,500+ validated tests
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Role-specific, coding, cognitive, personality and language tests built by SMEs.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2"></rect>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                AI interviews
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Video, audio and chat interviews — automated and scored consistently.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Anti-cheat proctoring
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Keep results honest with webcam, full-screen and plagiarism detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBand />
      <SiteFooter />
    </>
  );
}
