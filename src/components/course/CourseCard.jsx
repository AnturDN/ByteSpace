import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const avatars = [
  "/student_avatars/student-1.png",
  "/student_avatars/student-2.png",
  "/student_avatars/student-3.png",
  "/student_avatars/student-4.png",
  
];

const CourseCard = ({ course }) => {
  const {
    id,
    title,
    author,
    thumbnail,
    level,
    students,
    rating,
    price,
  } = course;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
    >
      <Link to={`/courses/${id}`} className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
  
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-44 md:h-48 object-cover"
          />
          
        </div>
     
        <div className="p-4 md:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-base md:text-lg font-heading font-semibold text-neutral-950 truncate">
                {title}
              </h3>
              <p className="text-sm text-neutral-500 mt-0.5">
                by{" "}
                <span className="text-primary-600 font-medium">{author}</span>
              </p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <span className="text-sm md:text-base font-medium text-neutral-800">
                {rating}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-neutral-300"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

  
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 bg-neutral-100 rounded-full pl-3 pr-4 py-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-neutral-800">
                <rect x="1" y="9" width="3" height="6" rx="1" fill="currentColor" />
                <rect x="6.5" y="5.5" width="3" height="9.5" rx="1" fill="currentColor" />
                <rect x="12" y="2" width="3" height="13" rx="1" fill="currentColor" />
              </svg>
              <span className="text-sm text-neutral-800 font-medium">
                {level}
              </span>
            </div>

            <div className="flex items-center">
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="-ml-2.5 w-8 h-8 rounded-full bg-secondary-400 text-neutral-950 text-[11px] font-semibold flex items-center justify-center border-2 border-white">
                {students}+
              </span>
            </div>
          </div>


          <div className="mt-4 flex items-baseline gap-0.5">
            <span className="text-lg md:text-xl font-heading font-bold text-primary-600">
              ${price}
            </span>
            <span className="text-sm text-neutral-500">/lifetime</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;