import Footer from "../components/Footer";
import Header from "../components/Header";
import Heros from "../components/Heros";
import LenisScroll from "../components/LenisScroll";
import CallToActionSection from "../section/CallToActionSection";
import FaxQuestions from "../section/FaqQuestions ";
import HeroSection from "../section/HeroSection";
import HowItWorksSection from "../section/HowItWorksSection";
import MeetOurTeamSection from "../section/MeetOurTeam";
import PriceSection from "../section/PriceSection ";
import TestimonalSection from "../section/TestimonalSection";

export default function LandingPage() {
  return (
    <>
    <LenisScroll />
            <Heros />
            <Header />
            <main className='px-4'>
                <HeroSection />
                <HowItWorksSection />
                <MeetOurTeamSection />
                <TestimonalSection />
                <PriceSection />
                <FaxQuestions />
                <CallToActionSection />
            </main>
            <Footer />
    </>
  );
}
