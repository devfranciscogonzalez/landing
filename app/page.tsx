import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex flex-col justify-center items-center w-full">
        <Hero />
        <Services />
        {/* <Features /> */}
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
