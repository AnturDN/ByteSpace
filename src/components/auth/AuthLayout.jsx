import { Link } from "react-router-dom";
import Container from "../common/Container";

const Logo = () => (
  <Link to="/" className="inline-flex items-center gap-2">
    <img
      src="/byte_logo.png"
      alt="ByteSpace"
      draggable={false}
      className="w-7 h-7 md:w-8 md:h-8 object-contain select-none"
    />
  </Link>
);

const AuthLayout = ({ heading, subtitle, illustration, children }) => {
  return (
    <section className="min-h-screen bg-blue-grid relative overflow-hidden">
      <Container className="relative z-10 py-6 sm:py-8 md:py-10">
        <Logo />

        <div className="lg:hidden text-white mt-6 sm:mt-8 text-center">
          <h1 className="text-h-xs sm:text-h-s font-heading font-semibold leading-tight max-w-md mx-auto">
            {heading}
          </h1>
          <p className="text-b-xs sm:text-b-s text-white/75 mt-3 max-w-md mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mt-6 sm:mt-8 md:mt-12 lg:mt-14">

          <div className="hidden lg:block text-white">
            <h1 className="text-h-m font-heading font-semibold leading-tight max-w-md">
              {heading}
            </h1>
            <p className="text-b-m text-white/75 mt-4 max-w-md">{subtitle}</p>

            <div className="mt-10 w-full max-w-md">
              <img
                src={illustration}
                alt=""
                draggable={false}
                className="w-full h-auto object-contain select-none"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 sm:p-7 md:p-9 max-w-md w-full mx-auto lg:ml-auto">
              {children}
            </div>
          </div>
        </div>


        <div className="lg:hidden mt-8 sm:mt-10 w-full max-w-sm sm:max-w-md mx-auto">
          <img
            src={illustration}
            alt=""
            draggable={false}
            className="w-full h-auto object-contain select-none"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default AuthLayout;