"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PageFrame, ProjectCard, projects } from "./components/site";

export default function Home() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [brochureSent, setBrochureSent] = useState(false);

  useEffect(() => {
    if (!isBrochureOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsBrochureOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isBrochureOpen]);

  function openBrochure() {
    setBrochureSent(false);
    setEmail("");
    setIsBrochureOpen(true);
  }

  function submitBrochure(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBrochureSent(true);
  }

  return (
    <PageFrame>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <span className="eyebrow">Plots, villas & better beginnings</span>
            <h1 className="serif">
              Find your plot.
              <br />
              Build your future.
            </h1>
            <p className="hero-copy">
              Thoughtfully planned plotted developments across Chennai&apos;s
              most promising growth corridors, with select villa opportunities
              for modern families.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="button button-cream">
                Explore our plots <span className="arrow">↗</span>
              </Link>
              <Link href="/contact" className="button button-light">
                Talk to us
              </Link>
              <button className="button button-light" type="button" onClick={openBrochure}>
                Download brochure <span className="arrow">↓</span>
              </button>
            </div>
            <div className="hero-note">
              80% plotted developments
              <br />
              <br />
              20% villa communities
            </div>
          </div>
        </section>
        {isBrochureOpen && (
          <div className="brochure-modal-backdrop" role="presentation" onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsBrochureOpen(false);
          }}>
            <section className="brochure-modal" role="dialog" aria-modal="true" aria-labelledby="brochure-title">
              <button className="brochure-modal-close" type="button" aria-label="Close brochure form" onClick={() => setIsBrochureOpen(false)}>×</button>
              {brochureSent ? (
                <div className="brochure-success">
                  <span className="eyebrow">Request received</span>
                  <h2 id="brochure-title" className="serif">Please check your mail for the brochure.</h2>
                  <p>We will send the brochure to <strong>{email}</strong> once email delivery is connected.</p>
                  <button className="button button-dark" type="button" onClick={() => setIsBrochureOpen(false)}>Close</button>
                </div>
              ) : (
                <form onSubmit={submitBrochure}>
                  <span className="eyebrow">Download brochure</span>
                  <h2 id="brochure-title" className="serif">Where details make the difference.</h2>
                  <p>Enter your email address and we&apos;ll share the Ambal Groups brochure with you.</p>
                  <label className="brochure-label" htmlFor="brochure-email">Email address</label>
                  <input className="brochure-input" id="brochure-email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required />
                  <button className="button button-dark" type="submit">Send <span className="arrow">↗</span></button>
                </form>
              )}
            </section>
          </div>
        )}
        <section className="section intro home-intro">
          <div className="container intro-grid">
            <div>
              <span className="eyebrow">Why Ambal Groups</span>
              <h2 className="serif">
                At Ambal Groups, we build trust, not just buildings.
              </h2>
              <p>
                We help you realise your dreams of owning a home or investing in
                land at affordable prices. The best investment on Earth is
                Earth, so keep investing for a bright future.
              </p>
              <Link href="/about" className="text-link">
                Get to know us&nbsp; ↗
              </Link>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>25+</strong>
                <span>Years of trust</span>
              </div>
              <div className="stat">
                <strong>1,000+</strong>
                <span>Families served</span>
              </div>
              <div className="stat">
                <strong>20+</strong>
                <span>Running projects</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section projects-showcase">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Our projects</span>
                <h2 className="serif">Building landmarks across Chennai.</h2>
              </div>
              <Link href="/projects" className="text-link">
                View all projects&nbsp; ↗
              </Link>
            </div>
            <div className="project-grid">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section className="home-feature home-feature-land">
          <div className="home-feature-copy">
            <span className="eyebrow">Plot development</span>
            <h2 className="serif">Foundations for growth.</h2>
            <p>
              Thoughtfully planned plotted communities close to the city&apos;s
              next growth corridors, with transparent documentation and
              practical infrastructure.
            </p>
            <ul className="list">
              <li>DTCP and CMDA approved developments</li>
              <li>Clear documentation and title support</li>
              <li>Well-planned roads and amenities</li>
            </ul>
            <Link href="/projects" className="button button-cream">
              View all plots <span className="arrow">↗</span>
            </Link>
          </div>
        </section>
        <section className="home-feature home-feature-villas">
          <div className="home-feature-copy">
            <span className="eyebrow">Residential development</span>
            <h2 className="serif">Designed for comfortable living.</h2>
            <p>
              For families looking beyond a plot, our select villa communities
              bring thoughtful layouts, reliable construction and everyday
              convenience together.
            </p>
            <Link href="/projects" className="button button-cream">
              View all projects <span className="arrow">↗</span>
            </Link>
          </div>
        </section>
        <section className="section why-section">
          <div className="container">
            <div className="center-heading">
              <span className="eyebrow">Why choose us</span>
              <h2 className="serif">A better way to find your place.</h2>
            </div>
            <div className="benefit-grid">
              <article>
                <strong>30 years of proven delivery</strong>
                <p>
                  Three decades of trust, consistent delivery and carefully
                  planned communities.
                </p>
              </article>
              <article>
                <strong>Transparent pricing</strong>
                <p>
                  Every project is priced with clarity, from the first
                  conversation to handover.
                </p>
              </article>
              <article>
                <strong>90% bank loan assistance</strong>
                <p>
                  Support with documentation and guidance through the buying
                  process.
                </p>
              </article>
              <article>
                <strong>DTCP / CMDA approved</strong>
                <p>
                  Choose developments planned and approved for confident
                  ownership.
                </p>
              </article>
              <article>
                <strong>Built for NRI families</strong>
                <p>
                  Dedicated support for remote buyers, from site visits to
                  registration.
                </p>
              </article>
              <article>
                <strong>Personalised support</strong>
                <p>
                  A responsive team to help you make the right decision at every
                  step.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section process-section">
          <div className="container process-grid">
            <div>
              <span className="eyebrow">Why invest</span>
              <h2 className="serif">Your land journey starts today.</h2>
              <p>
                From choosing the right location to completing registration, our
                team supports you through every milestone.
              </p>
              <Link href="/contact" className="button button-dark">
                Talk to our team <span className="arrow">↗</span>
              </Link>
            </div>
            <div className="process-list">
              {[
                "Property selection",
                "Video call consultation",
                "Property inspection",
                "Legal verification",
                "Documentation",
                "Bank loan assistance",
                "Registration support",
                "Handover",
              ].map((item, index) => (
                <article key={item}>
                  <b>{index + 1}.</b>
                  <div>
                    <strong>{item}</strong>
                    <p>
                      Clear guidance and support to keep your purchase simple
                      and secure.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="container">
            <span className="eyebrow">Contact us</span>
            <h2 className="serif">Book a free virtual site visit.</h2>
            <p>
              Tell us what you are looking for. We will help you find the right
              plot and the right way forward.
            </p>
            <Link href="/contact" className="button button-cream">
              Talk to our team <span className="arrow">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
