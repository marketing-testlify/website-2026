import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const css = `
.swatch{border-radius:16px;padding:20px;height:120px;display:flex;flex-direction:column;justify-content:flex-end;color:#fff;font-weight:600;font-size:13px;border:1px solid rgba(0,0,0,.05);}
.swcode{font-size:12px;opacity:.85;font-weight:500;}
.logobox{background:#fff;border:1px solid #EFE2E3;border-radius:16px;height:130px;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;letter-spacing:-.6px;color:#1A1014;}
.logobox.dark{background:#1A1014;color:#fff;}
`;

export default function BrandPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Using the Testlify brand? Start here." announcementCta="Contact us" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Brand guidelines<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Our brand,<br />used well</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>The Testlify logo, colours and type — and how to use them. Please keep our brand consistent so it stays recognisable everywhere it appears.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head" style={{ textAlign: 'left', maxWidth: 'none' }}>
            <p className="eyebrow reveal">Logo<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The Testlify mark</h2>
          </div>
          <div className="grid2 reveal" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="logobox">Testlify</div>
            <div className="logobox dark">Testlify</div>
          </div>
          <p className="body reveal" style={{ marginTop: '18px' }}>Give the logo clear space, never stretch or recolour it, and use the reversed version on dark backgrounds only.</p>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head" style={{ textAlign: 'left', maxWidth: 'none' }}>
            <p className="eyebrow reveal">Colour<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Our palette</h2>
          </div>
          <div className="grid4 reveal">
            <div className="swatch" style={{ background: '#F23F44' }}>Coral<span className="swcode">#F23F44</span></div>
            <div className="swatch" style={{ background: '#FF7A52' }}>Bright<span className="swcode">#FF7A52</span></div>
            <div className="swatch" style={{ background: '#1A1014' }}>Ink<span className="swcode">#1A1014</span></div>
            <div className="swatch" style={{ background: '#FBF3EE', color: '#8A7A7D' }}>Sand<span className="swcode">#FBF3EE</span></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Typography<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '20px' }}>Poppins, everywhere</h2>
            <p className="body">Testlify uses Poppins across the entire brand — from headlines to body copy. Weights 400 to 800 give us range while staying unmistakably us.</p>
            <div style={{ marginTop: '24px' }}>
              <p style={{ fontFamily: "'Poppins'", fontWeight: 800, fontSize: '42px', letterSpacing: '-1.4px', margin: 0 }}>Aa Bb Cc</p>
              <p style={{ fontFamily: "'Poppins'", fontWeight: 400, fontSize: '18px', color: '#5A4B4E', margin: '8px 0 0' }}>The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: '24px', padding: '40px' }}>
            <p className="h3" style={{ fontSize: '22px', lineHeight: 1.4, fontWeight: 600 }}>Need vector logos, product screenshots or something specific? Reach out and we&apos;ll send the full brand pack.</p>
            <div style={{ marginTop: '24px' }}>
              <CtaButton label="Request assets" href="/contact" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
