import { PageFrame, PageHero, ProjectCard, projects } from "../../components/site";

export default function Ongoing() {
  return (
    <PageFrame>
      <main>
        <PageHero
          label="Projects / Ongoing"
          title="Your future is taking shape."
          description="Discover the communities currently coming to life across Chennai's most connected growth corridors."
        />
        <section className="container" style={{ paddingTop: 32, paddingBottom: 12 }}>
          <div className="ongoing-brochure-wrap">
            <a
              className="button button-dark"
              href="/Greenscape%203%20Brochure%20Ongoing%20Project.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download ongoing project brochure <span className="arrow">↗</span>
            </a>
          </div>
        </section>
        <section className="container projects-page-grid" style={{ paddingTop: 36 }}>
          {projects
            .filter((project) => project.status === "ongoing")
            .map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
        </section>
      </main>
    </PageFrame>
  );
}