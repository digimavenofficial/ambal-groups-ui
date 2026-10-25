import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export const projects = [
  { name: "Venkateswara Nagar", location: "Aranvayal Kuppam", type: "DTCP approved villa plots", price: "From ₹1,999 / sq.ft", status: "ongoing" },
  { name: "Greenfield Villas", location: "Poonamallee", type: "2 BHK individual villas", price: "From ₹30.5 Lakhs", status: "ongoing" },
  { name: "Ambal Heights", location: "Thirumazhisai", type: "Completed villa community", price: "From ₹22.27 Lakhs", status: "completed" },
  { name: "Srinivasa Garden", location: "Kuthambakkam", type: "Residential plotted community", price: "Launching soon", status: "ongoing" },
];

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top">
      <div className="footer-about"><Image className="footer-logo" src="/logo.jpeg" alt="Ambal Groups" width={180} height={180} /><p>Ambal Groups develops trusted residential plots and select villa communities across Chennai, with a focus on clear documentation and long-term value.</p></div>
      <div><div className="footer-heading">Quick links</div><div className="footer-links"><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/projects">Projects</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact Us</Link><Link href="/blog">Blog</Link></div></div>
      <div><div className="footer-heading">Contact us</div><div className="footer-links"><span>No:7, 4th Street, Rukmani Nagar,<br />Poonamallee, Chennai-600 056</span><a href="mailto:admin@porursriambal.com">admin@porursriambal.com</a><a href="tel:+919444274567">+91-9444-274-567</a><a href="tel:+919444264567">+91-9444-264-567</a><span>Instagram · Facebook · YouTube</span></div></div>
    </div>
    <div className="footer-bottom"><Link href="/about">Privacy Policy</Link><span>© 2026 Ambal Groups. All rights reserved.</span><Link href="/contact">Terms and Conditions</Link></div>
  </div></footer>;
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <><Header overlay />{children}<Footer /><WhatsAppButton /></>; }

export function PageHero({ label, title, description }: { label: string; title: string; description: string }) { return <section className="page-hero"><div className="container"><span className="eyebrow">{label}</span><h1 className="serif">{title}</h1><p>{description}</p></div></section>; }

export function ProjectCard({ project }: { project: typeof projects[number] }) { return <article className="project-card"><div className="project-content"><span className="project-location">{project.location}</span><h3 className="serif">{project.name}</h3><div className="project-meta"><span>{project.type}</span><strong>{project.price}</strong></div></div></article>; }

export function WhatsAppButton() {
  return <a className="whatsapp-button" href="https://wa.me/919444274567" target="_blank" rel="noreferrer" aria-label="Chat with Ambal Groups on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.86c0 2.09.55 4.13 1.59 5.92L.13 24l6.36-1.67a11.86 11.86 0 0 0 5.59 1.42h.01c6.53 0 11.84-5.32 11.84-11.86 0-3.17-1.23-6.14-3.43-8.39Zm-8.42 18.2h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.82 9.82 0 0 1-1.5-5.18C2.2 6.44 6.63 2 12.08 2a9.8 9.8 0 0 1 6.98 2.9 9.87 9.87 0 0 1 2.87 7c0 5.44-4.42 9.8-9.85 9.8Z" /></svg></a>;
}