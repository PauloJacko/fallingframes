import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import VideoSection from "@/sections/VideoSection";
import MerchSection from "@/sections/MerchSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar />

      <Hero />

      <VideoSection />

      <MerchSection />

      <Footer />

    </main>
  );
}