import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";

export default function Home() {
  return (
    <main className="flex flex-col min-screen ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Pricing />
      <GallerySection />
      <Footer />
    </main>
  );
}
