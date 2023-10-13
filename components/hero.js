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
        <div className="absolute bottom-0 flex w-full flex-col items-center">
          <h1 className="font-mono text-6xl font-bold tracking-widest">
            Portfolio
          </h1>
          <h3 className="font-mono text-4xl font-bold tracking-wide">
            Architect Mariia Smoliakova
          </h3>
        </div>
      </div>
    </Container>
  );
}
