import Image from "next/image";
import { PageFrame, PageHero } from "../components/site";

const galleryImages = [
  { src: "/gallery-images/1.jpeg", alt: "Ambal Groups community project view", span: "7" },
  { src: "/gallery-images/2.jpeg", alt: "Ambal Groups residential development", span: "5" },
  { src: "/gallery-images/3.jpeg", alt: "Ambal Groups site and roads", span: "4" },
  { src: "/gallery-images/4.jpeg", alt: "Ambal Groups open space and infrastructure", span: "8" },
  { src: "/gallery-images/5.jpeg", alt: "Ambal Groups family living environment", span: "6" },
  { src: "/gallery-images/6.jpeg", alt: "Ambal Groups project exterior", span: "6" },
  { src: "/gallery-images/7.jpeg", alt: "Ambal Groups community scene", span: "5" },
  { src: "/gallery-images/8.jpeg", alt: "Ambal Groups current project view", span: "7" },
  { src: "/gallery-images/9.jpeg", alt: "Ambal Groups residential neighborhood", span: "12" },
];

export default function Gallery() {
  return (
    <PageFrame>
      <main>
        <PageHero
          label="Gallery"
          title="A closer look at life at Ambal."
          description="A glimpse of the spaces, communities and moments that define our projects across Chennai."
          compact
        />
        <section className="container gallery-grid" aria-label="Ambal Groups gallery">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="gallery-item"
              style={{
                backgroundImage: `url(${image.src})`,
                gridColumn: `span ${image.span}`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={image.src === "/gallery-images/1.jpeg"}
              />
            </div>
          ))}
        </section>
      </main>
    </PageFrame>
  );
}