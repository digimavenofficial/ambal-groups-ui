import { PageFrame, PageHero } from "../components/site";

const history = [
  "Lakshmi Avenue, Kumananchavadi",
  "Ambal City, Poonamallee",
  "Tiruvallur City Phase I, II, III - Mangadu",
  "Sri Ambal Gajalakshmi Nagar Phase I, II - Mangadu",
  "Sri Ambal Vijayalakshmi Nagar Phase I, II, III - Ayilcheri (Kannapalayam)",
  "Sri Ambal Garden, Kannapalayam",
  "Sri Ambal Vijayalakshmi Nagar, Mettupalayam",
  "Sri Ambal Vijayalakshmi Nagar, Meppur",
  "Sri Ambal Venkateswara Nagar Phase I, II, III - Aranvayal Kuppam (Present running project)",
];

export default function About() {
  return (
    <PageFrame>
      <main>
        <PageHero
          label="About us"
          title="A legacy of trust, built plot by plot."
          description="Ambal Group of companies is one of Chennai's leading property developers, with over two decades of expertise in plot developments and residential housing across Chennai."
        />
        <section className="container page-intro about-intro">
          <span className="eyebrow">About Ambal Groups</span>
          <h2 className="serif">
            At Ambal Groups, we build trust, not just buildings.
          </h2>
          <p>
            We help you realise your dreams of owning a home or investing in
            land at affordable prices. The best investment on Earth is Earth,
            so keep investing for a bright future.
          </p>
          <p>
            Ambal Group of companies is one of Chennai&apos;s leading property
            developers with over two decades of expertise in plot developments
            and residential housing developments in and around Chennai. We are
            a popular name in Poonamallee, Mangadu, Avadi and other growing
            locations in the city.
          </p>
          <p>
            We cater to every requirement, taste and budget, making us a
            one-stop solution for property and housing needs. Our projects
            offer convenient access to the city, basic facilities and strong
            growth potential, making our plots and villas ideal investment
            choices.
          </p>
        </section>
        <section className="history-section">
          <div className="container">
            <h2 className="history-title">History</h2>
            <div className="history-timeline">
              {history.map((project, index) => (
                <article
                  className={`history-item ${index % 2 === 0 ? "history-left" : "history-right"}`}
                  key={project}
                >
                  <span className="history-dot" aria-hidden="true" />
                  <div className="history-card">{project}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="split-feature">
          <div className="split-image" />
          <div className="split-copy">
            <div>
              <span className="eyebrow">What guides us</span>
              <h2 className="serif">Good plots begin with good decisions.</h2>
              <ul className="list">
                <li>Locations chosen for long-term value</li>
                <li>Planning that respects the neighbourhood</li>
                <li>Documentation support from site visit to registration</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}