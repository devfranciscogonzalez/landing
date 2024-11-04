import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import WhatsAppAnchor from "@/components/WhatsAppAnchor";
// import WhatsAppAnchor from "@/components/WhatsAppAnchor";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex flex-col justify-center items-center w-full">
        <Hero />
        <Services />
        {/* <Features /> */}
        <SuccessStories />
        <Pricing />
        <FAQ />
        <WhatsAppAnchor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
