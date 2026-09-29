import {  FiFileText, FiVideo, FiAward, FiMessageCircle } from "react-icons/fi";
import { courseDetail } from "../../data/courseDetails";

const includesIcon = {
  "Learning Resources": <FiFileText size={16} />,
  "Quality Lesson Videos": <FiVideo size={16} />,
  "Certificate of Completion": <FiAward size={16} />,
  "Private Consultation": <FiMessageCircle size={16} />,
};

const CourseSidebar = () => {
  return (
    <aside className="space-y-6">
      <div className="bg-white border border-neutral-200 rounded-2xl p-6">
        <h3 className="text-b-l font-heading font-semibold text-neutral-950">
          {courseDetail.totalLessons} Lessons ({courseDetail.totalHours} hours)
        </h3>

        <ol className="mt-5 space-y-3">
          {courseDetail.sidebarLessons.map((lesson, i) => (
            <li key={lesson.title} className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0">
                <span className="text-b-xs text-neutral-400 mt-0.5 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-b-s text-neutral-700 leading-snug">
                  {lesson.title}
                </span>
              </div>
              <span className="text-b-xs text-primary-600 whitespace-nowrap">
                {lesson.duration}
              </span>
            </li>
          ))}
        </ol>

        <p className="text-b-xs text-neutral-400 mt-4">
          99 more videos
        </p>

        <p className="text-b-s text-neutral-600 mt-5 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-h-xs font-heading font-bold text-primary-600">
            ${courseDetail.price}
          </span>
          <span className="text-b-xs text-neutral-500">/lifetime</span>
        </div>

        <button className="mt-4 w-full rounded-full bg-secondary-400 text-neutral-950 py-3 text-b-s font-medium hover:bg-secondary-300 transition-colors cursor-pointer">
          Enroll Now
        </button>

        <h4 className="text-b-m font-heading font-semibold text-neutral-950 mt-7">
          This course include
        </h4>
        <ul className="mt-4 space-y-3">
          {courseDetail.includes.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="text-primary-600">{includesIcon[item]}</span>
              <span className="text-b-s text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-neutral-100 mt-6 pt-5">
          <div className="flex items-center gap-3">
            <img
              src="/creator-p2.png"
              alt={courseDetail.author}
              className="w-11 h-11 rounded-full object-cover"
            />
            <div>
              <p className="text-b-s font-heading font-semibold text-neutral-950">
                PurePearl Studio
              </p>
              <p className="text-b-xs text-neutral-500">Professional Creator</p>
            </div>
          </div>

          <p className="text-b-xs text-neutral-500 mt-4 leading-relaxed">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <button className="mt-4 rounded-full border border-neutral-200 text-neutral-800 px-5 py-2 text-b-xs font-medium hover:border-neutral-400 transition-colors cursor-pointer">
            See Full Profile
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;