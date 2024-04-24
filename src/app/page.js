import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Feature />
      <Pricing />
      <GallerySection />
      <Footer />
    </main>
  );
}
