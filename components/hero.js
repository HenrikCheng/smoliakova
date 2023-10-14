import Container from "@/components/container";
import Image from "next/image";

export default function Hero(props) {
  return (
    <Container>
      <div className="relative h-auto w-full">
        <Image
          src="/img/mariia.jpg"
          alt="Mariia"
          layout="responsive"
          width={1707}
          height={2560}
          className="grayscale"
        />
        <div className="absolute bottom-0 flex w-full flex-col items-center font-mono font-bold text-black dark:text-white">
          <h1 className="text-2xl tracking-widest sm:text-4xl md:text-6xl">
            Portfolio
          </h1>
          <h3 className="text-md tracking-wide sm:text-2xl md:text-4xl">
            Architect Mariia Smoliakova
          </h3>
        </div>
      </div>
    </Container>
  );
}
