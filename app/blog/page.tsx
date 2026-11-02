import Link from "next/link";
import { PageFrame, PageHero } from "../components/site";

export const blogs = [
  {
    slug: "phase-iii-apartments-ikkadu",
    title: "Phase III apartments planned for Ikkadu",
    author: "vijaysiva",
    date: "November 2, 2026",
    category: "Project update",
    image: "/blog-images/POONAMALLEE%20metro.jpg",
    excerpt: "Ambal Groups' Phase III apartments bring a new residential opportunity to the growing Ikkadu corridor.",
    content: [
      "Phase III is a current Ambal Groups apartment project planned for families seeking a well-connected home in Ikkadu.",
      "The project is part of Ambal Groups' continuing residential development across Chennai's growing western corridors.",
      "Contact our team for current availability, specifications and project updates.",
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
    slug: "pavakam-upcoming-project",
    title: "Ambal Groups announces upcoming Pavakam project",
    author: "vijaysiva",
    date: "January 12, 2025",
    category: "Upcoming project",
    image: "/blog-images/thirumazhisai-satellite-town.jpg",
    excerpt: "Pavakam is the next upcoming location in Ambal Groups' growing portfolio of residential projects.",
    content: [
      "Ambal Groups is preparing an upcoming residential project in Pavakam.",
      "More details about the project, availability and specifications will be shared as planning progresses.",
      "Register your interest through the contact page to receive future updates.",
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
