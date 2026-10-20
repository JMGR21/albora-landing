import Hero from "@/components/albora/Hero";
import QueEsAlbora from "@/components/albora/QueEsAlbora";
import QueIncluye from "@/components/albora/QueIncluye";
import ComoFunciona from "@/components/albora/ComoFunciona";
import Piloto from "@/components/albora/Piloto";
import Nosotros from "@/components/albora/Nosotros";
import Preguntas from "@/components/albora/Preguntas";
import Footer from "@/components/albora/Footer";
import { getPublicImage } from "@/lib/public-image";

export default function Home() {
  // Fotos de "Cómo funciona": public/images/paso-1.jpg, paso-2.jpg, paso-3.jpg
  const pasoImages: [
    ReturnType<typeof getPublicImage>,
    ReturnType<typeof getPublicImage>,
    ReturnType<typeof getPublicImage>,
  ] = [
    getPublicImage("/images/paso-1.jpg"),
    getPublicImage("/images/paso-2.jpg"),
    getPublicImage("/images/paso-3.jpg"),
  ];

  return (
    <main className="flex w-full flex-1 flex-col gap-4 p-4">
      <Hero />
      <QueEsAlbora />
      <QueIncluye />
      <ComoFunciona pasoImages={pasoImages} />
      <Piloto />
      <Nosotros />
      <Preguntas />
      <Footer />
    </main>
  );
}
