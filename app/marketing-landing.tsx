'use client';

import Link from 'next/link';
import {ChevronDown, ChevronLeft, ChevronRight, Play, Sparkles, Stethoscope} from 'lucide-react';
import './marketing-landing.css';

const systems = [
  ['Heart', '/study/anatomy/heart/organ.webp'], ['Brain', '/study/anatomy/brain/organ.webp'],
  ['Lungs', '/study/anatomy/lungs/organ.webp'], ['Bones', '/mico/learn.svg'], ['Muscles', '/mico/mascot.svg'],
  ['Eyes', '/study/anatomy/eyeball/organ.webp'], ['Skin', '/study/anatomy/skin/organ.webp'],
  ['Kidneys', '/study/anatomy/kidneys/organ.webp'], ['Liver', '/study/anatomy/liver/organ.webp'],
];

const footerExploreLinks: {label: string; href: string}[] = [
  {label: 'Learning paths', href: '/dashboard?demo=1'},
  {label: '3D atlas', href: '/atlas'},
  {label: 'Quick practice', href: '/dashboard?demo=1'},
];

function MicoMark() {
  return <span className="landing-mark"><span>m</span>Mico</span>;
}

function Action({href, children, tone = 'green'}: {href: string; children: React.ReactNode; tone?: 'green' | 'outline' | 'white'}) {
  return <Link href={href} className={`landing-action landing-action-${tone}`}>{children}</Link>;
}

export default function MarketingLanding() {
  function moveLanguages(direction: number) {
    document.querySelector('.landing-system-scroll')?.scrollBy({left: direction * 310, behavior: 'smooth'});
  }

  return <main className="mico-landing-page" id="top">
    <nav className="landing-nav" aria-label="Main navigation">
      <Link href="#top" className="landing-brand" aria-label="Mico home"><MicoMark /></Link>
      <div className="landing-nav-right">
        <button className="landing-language" type="button">SITE LANGUAGE: ENGLISH <ChevronDown size={15} /></button>
        <Action href="/dashboard?demo=1" tone="outline">Try the free demo</Action>
      </div>
    </nav>

    <header className="landing-hero">
      <div className="landing-illustration-shell hero-video landing-community-art"><img src="/mico/landing/community.png" alt="A lively community of learners" /></div>
      <div className="landing-hero-copy">
        <p className="landing-eyebrow"><Sparkles size={17} /> INTERACTIVE HUMAN ANATOMY</p>
        <h1><span>The visual, playful way to</span><strong>learn anatomy.</strong></h1>
        <p>Build a working map of the human body with quick lessons, real 3D models, and practice that sticks.</p>
        <div className="landing-actions">
          <Action href="/dashboard">Explore the free demo</Action>
          <Action href="/atlas" tone="outline">Explore the 3D atlas</Action>
        </div>
      </div>
    </header>

    <section className="landing-systems" aria-label="Explore anatomy systems">
      <button aria-label="Previous systems" onClick={() => moveLanguages(-1)}><ChevronLeft /></button>
      <div className="landing-system-scroll">
        {systems.map(([name, image]) => <Link href="/atlas" key={name}><img src={image} alt="" /><span>{name}</span></Link>)}
      </div>
      <button aria-label="Next systems" onClick={() => moveLanguages(1)}><ChevronRight /></button>
    </section>

    <section className="landing-feature landing-feature-light">
      <div className="landing-feature-copy">
        <p className="landing-eyebrow landing-green"><Sparkles size={17} /> DESIGNED FOR CURIOSITY</p>
        <h2>free. fun. effective.</h2>
        <p>Learning anatomy with Mico is visual and active. Rotate a structure, test your recall, and learn why each part matters in the system around it.</p>
        <Link href="/dashboard" className="landing-text-link">Explore how Mico works <ChevronRight size={19} /></Link>
      </div>
      <div className="landing-illustration-shell feature-video landing-learning-art"><img src="/mico/landing/learning-path.png" alt="A learner progressing through practice cards" /></div>
    </section>

    <section className="landing-anywhere">
      <div className="landing-anywhere-video" aria-hidden="true" />
      <div className="landing-anywhere-content">
        <p className="landing-eyebrow landing-blue"><Stethoscope size={17} /> YOUR STUDY, YOUR PACE</p>
        <h2>learn anytime,<br />anywhere</h2>
        <p>Take a two-minute challenge between classes, explore the atlas on a larger screen, and return whenever you want another angle.</p>
        <div className="landing-store-links">
          <Link href="/dashboard"><Play size={23} fill="currentColor" /><span><small>START ON THE</small>Web app</span></Link>
          <Link href="/atlas"><Stethoscope size={23} /><span><small>EXPLORE THE</small>3D atlas</span></Link>
        </div>
      </div>
    </section>

    <section className="landing-feature landing-plus">
      <div className="landing-illustration-shell feature-video landing-plus-art"><img src="/mico/landing/mico-plus.png" alt="Mico celebrating a free anatomy study session" /></div>
      <div className="landing-feature-copy">
        <p className="landing-eyebrow landing-mint"><Sparkles size={17} /> FREE PUBLIC DEMO</p>
        <h2>Explore anatomy for free.</h2>
        <p>Open the 3D atlas and guided learning demo. No account or payment is required.</p>
        <Action href="/dashboard" tone="white">Start exploring</Action>
      </div>
    </section>

    <section className="landing-feature landing-feature-light landing-practice">
      <div className="landing-feature-copy">
        <p className="landing-eyebrow landing-green"><Stethoscope size={17} /> PRACTICE WITH PURPOSE</p>
        <h2>See what you know.</h2>
        <p>Practice with different systems, not recycled diagrams. Identify real structures, build spatial understanding, and revisit the concepts that need another look.</p>
        <Link href="/dashboard" className="landing-text-link">Try a quick challenge <ChevronRight size={19} /></Link>
      </div>
      <div className="landing-illustration-shell feature-video landing-milestone-art"><img src="/mico/landing/milestone.png" alt="A learner reaching a new learning milestone" /></div>
    </section>

    <section className="landing-cta">
      <div className="landing-cta-copy">
        <p className="landing-eyebrow landing-green">YOUR BODY, YOUR MAP</p>
        <h2>Learn anatomy with Mico.</h2>
        <Action href="/dashboard">Explore the free demo</Action>
      </div>
      <div className="landing-illustration-shell landing-cta-video landing-rewards-art"><img src="/mico/landing/rewards.png" alt="Mico celebrating learning rewards" /></div>
    </section>

    <footer className="landing-footer">
      <div className="landing-footer-grid">
        <div className="landing-footer-intro"><MicoMark /><p>Interactive anatomy learning for everyone who wants to understand the body, not just memorize it.</p><Link href="/dashboard">Try the public demo <ChevronRight size={16} /></Link></div>
        <div key="Explore"><h3>Explore</h3>{footerExploreLinks.map(({label, href}) => <Link href={href} key={label}>{label}</Link>)}</div>
      </div>
      <div className="landing-footer-bottom"><span>© 2026 Mico</span><span>Made for anatomy curiosity</span><Link href="/dashboard?demo=1">Explore the free demo</Link></div>
    </footer>
  </main>;
}
