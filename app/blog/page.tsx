import { PageFrame, PageHero } from "../components/site";

export default function Blog() {
  return <PageFrame><main><PageHero label="The journal" title="Insights for your next address." description="We are preparing useful updates and guidance about plotted developments, land ownership and life around Chennai." /><section className="container blog-empty"><h2 className="serif">No blog found</h2><p>Please check again after some time for updates from Ambal Groups.</p></section></main></PageFrame>;
}
