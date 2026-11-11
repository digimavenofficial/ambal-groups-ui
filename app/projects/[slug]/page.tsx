import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageFrame, projects } from "../../components/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <PageFrame>
      <Suspense fallback={<ProjectLoading />}>
        <ProjectContent params={params} />
      </Suspense>
    </PageFrame>
  );
}

function ProjectLoading() {
  return (
    <main>
      <section className="container gallery-empty" aria-label="Loading project">
        <p>Loading project...</p>
      </section>
    </main>
  );
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main>
        <section className="container" style={{ padding: "120px 0 160px" }}>
          <div className="gallery-empty">
            <h2 className="serif">Project not found</h2>
            <p>The requested project is not available right now.</p>
            <div style={{ marginTop: 24 }}>
              <Link href="/projects" className="button button-dark">
                Back to projects <span className="arrow">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="project-landing-hero">
        <div className="container project-landing-grid">
          <div className="project-landing-copy">
            <span className="project-status-tag">
              {project.status === "ongoing" ? "Now welcoming enquiries" : project.status === "upcoming" ? "Coming soon" : "A completed community"}
            </span>
            <p className="project-location-kicker">{project.location}</p>
            <h1 className="serif">{project.name}</h1>
            <p className="project-landing-description">{project.description}</p>
            <div className="project-landing-facts">
              {project.facts.slice(0, 4).map((fact, index) => (
                <p key={fact}><span>0{index + 1}</span>{fact}</p>
              ))}
            </div>
            <div className="project-landing-price">
              <span>{project.status === "ongoing" ? "Explore current availability" : "Project status"}</span>
              <strong>{project.price}</strong>
            </div>
            <div className="project-landing-actions">
              <Link href={`/contact?project=${project.slug}`} className="button button-cream">
                Enquire now <span className="arrow">↗</span>
              </Link>
              <a className="project-scroll-link" href="#project-overview">
                Explore the project <span className="arrow">↓</span>
              </a>
            </div>
          </div>
          <div className="project-landing-media">
            <div className="project-landing-visual">
              <Image
                src={project.heroImage || project.image}
                alt={`${project.name} community view`}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                priority
              />
              <span className="project-image-caption">A place to put down roots</span>
            </div>
            <p className="project-hero-ribbon">
              {project.bannerNote || "Talk with our team to explore this project."}
            </p>
            <a className="project-image-scroll" href="#project-overview">
              <span>Scroll to explore</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <div className="project-summary-marquee" aria-label="Project facts">
        <div className="project-summary-track">
          {[0, 1].map((copy) => (
            <div className="project-summary-group" aria-hidden={copy === 1} key={copy}>
              {(project.summaryFacts ?? [
                { label: "Property", value: project.type },
                { label: "Price", value: project.price },
                { label: "Location", value: project.location },
              ]).map((fact) => (
                <div className="project-summary-fact" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="project-overview-section" id="project-overview">
        <div className="container project-overview-grid">
          <div className="project-overview-copy">
            <span className="eyebrow">{project.name} / Overview</span>
            <h2 className="serif">A considered place to build your next chapter.</h2>
            <p>{project.description}</p>
            <div className="project-story-note">
              <span>Project reference</span>
              <strong>{project.propertyId}</strong>
            </div>
            <p className="project-eoi-note">Thoughtfully planned for everyday living, long-term value, and a more connected future.</p>
          </div>
          <div className="project-overview-visual">
            <Image
              src={project.overviewImage || project.image}
              alt={`${project.name} development and surroundings`}
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section className="project-highlights-section">
        <div className="container">
          <div className="project-highlights-heading">
            <span className="eyebrow">{project.name} / Highlights</span>
            <h2 className="serif">Made for the way you want to live.</h2>
            <p>{project.type} with the essentials, access and room to grow.</p>
          </div>
          <div className="project-highlights-grid">
            {project.highlights.map((highlight, index) => (
              <article className="project-highlight" key={highlight}>
                <span>0{index + 1}</span>
                <h3>{highlight}</h3>
                <p>Planned to make everyday living feel more convenient and considered.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-pricing-section" id="project-pricing">
        <div className="container project-pricing-grid">
          <div>
            <span className="eyebrow">{project.name} / Availability</span>
            <h2 className="serif">Find the right place for your plans.</h2>
            <p>Talk to our team for current availability, pricing, and a guided site visit.</p>
            <div className="project-landing-actions">
              <a className="button button-dark" href={`tel:${project.contactPhone || "+919444264567"}`}>
                Call for details <span className="arrow">↗</span>
              </a>
              <Link href={`/contact?project=${project.slug}`} className="button button-outline">
                Enquiry form <span className="arrow">↗</span>
              </Link>
            </div>
          </div>
          <div className="project-pricing-panel">
            <span>Current pricing</span>
            <strong>{project.price}</strong>
            <p>{project.type}</p>
            {project.brochureUrl && (
              <a className="button button-cream" href={project.brochureUrl} download>
                Download brochure <span className="arrow">↓</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
