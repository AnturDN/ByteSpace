import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative flex-1 bg-primary-600 flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20">
        <Container className="relative z-10 text-center">
          <h1
            className="font-heading font-bold leading-[0.85] select-none"
            style={{
              fontSize: "clamp(120px, 22vw, 300px)",
              letterSpacing: "-0.04em",
              background:
                "linear-gradient(180deg, #d4fb20 0%, #d4fb20 35%, #a3d91a 55%, rgba(4,69,255,0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </h1>

          <h2 className="relative z-10 text-h-xs sm:text-h-s md:text-h-m lg:text-h-l font-heading font-semibold text-white leading-tight max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto -mt-6 sm:-mt-10 md:-mt-14 lg:-mt-16">
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h2>

          <p className="text-b-xs sm:text-b-s md:text-b-m text-white/70 mt-5 sm:mt-6 md:mt-8 px-4">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            to="/"
            className="inline-flex mt-6 sm:mt-8 md:mt-10 rounded-full bg-secondary-400 px-5 sm:px-6 py-2.5 text-b-xs sm:text-b-s font-medium text-neutral-950 hover:bg-secondary-300 transition-colors"
          >
            Back to Home
          </Link>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;