import Link from 'next/link';

export default function CtaBand({ eyebrow = 'Start hiring on skill' }: { eyebrow?: string }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.ctaband,.ctaband *{box-sizing:border-box;font-family:'Poppins',sans-serif;}
.ctaband a{text-decoration:none;}
.sfcta{position:relative;overflow:hidden;background:linear-gradient(135deg,#F23F44 0%,#A91E23 60%,#6E0B0E 100%);padding:96px 28px;text-align:center;}
.sfcta-c1{position:absolute;top:-100px;left:-60px;width:340px;height:340px;border-radius:50%;background:rgba(255,255,255,.10);}
.sfcta-c2{position:absolute;bottom:-130px;right:-50px;width:320px;height:320px;border-radius:50%;background:rgba(255,255,255,.08);}
.sfcta-in{position:relative;z-index:2;max-width:1180px;margin:0 auto;}
.sfcta-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.82);margin:0 0 16px;}
.sfcta-h{font-size:48px;line-height:1.08;font-weight:800;letter-spacing:-1.6px;color:#fff;margin:0 auto;max-width:1010px;}
.sfcta-p{font-size:19px;color:#FFE2E3;margin:20px auto 0;max-width:560px;line-height:1.6;}
.sfcta-btns{display:flex;justify-content:center;flex-wrap:wrap;gap:14px;margin-top:36px;}
.sfcta-b1{display:inline-flex;align-items:center;gap:9px;background:#fff;color:#F23F44;font-weight:700;font-size:17px;padding:16px 32px;border-radius:15px;box-shadow:0 16px 34px rgba(0,0,0,.2);transition:transform .2s ease;}
.sfcta-b1:hover{transform:translateY(-3px);}
.sfcta-b2{display:inline-flex;align-items:center;background:rgba(255,255,255,.14);color:#fff;font-weight:600;font-size:17px;padding:16px 30px;border-radius:15px;border:1.5px solid rgba(255,255,255,.35);transition:background .2s ease;}
.sfcta-b2:hover{background:rgba(255,255,255,.24);}
.sfcta-trust{display:flex;justify-content:center;flex-wrap:wrap;gap:26px;margin-top:30px;color:#FFD2D3;font-size:14.5px;font-weight:500;}
@media(max-width:600px){.sfcta{padding:64px 22px;}.sfcta-h{font-size:34px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`,
        }}
      />
      <section className="ctaband">
        <div className="sfcta">
          <div className="sfcta-c1"></div>
          <div className="sfcta-c2"></div>
          <div className="sfcta-in">
            <p className="sfcta-eyebrow">
              {eyebrow}
              <span style={{ color: '#fff' }}>.</span>
            </p>
            <h2 className="sfcta-h">
              Your next great hire is already in <br />your pipeline
            </h2>
            <p className="sfcta-p">
              Build your first assessment in about two minutes and start surfacing proven talent today — free for 7 days.
            </p>
            <div className="sfcta-btns">
              <Link href="/pricing" className="sfcta-b1">
                Try for free<span>→</span>
              </Link>
              <Link href="/contact" className="sfcta-b2">
                Book a demo
              </Link>
            </div>
            <div className="sfcta-trust">
              <span>✓ Full feature access</span>
              <span>✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
