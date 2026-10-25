import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export const projects = [
  { name: "Venkateswara Nagar", location: "Aranvayal Kuppam", type: "DTCP approved villa plots", price: "From ₹1,999 / sq.ft", status: "ongoing" },
  { name: "Greenfield Villas", location: "Poonamallee", type: "2 BHK individual villas", price: "From ₹30.5 Lakhs", status: "ongoing" },
  { name: "Ambal Heights", location: "Thirumazhisai", type: "1 & 2 BHK apartments", price: "From ₹22.27 Lakhs", status: "completed" },
  { name: "Srinivasa Garden", location: "Kuthambakkam", type: "Residential plotted community", price: "Launching soon", status: "ongoing" },
];

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top">
      <div className="footer-about"><Image className="footer-logo" src="/logo.jpeg" alt="Ambal Groups" width={180} height={180} /><p>Ambal Groups creates trusted homes, communities and living spaces designed for families and the future.</p></div>
      <div><div className="footer-heading">Quick links</div><div className="footer-links"><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/projects">Projects</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact Us</Link><Link href="/blog">Blog</Link></div></div>
      <div><div className="footer-heading">Contact us</div><div className="footer-links"><span>Porur, Chennai<br />Tamil Nadu 600116</span><a href="mailto:hello@ambalgroups.com">hello@ambalgroups.com</a><a href="tel:+919444275678">+91 94442 75678</a><span>Instagram · Facebook · YouTube</span></div></div>
    </div>
    <div className="footer-bottom"><Link href="/about">Privacy Policy</Link><span>© 2026 Ambal Groups. All rights reserved.</span><Link href="/contact">Terms and Conditions</Link></div>
  </div></footer>;
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <><Header overlay />{children}<Footer /><WhatsAppButton /></>; }

export function PageHero({ label, title, description }: { label: string; title: string; description: string }) { return <section className="page-hero"><div className="container"><span className="eyebrow">{label}</span><h1 className="serif">{title}</h1><p>{description}</p></div></section>; }

export function ProjectCard({ project }: { project: typeof projects[number] }) { return <article className="project-card"><div className="project-content"><span className="project-location">{project.location}</span><h3 className="serif">{project.name}</h3><div className="project-meta"><span>{project.type}</span><strong>{project.price}</strong></div></div></article>; }

export function WhatsAppButton() {
  return <a className="whatsapp-button" href="https://wa.me/919444275678" target="_blank" rel="noreferrer" aria-label="Chat with Ambal Groups on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.86c0 2.09.55 4.13 1.59 5.92L.13 24l6.36-1.67a11.86 11.86 0 0 0 5.59 1.42h.01c6.53 0 11.84-5.32 11.84-11.86 0-3.17-1.23-6.14-3.43-8.39Zm-8.42 18.2h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.82 9.82 0 0 1-1.5-5.18C2.2 6.44 6.63 2 12.08 2a9.8 9.8 0 0 1 6.98 2.9 9.87 9.87 0 0 1 2.87 7c0 5.44-4.42 9.8-9.85 9.8Zm5.4-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg></a>;
}