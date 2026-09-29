import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import Container from "../common/Container";
import FloatingCard from "./FloatingCard";
import {
  LimeSwipe,
  LimeArcTopRight,
  WhiteZigzag,
  WhiteRing,
  WhiteTriangle,
  WhiteSwirl,
} from "./DecorativeShapes";

const avatars = [
  "/happy-students/student1.png",
  "/happy-students/student2.png",
  "/happy-students/student3.png",
  "/happy-students/student4.png",
  "/happy-students/student5.png",
  "/happy-students/student6.png",
  "/happy-students/student7.png",
 
];

const Hero = () => {
  return (
    <section className="relative bottom-0 bg-blue-grid pt-28 md:pt-32 pb-0 overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/75 mt-5 max-w-lg mx-auto px-4">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 md:mt-9 flex items-center gap-3 md:gap-5 max-w-[740px] mx-auto px-4"
          >
            <div className="flex-1 flex items-center gap-3 bg-white rounded-full px-5 md:px-6 h-11 md:h-[65px]">
              <FiSearch className="text-neutral-500 shrink-0" size={22} />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="flex-1 bg-transparent outline-none text-sm md:text-xl text-neutral-800 placeholder:text-neutral-400 w-full min-w-0"
              />
            </div>

            <button
              type="submit"
              className="rounded-full cursor-pointer bg-secondary-400 px-5 md:px-8 h-10 md:h-[57px] text-sm md:text-xl font-medium text-neutral-950 hover:bg-secondary-300 transition-colors shrink-0"
            >
              Search
            </button>
          </form>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative mx-auto w-full max-w-[1422px] mt-10 sm:mt-14 md:mt-16 h-[420px] sm:h-[520px] md:h-[580px] lg:h-[640px] overflow-hidden md:overflow-visible"
      >
        <LimeSwipe className="hidden md:block absolute -top-8 -left-28 z-10 w-52 lg:w-56" />
        <LimeArcTopRight className="hidden md:block absolute -top-14 -right-28 z-10 w-52 lg:w-56" />
        <WhiteZigzag className="hidden md:block absolute top-[16%] left-[8%] z-10 w-24 lg:w-32" />
        <WhiteRing className="hidden md:block absolute top-[48%] -left-16 z-10 w-36 lg:w-52" />
        <WhiteTriangle className="hidden md:block absolute top-[18%] right-[3%] z-10 w-28 lg:w-36" />
        <WhiteSwirl className="hidden md:block absolute top-[55%] -right-2 z-10 w-28 lg:w-36" />

        <img
          src="/Ellipse 7.png"
          alt=""
          draggable={false}
          className="absolute top-[60%] md:top-[14%] left-1/2 -translate-x-1/2 w-[100%] sm:w-[140%] md:w-[105%] max-w-none h-auto select-none pointer-events-none z-0"
        />

        <img
          src="/main_avater.png"
          alt="Student learning with ByteSpace"
          draggable={false}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[420px] md:w-[540px] lg:w-[680px] xl:w-[780px] h-auto object-contain select-none pointer-events-none z-10"
        />

        <FloatingCard
          className="top-[40%] left-[5%] sm:top-[12%] sm:left-[6%] md:top-[22%] md:left-[12%] lg:top-[26%] lg:left-[16%] z-20 !rounded-xl md:!rounded-2xl !px-3 sm:!px-4 md:!px-5 !py-2 sm:!py-2.5 md:!py-3"
          delay={0.5}
        >
          <p className="text-[12px] sm:text-sm md:text-lg lg:text-xl font-medium text-neutral-900">
            UI/UX Design
          </p>
          <p className="text-[9px] sm:text-[10px] md:text-sm text-neutral-500 mt-0.5 md:mt-1">
            200 Courses <span className="mx-1.5">•</span> 1000+ Students
          </p>
        </FloatingCard>

        <FloatingCard
          className="top-[60%] right-[2%] sm:top-[16%] sm:right-[5%] md:top-[22%] md:right-[10%] lg:top-[24%] lg:right-[14%] z-20 !rounded-xl md:!rounded-2xl !px-3 sm:!px-4 md:!px-5 !py-2 sm:!py-3 md:!py-4 w-[130px] sm:w-auto sm:min-w-[160px] md:min-w-[210px] lg:min-w-[260px]"
          delay={0.7}
        >
          <p className="text-[10px] sm:text-xs md:text-base text-neutral-800">
            Learning Progress
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] font-heading font-bold text-neutral-950 leading-none mt-1 md:mt-2 mb-1.5 md:mb-3">
            55%
          </p>
          <div className="w-full h-1.5 md:h-2 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "55%" }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-full bg-secondary-400 rounded-full"
            />
          </div>
        </FloatingCard>

        <FloatingCard
          className="top-[68%] left-[1%] sm:top-[55%] sm:left-[4%] md:top-[62%] md:left-[8%] lg:top-[64%] lg:left-[9%] z-20 !rounded-xl md:!rounded-2xl !px-2.5 sm:!px-3.5 md:!px-4 !py-2 sm:!py-2.5 md:!py-3 min-w-[130px] sm:min-w-[210px] md:min-w-[300px] lg:min-w-[310px]"
          delay={0.9}
        >
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-heading font-medium text-neutral-950">
            Happy Students
          </p>
          <p className="text-[9px] md:text-sm text-neutral-500 mt-0.5 md:mt-1 flex items-center gap-1">
            4.5 <span className="text-neutral-400">(240)</span>
            <span className="text-secondary-400 text-sm md:text-base leading-none">
              ★
            </span>
          </p>
          <div className="flex items-center mt-1.5 md:mt-2.5">
            <div className="flex -space-x-2 md:-space-x-2.5">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="-ml-2 md:-ml-2.5 w-5 h-5 sm:w-6 sm:h-6 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-secondary-400 text-neutral-950 text-[8px] md:text-sm font-semibold flex items-center justify-center border-2 border-white">
              2K+
            </span>
          </div>
        </FloatingCard>
      </motion.div>
    </section>
  );
};

export default Hero;