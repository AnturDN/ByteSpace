import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Container from "../components/common/Container";
import CourseCard from "../components/course/CourseCard";
import FilterBar from "../components/course/FilterBar";
import Pagination from "../components/course/Pagination";
import { allCourses, coursePageCategories } from "../data/courses";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <>
      <section className="bg-blue-grid pt-32 pb-12 md:pb-16">
        <Container>
          <h1 className="text-h-s sm:text-h-m md:text-h-l font-heading font-semibold text-white text-center">
            Find Your Next Course
          </h1>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 md:mt-10 flex items-center gap-2 md:gap-3 max-w-2xl mx-auto"
          >
            <div className="flex-1 flex items-center gap-3 bg-white rounded-full px-5 h-12 md:h-[56px] min-w-0">
              <FiSearch className="text-neutral-500 shrink-0" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none text-b-s md:text-b-m text-neutral-800 placeholder:text-neutral-400 min-w-0"
              />
            </div>
            <button
              type="button"
              className="rounded-full bg-secondary-400 text-neutral-950 px-6 md:px-8 h-12 md:h-[56px] text-b-s md:text-b-m font-medium hover:bg-secondary-300 transition-colors shrink-0 cursor-pointer"
            >
              Courses
            </button>
          </form>
        </Container>
      </section>

      <section className="bg-white py-10 md:py-14">
        <Container>
          <FilterBar />

          <div className="flex flex-wrap gap-2 md:gap-3 mt-8">
            {coursePageCategories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 md:px-5 py-2 text-b-xs md:text-b-s font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-secondary-400 text-neutral-950"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <Pagination current={1} total={5} />
        </Container>
      </section>
    </>
  );
};

export default Courses;