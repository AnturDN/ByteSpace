import Container from "../common/Container";

const logos = [
  "./logos/logoipsm-1.png",
  "./logos/logoipsm-2.png",
  "./logos/logoipsm-3.png",
  "./logos/logoipsm-4.png",
  "./logos/logoipsm-5.png",
];

const LogoStrip = () => {
  return (
    <section className="bg-neutral-50 py-10 md:py-14">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Logoipsum"
              draggable={false}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain select-none opacity-70 hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LogoStrip;