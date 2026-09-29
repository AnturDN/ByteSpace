import Container from "../components/common/Container";
import ProfileHeader from "../components/creator/ProfileHeader";
import ProfileFilters from "../components/creator/ProfileFilters";
import CourseCard from "../components/course/CourseCard";
import { creatorCourses } from "../data/creators";

const CreatorProfile = () => {
  return (
    <>
      <ProfileHeader />

      <section className="bg-white py-10 md:py-14">
        <Container>
          <ProfileFilters />

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {creatorCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CreatorProfile;