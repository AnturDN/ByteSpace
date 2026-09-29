import { FiVideo } from "react-icons/fi";
import { courseDetail } from "../../data/courseDetails";

const LessonTab = () => {
  return (
    <div>
      <h3 className="text-h-xs font-heading font-semibold text-neutral-950">
        Explore the Modules
      </h3>
      <p className="text-b-s text-neutral-600 mt-3 leading-relaxed">
        Immerse yourself in the course content as we break down each module
        into comprehensive lessons, providing practical insights and
        hands-on experiences.
      </p>

      <h4 className="text-b-l font-heading font-semibold text-neutral-950 mt-8">
        Lesson List
      </h4>

      <div className="mt-5 space-y-5">
        {courseDetail.modules.map((mod, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-secondary-400 flex items-center justify-center text-neutral-950">
              <FiVideo size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-b-m font-heading font-semibold text-neutral-950">
                {mod.title}
              </p>
              <p className="text-b-s text-neutral-600 mt-1 leading-relaxed">
                {mod.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="text-b-l font-heading font-semibold text-neutral-950 mt-8">
        Lesson Content
      </h4>
      <p className="text-b-s text-neutral-600 mt-3 leading-relaxed">
        {courseDetail.lessonContent}
      </p>

      <h4 className="text-b-l font-heading font-semibold text-neutral-950 mt-8">
        Lesson Progress Tracking
      </h4>
      <p className="text-b-s text-neutral-600 mt-3 leading-relaxed">
        {courseDetail.progressTracking}
      </p>

      <div className="mt-6 border border-neutral-200 rounded-2xl p-5">
        <p className="text-b-s text-neutral-500">Learning Progress</p>
        <p className="text-h-s font-heading font-bold text-neutral-950 mt-1">
          {courseDetail.progress}%
        </p>
        <div className="mt-3 w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary-400 rounded-full"
            style={{ width: `${courseDetail.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonTab;