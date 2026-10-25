import { PageFrame, PageHero } from "../components/site";

export default function Gallery() {
  return (
    <PageFrame>
      <main>
        <PageHero label="Gallery" title="A closer look at life at Ambal." description="Project images will be added here soon." />
        <section className="container gallery-empty">
          <h2 className="serif">No image found</h2>
          <p>We are updating our gallery. Please check back after some time.</p>
        </section>
      </main>
    </PageFrame>
  );
}