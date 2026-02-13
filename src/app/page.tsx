import Navbar from "@/components/Navbar";
import NewsTicker from "@/components/NewsTicker";
import Hero from "@/components/hero";
import VisaForm from "@/components/VisaForm";
import BodyContent from "@/components/BodyContent";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FeaturesSection from "@/components/FeaturesSection";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1e3a] text-white">
      <Navbar />
      <NewsTicker />
      <Hero />
      <VisaForm />
      <FeaturesSection />
      <BodyContent />
      <WhatsAppFloat />
    </main>
  );
}
