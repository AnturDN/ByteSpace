import { FiCheck } from "react-icons/fi";
import { courseDetail } from "../../data/courseDetails";

const AboutTab = () => {
  return (
    <div>
      <h3 className="text-h-xs font-heading font-semibold text-neutral-950">
        Description
      </h3>

      {courseDetail.description.split("\n\n").map((para, i) => (
        <p
          key={i}
          className="text-b-s text-neutral-600 mt-4 leading-relaxed"
        >
          {para}
        </p>
      ))}

      <h3 className="text-h-xs font-heading font-semibold text-neutral-950 mt-8">
        Sneak Peak
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {courseDetail.sneakPeak.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full h-24 md:h-28 object-cover rounded-xl"
          />
        ))}
      </div>

      <h3 className="text-h-xs font-heading font-semibold text-neutral-950 mt-8">
        Key Points
      </h3>
      <ul className="mt-4 space-y-3">
        {courseDetail.keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="shrink-0 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center mt-0.5">
              <FiCheck size={12} className="text-white" strokeWidth={3} />
            </span>
            <span className="text-b-s text-neutral-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTab;