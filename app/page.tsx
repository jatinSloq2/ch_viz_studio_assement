import Hero from "@/components/Hero";
import DashboardFixed from "@/components/Features";
import Feedback from "@/components/Feedback";
import FomoCycle from "@/components/FomoCycle";
import BrandSlide from "@/components/BrandSlide";
import FeedbackUi from "@/components/FeedbackUi";
import TryToday from "@/components/TryToday";
import NewProductsEveryWeek from "@/components/NewProductsEveryWeek";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-visible mx-auto">
      <Hero />
      <DashboardFixed />
      <BrandSlide />
      <Feedback
        avatar="/testinonial/image1.png"
        quote="Cycle is a slick AI tool that enables teams to build better products by getting smarter on what their customers want."
        name="Olivier Godement"
        company="OpenAI"
        companyLogo="/open-ai.svg"
      />
      <FeedbackUi />
      <Feedback
        avatar="/testinonial/image.png"
        quote="We tried them all, no other software beats Cycle. We redesigned our feedback loop to extract concrete customer insights in no time with the autopilot feature. It’s a no-brainer for any product team."
        name="Aurélien Georget"
        company="Starpi"
        companyLogo="/strapi.jpeg"
      />
      <FomoCycle />
      <NewProductsEveryWeek />
      <TryToday />
    </main>
  );
}