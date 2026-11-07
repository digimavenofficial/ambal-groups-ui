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
      <section className="container project-detail">
        <div className="project-detail-image">
          <Image
            className="project-banner-image"
            src={project.image}
            alt={`${project.name} project banner`}
            width={1600}
            height={1100}
            sizes="(max-width: 900px) 100vw, 1200px"
            priority
          />
        </div>
        <header className="project-detail-heading">
          <span className="eyebrow">
            {project.status === "ongoing" ? "Ongoing project" : project.status === "upcoming" ? "Upcoming project" : "Completed project"}
          </span>
          <h1 className="serif">{project.name}</h1>
          <p>{project.location}</p>
        </header>
        <div className="project-summary-marquee" aria-label="Project overview">
          <div className="project-summary-track">
            <div className="project-summary-group">
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
            <div className="project-summary-group" aria-hidden="true">
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
          </div>
        </div>
        <section className="project-detail-copy">
          <div className="project-overview-copy">
            <span className="eyebrow">Project overview</span>
            <h2 className="serif">{project.description}</h2>
            <p className="project-id">Project ID: {project.propertyId}</p>
          </div>
          <div className="project-information">
            <div>
              <h3>Project details</h3>
              <ul className="project-highlights">
                {project.facts.map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
            </div>
            <div>
              <h3>Highlights</h3>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </div>
          <div className="project-detail-actions">
            <a className="button button-cream" href={`tel:${project.contactPhone || "+919444264567"}`}>
              Call for enquiry <span className="arrow">↗</span>
            </a>
            <Link href={`/contact?project=${project.slug}`} className="button button-dark">
              Enquiry form <span className="arrow">↗</span>
            </Link>
            {project.brochureUrl && (
              <a className="button button-outline" href={project.brochureUrl} download>
                Download brochure <span className="arrow">↓</span>
              </a>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
