import Footer from "../components/Footer";
import Header from "../components/Header";
import Heros from "../components/Heros";
import LenisScroll from "../components/LenisScroll";
import CallToActionSection from "../section/CallToActionSection";
import FaqQuestions from "../section/FaqQuestions";
import HeroSection from "../section/HeroSection";
import HowItWorksSection from "../section/HowItWorksSection";
import MeetOurTeamSection from "../section/MeetOurTeam";
import PriceSection from "../section/PriceSection";
import TestimonalSection from "../section/TestimonalSection";

export default function LandingPage() {
  return (
    <>
      <LenisScroll />

      <div className="pt-14 md:pt-16">
        <Heros />
      </div>

      
      <Header />

      <main className='px-4'>
          <HeroSection />
                <HowItWorksSection />
                <MeetOurTeamSection />
                <TestimonalSection />
                <PriceSection />
                <FaqQuestions />
                <CallToActionSection />
      </main>

      <Footer />
    </>
  );
}
