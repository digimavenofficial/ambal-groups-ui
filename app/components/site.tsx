import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export const projects = [
  {
    slug: "2bhk-individual-villa-for-sale",
    name: "2BHK Individual Villa for Sale",
    location: "Aranvayal Kuppam",
    type: "2BHK individual villa",
    price: "From ₹30.50 Lakhs",
    status: "completed",
    image: "/project-images/1.jpg",
    propertyId: "None",
    facts: ["Bedrooms: 2", "Bathrooms: 2", "Area: 712 sq ft", "Lot size: 651 sq ft"],
    description: "2BHK individual villas for sale at Aranvayol Kuppam.",
    highlights: ["Price starting ₹30.50L", "DTCP and RERA approved", "Semi furnished", "Well developed park with children play equipment", "Layout fenced with 6 ft height compound wall", "10 minutes from Kuthambakkam bus stand", "15 minutes from Chennai - Bangalore NH", "Near the upcoming Chennai peripheral ring road and Tirumazhisai satellite township"],
  },
  {
    slug: "sri-ambal-venkateswara-nagar-phase-i",
    name: "Sri Ambal Venkateswara Nagar - Phase I",
    location: "Aranvayol Kuppam, Tiruvallur",
    type: "DTCP approved villa plots",
    price: "₹1,999 / sq.ft",
    status: "completed",
    image: "/project-images/2.webp",
    propertyId: "Ambal-2024-12",
    facts: ["Plot size: 571 to 1972 sq ft", "Park: Available", "Kuthambakkam bus stand: 10 minutes", "Poonamallee metro station: 20 minutes"],
    description: "DTCP approved villa plots for sale at Aranvayol Kuppam, near Tirumazhisai.",
    highlights: ["Launching offer - ₹1,999/sq.ft", "10 minutes from Kuthambakkam bus stand", "15 minutes from Chennai - Bangalore NH", "20 minutes from the nearest metro station", "Near the upcoming Chennai peripheral ring road and Tirumazhisai satellite township"],
  },
  {
    slug: "1bhk-and-2bhk-flats-for-sale-in-poonamallee",
    name: "1BHK and 2BHK Flats for Sale in Poonamallee",
    location: "Sri Ambal Vijayalakshmi Nagar, Meppur",
    type: "1BHK and 2BHK flats",
    price: "From ₹22.27 Lakhs",
    status: "completed",
    image: "/project-images/3.webp",
    propertyId: "RH-2017-12",
    facts: ["Bedrooms: 1", "Bathrooms: 1", "Year built: 2025", "Area: 495 sq ft"],
    description: "1BHK and 2BHK flats for sale at Poonamallee.",
    highlights: ["Price starting ₹22.27L", "CMDA and RERA approved", "Semi furnished", "Well developed park with children play equipment", "Near upcoming Poonamallee metro station", "Just 1 km from Chennai - Bangalore NH", "Near Panimalar Engineering and Medical College"],
  },
  {
    slug: "sri-ambal-venkateswara-nagar-phase-ii",
    name: "Sri Ambal Venkateswara Nagar Phase II",
    location: "Aranvayol Kuppam, Tiruvallur",
    type: "DTCP approved villa plots",
    price: "Launching soon",
    status: "ongoing",
    image: "/project-images/4.webp",
    propertyId: "RH-2017-10",
    facts: ["Kuthambakkam bus stand: 10 minutes", "Chennai - Bangalore NH: 15 minutes", "Nearest metro station: 20 minutes"],
    description: "DTCP approved villa plots for sale at Aranvayol Kuppam, near Tirumazhisai.",
    highlights: ["10 minutes from Kuthambakkam bus stand", "15 minutes from Chennai - Bangalore NH", "20 minutes from the nearest metro station", "Near the upcoming Chennai peripheral ring road and Tirumazhisai satellite township"],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <Image
              className="footer-logo"
              src="/logo.jpeg"
              alt="Ambal Groups"
              width={180}
              height={180}
            />
            <p>
              Ambal Groups develops trusted residential plots and select villa
              communities across Chennai, with a focus on clear documentation
              and long-term value.
            </p>
          </div>
          <div>
            <div className="footer-heading">Quick links</div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <div className="footer-heading">Contact us</div>
            <div className="footer-links">
              <span>
                No:7, 4th Street, Rukmani Nagar,
                <br />
                Poonamallee, Chennai-600 056
              </span>
              <a href="mailto:admin@porursriambal.com">
                admin@porursriambal.com
              </a>
              <a href="tel:+919444274567">+91-9444-274-567</a>
              <a href="tel:+919444264567">+91-9444-264-567</a>
              {/* <span>Instagram · Facebook · YouTube</span> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          {/* <Link href="/about">Privacy Policy</Link> */}
          <span>© 2026 Ambal Groups. All rights reserved.</span>
          {/* <Link href="/contact">Terms and Conditions</Link> */}
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header overlay />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{label}</span>
        <h1 className="serif">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      className="project-card"
      href={`/projects/${project.slug}`}
      style={{ backgroundImage: `url("${project.image}")` }}
    >
      <div className="project-content">
        <span className="project-location">{project.location}</span>
        <h3 className="serif">{project.name}</h3>
        <div className="project-meta">
          <span>{project.type}</span>
          <strong>{project.price}</strong>
        </div>
      </div>
    </Link>
  );
}

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/919444274567"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ambal Groups on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.86c0 2.09.55 4.13 1.59 5.92L.13 24l6.36-1.67a11.86 11.86 0 0 0 5.59 1.42h.01c6.53 0 11.84-5.32 11.84-11.86 0-3.17-1.23-6.14-3.43-8.39Zm-8.42 18.2h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.82 9.82 0 0 1-1.5-5.18C2.2 6.44 6.63 2 12.08 2a9.8 9.8 0 0 1 6.98 2.9 9.87 9.87 0 0 1 2.87 7c0 5.44-4.42 9.8-9.85 9.8Z" />
      </svg>
    </a>
  );
}
