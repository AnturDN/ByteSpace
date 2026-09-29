import { motion } from "framer-motion";
import Container from "../common/Container";
import { learningPaths } from "../../data/courses";

const icons = {
  design: (
    <img src="./learningPath/design.png" alt="" />
  ),
  development: (
<img src="./learningPath/development.png" alt="" />
  ),
  it: (
<img src="./learningPath/it&software.png" alt="" />
  ),
  business: (
<img src="./learningPath/business.png" alt="" />
  ),
  marketing: (
<img src="./learningPath/marketing.png" alt="" />
  ),
  photography: (
<img src="./learningPath/photography.png" alt="" />
  ),
};

const LearningPaths = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h-xs sm:text-h-s md:text-h-m text-neutral-950">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-b-s md:text-b-m text-neutral-500 mt-4">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unlesh your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5 mt-10 md:mt-14">
          {learningPaths.map((path, i) => (
            <motion.div
              key={path.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center gap-3 bg-white border border-neutral-200 rounded-2xl py-6 md:py-8 px-3 hover:border-secondary-400 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-400 text-neutral-950 flex items-center justify-center">
                {icons[path.icon]}
              </div>
              <p className="text-b-xs md:text-b-s font-medium text-neutral-900 text-center">
                {path.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LearningPaths;