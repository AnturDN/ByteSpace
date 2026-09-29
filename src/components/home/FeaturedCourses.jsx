import Container from "../common/Container";
import CategoriesTabs from "./CategoriesTabs";
import CourseCard from "../course/CourseCard";
import { courses } from "../../data/courses";

const FeaturedCourses = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h-xs sm:text-h-s md:text-h-m text-neutral-950">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="text-b-s md:text-b-m text-neutral-500 mt-4">
            At ByteSpace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <CategoriesTabs />
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCourses;