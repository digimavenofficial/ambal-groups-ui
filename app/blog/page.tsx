import Link from "next/link";
import { PageFrame, PageHero } from "../components/site";

export const blogs = [
  {
    slug: "poonamallee-porur-metro-train-nearing-completion",
    title: "Poonamallee - Porur metro train nearing completion",
    author: "vijaysiva",
    date: "January 12, 2025",
    category: "Chennai Metro Train",
    image: "/blog-images/POONAMALLEE%20metro.jpg",
    excerpt: "The Poonamallee-Porur stretch of Chennai Metro Phase II is progressing steadily, bringing improved connectivity to the western suburbs.",
    content: [
      "Chennai Metro Phase II is being delivered across three corridors covering 118.9 km. The Poonamallee-Porur section forms part of Corridor 4 and is planned to improve daily mobility across this growing part of the city.",
      "Station construction and viaduct work have progressed significantly, while systems, lifts, escalators, tracks and overhead equipment are being installed in stages.",
      "The project is expected to strengthen access to Poonamallee, Porur, Kumananchavadi and surrounding growth corridors.",
    ],
  },
  {
    slug: "chennai-bengaluru-expressway-completion",
    title: "Chennai - Bengaluru Expressway to be completed by August 2025",
    author: "vijaysiva",
    date: "January 12, 2025",
    category: "Chennai - Bengaluru Expressway",
    image: "/blog-images/chennai-bengaluru-expressway-completion.jpeg",
    excerpt: "The access-controlled greenfield expressway is improving regional connections between Chennai, Tiruvallur, Kancheepuram, Vellore and Ranipet.",
    content: [
      "The Tamil Nadu section of the four-lane Chennai-Bengaluru Expressway covers 105.7 km and is being developed through multiple construction packages.",
      "Progress varies between packages, with the Walajapet-Arakkonam section among the most advanced. The route is designed to reduce travel time between Chennai and Bengaluru.",
      "The project includes bridges, interchanges and toll plazas, creating stronger links to several emerging industrial and residential locations.",
    ],
  },
  {
    slug: "thirumazhisai-satellite-town",
    title: "Thirumazhisai Satellite Town - CMDA to acquire 330 acres of land",
    author: "vijaysiva",
    date: "January 12, 2025",
    category: "Thirumazhisai Satellite Town",
    image: "/blog-images/thirumazhisai-satellite-town.jpg",
    excerpt: "A proposed loop road and wider satellite-town plan could bring new infrastructure and development opportunities to Thirumazhisai.",
    content: [
      "The Chennai Metropolitan Development Authority has proposed land acquisition for a loop road in Thirumazhisai New Town under the Land Pooling Area Development Scheme.",
      "The wider satellite-town programme is intended to support planned growth, public amenities, research and development zones, and new economic activity.",
      "A long-term roadmap is expected to guide infrastructure development and help coordinate the region's future expansion.",
    ],
  },
  {
    slug: "kuthambakkam-bus-stand",
    title: "Chennai: Kuthambakkam bus stand to open by March 2025",
    author: "vijaysiva",
    date: "January 12, 2025",
    category: "Kuthambakkam Bus Terminal",
    image: "/blog-images/kuthambakkam-bus-stand.jpg",
    excerpt: "The new Kuthambakkam bus terminal is expected to improve regional bus connectivity and support growth around the western Chennai corridor.",
    content: [
      "The Kuthambakkam bus terminal is planned as a major transport facility for western Chennai and nearby districts.",
      "Improved bus connectivity can make daily travel more convenient while supporting new residential, commercial and employment activity around the corridor.",
      "The terminal is part of the broader infrastructure changes shaping the Poonamallee, Thirumazhisai and Kuthambakkam growth belt.",
    ],
  },
];

export default function Blog() {
  return (
    <PageFrame>
      <main>
        <PageHero label="The journal" title="Insights for your next address." description="Useful updates about infrastructure, connectivity and the growth corridors around Chennai." />
        <section className="container blog-grid">
          {blogs.map((blog) => (
            <Link className="blog-card" href={`/blog/${blog.slug}`} key={blog.slug}>
              <div className="blog-card-image" style={{ backgroundImage: `url("${blog.image}")` }} />
              <div className="blog-card-copy">
                <span className="eyebrow">{blog.category}</span>
                <h2 className="serif">{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <span className="text-link">Read article&nbsp; ↗</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </PageFrame>
  );
}
