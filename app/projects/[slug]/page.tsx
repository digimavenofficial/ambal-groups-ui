import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame, projects } from "../../components/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageFrame>
      <main>
        <section className="project-detail-hero">
          <div className="container project-detail-heading">
            <span className="eyebrow">{project.status === "ongoing" ? "Ongoing project" : "Completed project"}</span>
            <h1 className="serif">{project.name}</h1>
            <p>{project.location}</p>
          </div>
        </section>
        <section className="container project-detail">
          <div className="project-detail-image">
            <Image src={project.image} alt={project.name} fill sizes="(max-width: 800px) 100vw, 58vw" priority />
          </div>
          <div className="project-detail-copy">
            <span className="eyebrow">Property details</span>
            <h2 className="serif">{project.description}</h2>
            <p className="project-id">Property ID: {project.propertyId}</p>
            <div className="project-facts">
              {project.facts.map((fact) => <span key={fact}>{fact}</span>)}
            </div>
            <h3>Description</h3>
            <p>{project.description}</p>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <Link href="/contact" className="button button-dark">Enquire about this project <span className="arrow">↗</span></Link>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
