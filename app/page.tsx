import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Feedback from "@/components/Feedback";
import FomoCycle from "@/components/FomoCycle";
import BrandSlide from "@/components/BrandSlide";
import FeedbackUi from "@/components/FeedbackUi";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-visible mx-auto">
      <Hero />
      <Features />
      <BrandSlide/>
      <Feedback
        avatar="/testinonial/image.png"
        quote="Cycle is a slick AI tool that enables teams to build better products by getting smarter on what their customers want."
        name="Olivier Godement"
        company="OpenAI"
        companyLogo="/open-ai.svg"
      />
      <FeedbackUi/>
      <FomoCycle />
    </main>
  );
}