"use client";

import { useEffect, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
.chkcard{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:14px 30px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.chkrow{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 0;border-top:1px solid #F4EAEA;}
.chkrow:first-child{border-top:none;}
.chkl{display:flex;align-items:center;gap:14px;}
.chkic{width:42px;height:42px;border-radius:11px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.chkt{font-size:15.5px;font-weight:700;color:#1A1014;margin:0;}
.chkd{font-size:13px;color:#8A7A7D;margin:2px 0 0;}
.badge{font-size:13px;font-weight:700;padding:6px 14px;border-radius:100px;white-space:nowrap;}
.badge.ok{background:#E9F7EF;color:#1F8A5B;}
.badge.no{background:#FDECEC;color:#C0242B;}
.badge.wait{background:#FBF3EE;color:#8A7A7D;}
`;

type DevState = 'wait' | 'ok' | 'no';

function badge(s: DevState) {
  return s === 'ok'
    ? { c: 'ok', l: 'Ready' }
    : s === 'no'
    ? { c: 'no', l: 'Not detected' }
    : { c: 'wait', l: 'Checking…' };
}

export default function Page() {
  const [cam, setCam] = useState<DevState>('wait');
  const [mic, setMic] = useState<DevState>('wait');

  useEffect(() => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        navigator.mediaDevices
          .enumerateDevices()
          .then((list) => {
            const hasCam = list.some((d) => d.kind === 'videoinput');
            const hasMic = list.some((d) => d.kind === 'audioinput');
            setCam(hasCam ? 'ok' : 'no');
            setMic(hasMic ? 'ok' : 'no');
          })
          .catch(() => {
            setCam('no');
            setMic('no');
          });
      } else {
        const gum = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
        setCam(gum ? 'ok' : 'no');
        setMic(gum ? 'ok' : 'no');
      }
    } catch (e) {
      setCam('no');
      setMic('no');
    }
  }, []);

  const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || '';
  let browser = 'Your browser';
  let supported = true;
  if (/edg/i.test(ua)) browser = 'Microsoft Edge';
  else if (/chrome|crios/i.test(ua)) browser = 'Google Chrome';
  else if (/firefox|fxios/i.test(ua)) browser = 'Mozilla Firefox';
  else if (/safari/i.test(ua)) browser = 'Safari';
  else supported = false;

  const conn =
    typeof navigator !== 'undefined' && (navigator as any).connection
      ? (navigator as any).connection
      : null;
  let connOk = true;
  let connDesc = 'Stable connection recommended';
  if (conn && conn.effectiveType) {
    connDesc = 'Detected: ' + conn.effectiveType;
    connOk = !/2g/.test(conn.effectiveType);
  }

  const w = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const cookies = typeof navigator !== 'undefined' ? navigator.cookieEnabled : true;
  const screenOk = w >= 1024 && cookies;

  const camB = badge(cam);
  const micB = badge(mic);
  const allOk = supported && cam === 'ok' && mic === 'ok' && connOk && screenOk;

  const vals = {
    browserName: browser,
    browserClass: supported ? 'ok' : 'no',
    browserLabel: supported ? 'Supported' : 'Update needed',
    camClass: camB.c,
    camLabel: camB.l,
    micClass: micB.c,
    micLabel: micB.l,
    connDesc,
    connClass: connOk ? 'ok' : 'no',
    connLabel: connOk ? 'Good' : 'Weak',
    screenDesc: (cookies ? 'Cookies enabled' : 'Cookies disabled') + ' · ' + w + 'px wide',
    screenClass: screenOk ? 'ok' : 'no',
    screenLabel: screenOk ? 'Ready' : 'Check',
    summary: allOk
      ? 'You’re all set — your device is ready for a remote assessment.'
      : 'Some checks need attention. Fix the items marked above, then refresh to re-run the check.',
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Check your device before a remote assessment" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <p className="eyebrow reveal">
            System check<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Is your device<br />ready to test?
          </h1>
          <p
            className="lead reveal"
            style={{ margin: '22px auto 0', maxWidth: '600px', transitionDelay: '.08s' }}
          >
            Run this quick check before a remote, proctored assessment to make sure your browser,
            camera, microphone and connection are good to go.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: '20px' }}>
        <div className="wrap" style={{ maxWidth: '640px' }}>
          <div className="chkcard reveal">
            <div className="chkrow">
              <div className="chkl">
                <span className="chkic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </span>
                <div>
                  <p className="chkt">Browser</p>
                  <p className="chkd">{vals.browserName}</p>
                </div>
              </div>
              <span className={`badge ${vals.browserClass}`}>{vals.browserLabel}</span>
            </div>
            <div className="chkrow">
              <div className="chkl">
                <span className="chkic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 7l-7 5 7 5V7z"></path>
                    <rect x="1" y="5" width="15" height="14" rx="2"></rect>
                  </svg>
                </span>
                <div>
                  <p className="chkt">Camera</p>
                  <p className="chkd">Required for proctored tests</p>
                </div>
              </div>
              <span className={`badge ${vals.camClass}`}>{vals.camLabel}</span>
            </div>
            <div className="chkrow">
              <div className="chkl">
                <span className="chkic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4"></path>
                  </svg>
                </span>
                <div>
                  <p className="chkt">Microphone</p>
                  <p className="chkd">Required for audio &amp; video interviews</p>
                </div>
              </div>
              <span className={`badge ${vals.micClass}`}>{vals.micLabel}</span>
            </div>
            <div className="chkrow">
              <div className="chkl">
                <span className="chkic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"></path>
                  </svg>
                </span>
                <div>
                  <p className="chkt">Connection</p>
                  <p className="chkd">{vals.connDesc}</p>
                </div>
              </div>
              <span className={`badge ${vals.connClass}`}>{vals.connLabel}</span>
            </div>
            <div className="chkrow">
              <div className="chkl">
                <span className="chkic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                </span>
                <div>
                  <p className="chkt">Screen &amp; cookies</p>
                  <p className="chkd">{vals.screenDesc}</p>
                </div>
              </div>
              <span className={`badge ${vals.screenClass}`}>{vals.screenLabel}</span>
            </div>
          </div>
          <p className="body reveal" style={{ textAlign: 'center', marginTop: '24px' }}>
            {vals.summary}
          </p>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
