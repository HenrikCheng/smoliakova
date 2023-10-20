import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          As a curious person who loves architecture and urban design,
          I admire the complexity of urban and natural environments.
          It is fascinating how every element affects the life of
          people and the living organisms through interaction with
          buildings, spaces, nature and other people.
        </p>
        <p>
          I have training in Architecture from my Bachelor’s degree
          and recently graduated from the Master&apos;s program in
          Sustainable Urban Planning and Design program (SUPD) at KTH
          with a major in architecture.
        </p>
        <p>
          The master&apos;s thesis that Lamia Ahmed and I were working
          on during our last semester at the SUPD program recently
          received recognition by two awards: scholarship for the best
          degree projects in Applied Urban Design funded by Birthe &
          Per Arwidssons Stiftelse and KTH; and Student Award 2021 by
          ISOCARP.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
