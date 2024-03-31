import HeroSimpleCentered from "@/components/HeroSimpleCentered";
import HeroImageTiles from "@/components/HeroImageTiles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSimpleCentered />
      <HeroImageTiles />
      <Footer />
    </>
  );
}
