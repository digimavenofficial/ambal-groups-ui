import Link from "next/link";
import Header from "./header";

export const projects = [
  { name: "Venkateswara Nagar", location: "Aranvayal Kuppam", type: "DTCP approved villa plots", price: "From ₹1,999 / sq.ft" },
  { name: "Greenfield Villas", location: "Poonamallee", type: "2 BHK individual villas", price: "From ₹30.5 Lakhs" },
  { name: "Ambal Heights", location: "Thirumazhisai", type: "1 & 2 BHK apartments", price: "From ₹22.27 Lakhs" },
  { name: "Srinivasa Garden", location: "Kuthambakkam", type: "Residential plotted community", price: "Launching soon" },
];

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><span className="eyebrow">Build your future</span><h3 className="serif">A better place to begin, grow and belong.</h3><Link href="/contact" className="button button-cream">Find your home <span className="arrow">↗</span></Link></div>
      <div><div className="footer-heading">Explore</div><div className="footer-links"><Link href="/about">Our story</Link><Link href="/projects">Projects</Link><Link href="/gallery">Gallery</Link><Link href="/blog">Journal</Link></div></div>
      <div><div className="footer-heading">Visit us</div><div className="footer-links"><span>Porur, Chennai<br />Tamil Nadu 600116</span><span>Mon — Sat<br />9:00 am — 6:00 pm</span></div></div>
      <div><div className="footer-heading">Get in touch</div><div className="footer-links"><a href="tel:+919444275678">+91 94442 75678</a><a href="mailto:hello@sriambal.com">hello@sriambal.com</a><span>Instagram&nbsp;&nbsp; LinkedIn</span></div></div>
    </div><div className="footer-bottom"><span>© 2026 Sri Ambal Promoters Pvt. Ltd.</span><span>Homes with a sense of place.</span></div>
  </div></footer>;
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <><Header overlay />{children}<Footer /></>; }

export function PageHero({ label, title, description }: { label: string; title: string; description: string }) { return <section className="page-hero"><div className="container"><span className="eyebrow">{label}</span><h1 className="serif">{title}</h1><p>{description}</p></div></section>; }

export function ProjectCard({ project }: { project: typeof projects[number] }) { return <article className="project-card"><div className="project-content"><span className="project-location">{project.location}</span><h3 className="serif">{project.name}</h3><div className="project-meta"><span>{project.type}</span><strong>{project.price}</strong></div></div></article>; }