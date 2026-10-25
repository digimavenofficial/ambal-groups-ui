import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "../../components/site";
import { blogs } from "../page";

export const instant = false;

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) notFound();

  return (
    <PageFrame>
      <main>
        <section className="blog-detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(11,31,26,.88), rgba(11,31,26,.3)), url("${blog.image}")` }}>
          <div className="container">
            <span className="eyebrow">{blog.category}</span>
            <h1 className="serif">{blog.title}</h1>
            <p>By {blog.author} · {blog.date}</p>
          </div>
        </section>
        <article className="container blog-detail-content">
          {blog.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Link href="/blog" className="button button-dark">Back to journal <span className="arrow">↗</span></Link>
        </article>
      </main>
    </PageFrame>
  );
}
