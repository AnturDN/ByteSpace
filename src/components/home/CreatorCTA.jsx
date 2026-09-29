import { motion } from "framer-motion";
import Container from "../common/Container";
import {
  LimeSwipe,
  WhiteZigzag,
  WhiteTriangle,
  WhiteRing,
  WhiteSwirl,
  LimeArcTopRight,
} from "./DecorativeShapes";

const CreatorCTA = () => {
  return (
    <section className="relative bg-primary-600 overflow-hidden py-20 md:py-28">
  
      <LimeSwipe className="absolute -top-8 -left-16 w-40 md:w-56 lg:w-64" />
      <WhiteZigzag className="absolute top-6 left-[18%] w-16 md:w-20 lg:w-24" />
      <WhiteRing className="absolute -bottom-8 -left-10 w-32 md:w-44 lg:w-56" />
      <LimeArcTopRight className="absolute -top-10  -right-16 w-40 md:w-56 lg:w-60" />
      <WhiteTriangle className="absolute top-8 right-[15%] w-12 md:w-16 lg:w-40" />
      <WhiteSwirl className="absolute -bottom-2 right-[10%] w-24 md:w-32 lg:w-40" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-h-xs sm:text-h-s md:text-h-m font-heading font-semibold text-white leading-tight">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p className="text-b-xs sm:text-b-s md:text-b-m text-white/80 mt-5 md:mt-6 max-w-xl mx-auto leading-relaxed">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 loyal and international creators. Utilize
            our Course Editor and showcase your expertise by publishing your
            first course on the ByteSpace Course Library.
          </p>

          <button className="mt-8 md:mt-10 inline-flex items-center justify-center rounded-full bg-secondary-400 text-neutral-950 px-6 md:px-7 py-2.5 md:py-3 text-b-xs md:text-b-s font-medium hover:bg-secondary-300 transition-colors cursor-pointer">
            Join as Creator
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default CreatorCTA;