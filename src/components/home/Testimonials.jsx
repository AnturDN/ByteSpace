import { motion } from "framer-motion";
import Container from "../common/Container";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/card-av1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/card-av2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/card-av3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 0%, rgba(212,251,32,0.35) 0%, transparent 45%), radial-gradient(circle at 0% 100%, rgba(4,69,255,0.18) 0%, transparent 45%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-h-xs sm:text-h-s md:text-h-m font-heading font-bold text-neutral-950 leading-tight"
          >
            Discover What Our Community Is Saying
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-b-s md:text-b-m text-neutral-500 leading-relaxed"
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </motion.p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mt-10 md:mt-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-neutral-200 rounded-2xl p-5 sm:p-6 md:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <p className="text-b-s md:text-b-m font-heading font-bold text-neutral-950 mt-4">
                {t.name}
              </p>
              <p className="text-b-xs md:text-b-s text-primary-600 font-medium mt-0.5">
                {t.role}
              </p>

              <p className="text-b-xs md:text-b-s text-neutral-500 leading-relaxed mt-4">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;