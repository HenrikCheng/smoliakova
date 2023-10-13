import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "Portfolio - Mariia Smoliakova",
      template: "%s | Stablo"
    },
    description:
      settings?.description || "Architect MSA & Urban Designer",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Surjith" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Stablo Template",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />
      <Hero />
      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
