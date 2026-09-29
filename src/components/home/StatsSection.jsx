import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Container from "../common/Container";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
         background:
  "radial-gradient(circle at 0% 0%, rgba(212,251,32,0.35) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(4,69,255,0.18) 0%, transparent 45%)"
        }}
      />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h-xs sm:text-h-s md:text-h-m font-heading font-semibold text-neutral-950 leading-tight">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="text-b-s md:text-b-m text-neutral-500 mt-5 max-w-lg">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you're
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex items-center gap-10 md:gap-14 mt-8 md:mt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary-600">
                    {s.value}
                  </p>
                  <p className="text-b-s text-neutral-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <img
              src="./avatar3.png"
              alt=""
              draggable={false}
              className="w-full h-auto max-w-md mx-auto object-contain select-none"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-28">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <img
              src="./avatar2.png"
              alt=""
              draggable={false}
              className="w-full h-auto max-w-md mx-auto object-contain select-none"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-h-xs sm:text-h-s md:text-h-m font-heading font-semibold text-neutral-950 leading-tight">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="text-b-s md:text-b-m text-neutral-500 mt-5 max-w-lg">
              <span className="font-semibold text-neutral-900">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                    <FiCheck size={12} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-b-s md:text-b-m font-medium text-neutral-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;