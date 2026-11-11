import Link from "next/link";
import Image from "next/image";
import Header from "./header";

type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  price: string;
  status: "completed" | "ongoing" | "upcoming";
  image: string;
  heroImage?: string;
  overviewImage?: string;
  bannerNote?: string;
  brochureUrl?: string;
  contactPhone?: string;
  propertyId: string;
  facts: string[];
  summaryFacts?: { label: string; value: string }[];
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "2bhk-individual-villa-for-sale",
    name: "2BHK Individual Villa",
    location: "Aranvayal Kuppam",
    type: "2BHK individual villa",
    price: "Completed project",
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
    price: "Completed project",
    status: "completed",
    image: "/project-images/2.webp",
    propertyId: "Ambal-2024-12",
    facts: ["Plot size: 571 to 1972 sq ft", "Park: Available", "Kuthambakkam bus stand: 10 minutes", "Poonamallee metro station: 20 minutes"],
    description: "DTCP approved villa plots for sale at Aranvayol Kuppam, near Tirumazhisai.",
    highlights: ["10 minutes from Kuthambakkam bus stand", "15 minutes from Chennai - Bangalore NH", "20 minutes from the nearest metro station", "Near the upcoming Chennai peripheral ring road and Tirumazhisai satellite township"],
  },
  {
    slug: "1bhk-and-2bhk-flats-for-sale-in-poonamallee",
    name: "1BHK and 2BHK Flats for Sale in Poonamallee",
    location: "Sri Ambal Vijayalakshmi Nagar, Meppur",
    type: "1BHK and 2BHK flats",
    price: "Completed project",
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
    price: "Completed project",
    status: "completed",
    image: "/project-images/4.webp",
    propertyId: "RH-2017-10",
    facts: ["Kuthambakkam bus stand: 10 minutes", "Chennai - Bangalore NH: 15 minutes", "Nearest metro station: 20 minutes"],
    description: "DTCP approved villa plots for sale at Aranvayol Kuppam, near Tirumazhisai.",
    highlights: ["10 minutes from Kuthambakkam bus stand", "15 minutes from Chennai - Bangalore NH", "20 minutes from the nearest metro station", "Near the upcoming Chennai peripheral ring road and Tirumazhisai satellite township"],
  },
  {
    slug: "sri-ambal-vijayalakshmi-nagar-phase-i",
    name: "Sri Ambal Vijayalakshmi Nagar - Phase I",
    location: "Avadi | Ayilcheri",
    type: "Premium 2BHK flats",
    price: "Prebooking ₹5250/- per sq ft",
    status: "ongoing",
    image: "/project-images/sri-ambal-%20vijayalakshmi-nagar-images/sri-ambal-vijayalakshmi-nagar-banner.png",
    brochureUrl: "/project-images/sri-ambal-%20vijayalakshmi-nagar-images/sri-ambal-vijayalakshmi-nagar-brochure.pdf",
    propertyId: "Sri-Ambal-VJN-Phase-I",
    summaryFacts: [
      { label: "Starting price", value: "₹35.54L*" },
      { label: "Property", value: "Premium 2BHK flats" },
      { label: "Location", value: "Avadi | Ayilcheri" },
    ],
    facts: [
      "Location: Avadi | Ayilcheri",
      "Units: 2BHK Premium Flats",
      "Prebooking: ₹5250/sq ft",
      "Starting price: ₹35.54L*",
      "Approval: CMDA approved",
    ],
    description: "Premium 2BHK flats for sale at Sri Ambal Vijayalakshmi Nagar Phase I, Avadi.",
    highlights: [
      "Current prebooking opportunity",
      "CMDA approved residential project",
      "Close to Avadi and Ayilcheri connectivity",
      "Well-planned community with essential amenities",
      "Ideal for families seeking long-term value",
    ],
  },
  {
    slug: "greenscape-3-thirumazhisai",
    name: "Greenscape-3 Thirumazhisai",
    location: "Thirumazhisai, Chennai",
    type: "Residential plots",
    price: "Enquire for pricing",
    status: "ongoing",
    image: "/project-images/greenscape-3-thirumazhisai-images/Screenshot%202026-11-07%20161719.png",
    heroImage: "/project-images/greenscape-3-thirumazhisai-images/greenscape-3-hero.jpg",
    overviewImage: "/project-images/greenscape-3-thirumazhisai-images/Screenshot 2026-11-07 161511.png",
    bannerNote: "EOI Open With Priority Plot Selection In The Launch Phase*",
    brochureUrl: "/Greenscape%203%20Brochure%20Ongoing%20Project.pdf",
    contactPhone: "+919123553555",
    propertyId: "Greenscape-3-Thirumazhisai",
    summaryFacts: [
      { label: "Plot size", value: "788-1,552 sq ft" },
      { label: "Price", value: "Enquire for pricing" },
      { label: "Location", value: "Thirumazhisai" },
    ],
    facts: [
      "Well-planned residential plots",
      "Strategically located in Thirumazhisai",
      "Chennai Peripheral Ring Road connectivity",
      "Near Kuthambakkam Bus Terminus",
    ],
    description: "A thoughtfully planned residential plotted development in Thirumazhisai, one of West Chennai's rapidly developing corridors.",
    highlights: [
      "Excellent road connectivity",
      "Easy access to Poonamallee",
      "Close to schools, colleges and healthcare",
      "Surrounded by developing residential communities",
      "Convenient access to major infrastructure corridors",
      "Suitable for investment and residential living",
    ],
  },
  {
    slug: "pavakam-upcoming-project",
    name: "Ambal Groups Pavakam",
    location: "Pavakam",
    type: "Upcoming residential project",
    price: "Coming soon",
    status: "upcoming",
    image: "/project-images/3.webp",
    propertyId: "Ambal-Pavakam",
    facts: ["Location: Pavakam", "Upcoming project", "More details coming soon"],
    description: "An upcoming Ambal Groups project planned for Pavakam.",
    highlights: ["Upcoming project", "More details coming soon", "Register your interest through our contact page"],
  },
  {
    slug: "pankam-avadi-apartments",
    name: "Pankam, Avadi Apartments",
    location: "Pankam, Avadi",
    type: "Apartments",
    price: "Completed project",
    status: "completed",
    image: "/project-images/1.jpg",
    propertyId: "Ambal-Pankam-Avadi",
    facts: ["Location: Pankam, Avadi", "Apartments", "Completed project"],
    description: "Completed apartment homes at Pankam, Avadi.",
    highlights: ["Completed project", "Convenient Avadi location", "Enquire for project information"],
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
              <a href="mailto:support@ambalgroups.com">
                support@ambalgroups.com
              </a>
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
  compact = false,
}: {
  label: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero${compact ? " compact" : ""}`}>
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
      href="https://wa.me/919444264567"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ambal Groups on WhatsApp"
    >
      <Image
        className="whatsapp-icon"
        src="/whatsapp.svg"
        alt=""
        width={800}
        height={800}
      />
    </a>
  );
}
