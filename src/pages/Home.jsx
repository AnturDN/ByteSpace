import Hero from "../components/home/Hero";
import LogoStrip from "../components/home/LogoStrip";
import FeaturedCourses from "../components/home/FeaturedCourses";
import LearningPaths from "../components/home/LearningPaths";
import StatsSection from "../components/home/StatsSection";
import CreatorCTA from "../components/home/CreatorCTA";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeaturedCourses />
      <LearningPaths />
      <StatsSection />
      <CreatorCTA />
      <Testimonials />
    </>
  );
};

export default Home;