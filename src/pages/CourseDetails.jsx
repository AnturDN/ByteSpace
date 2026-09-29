import { useState } from "react";
import { FiShare2, FiBarChart2, FiStar, FiUsers, FiPlay } from "react-icons/fi";
import Container from "../components/common/Container";
import CourseTabs from "../components/course/CourseTabs";
import CourseSidebar from "../components/course/CourseSidebar";
import AboutTab from "../components/course/AboutTab";
import LessonTab from "../components/course/LessonTab";
import ReviewsTab from "../components/course/ReviewsTab";
import { courseDetail } from "../data/courseDetails";

const tabs = ["About", "Lessons", "Reviews"];

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <>
      <section className="bg-blue-grid pt-28 md:pt-32 pb-56 md:pb-72">
        <Container>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="max-w-2xl">
              <h1 className="text-h-xs sm:text-h-s md:text-h-m font-heading font-semibold text-white leading-tight">
                {courseDetail.title}
              </h1>
              <p className="text-b-s md:text-b-m text-white/85 mt-2">
                {courseDetail.subtitle}
              </p>
              <p className="text-b-s text-white/70 mt-3">
                by{" "}
                <a href="#" className="text-white hover:underline">
                  {courseDetail.author}
                </a>
              </p>

              <div className="flex items-center flex-wrap gap-2 mt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-1.5 text-b-xs md:text-b-s font-medium">
                  <FiBarChart2 size={14} />
                  {courseDetail.level}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-1.5 text-b-xs md:text-b-s font-medium">
                  <FiStar size={14} className="fill-neutral-900" />
                  {courseDetail.rating} ({courseDetail.reviews} reviews)
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-1.5 text-b-xs md:text-b-s font-medium">
                  <FiUsers size={14} />
                  {courseDetail.students} Students
                </span>
              </div>
            </div>

            <button className="self-start inline-flex items-center gap-2 rounded-full bg-secondary-400 text-neutral-950 px-5 py-2.5 text-b-s font-medium hover:bg-secondary-300 transition-colors cursor-pointer">
              <FiShare2 size={14} />
              Share
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src="/video_av.jpg"
                alt=""
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <FiPlay
                    size={22}
                    className="text-neutral-900 ml-0.5"
                    fill="currentColor"
                  />
                </span>
              </button>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute top-0 left-0 right-0">
                <CourseSidebar />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pt-0 pb-16 md:pb-20 -mt-60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
            <div className="lg:pt-14">
              <CourseTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

              <div className="mt-8">
                {activeTab === "About" && <AboutTab />}
                {activeTab === "Lessons" && <LessonTab />}
                {activeTab === "Reviews" && <ReviewsTab />}
              </div>
            </div>

            <div className="hidden lg:block" />

            <div className="lg:hidden -mt-6">
              <CourseSidebar />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CourseDetails;