import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { courseDetail } from "../../data/courseDetails";

const ReviewsTab = () => {
  const [filter, setFilter] = useState("All rating");
  const { ratingSummary, reviewsList } = courseDetail;

  return (
    <div>
      <h3 className="text-h-xs font-heading font-semibold text-neutral-950">
        What Learners Are Saying
      </h3>
      <p className="text-b-s text-neutral-600 mt-3 leading-relaxed">
        Discover what our learners have to say about their experience with
        'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings
        from individuals who have embarked on the transformative journey of
        mastering digital asset creation.
      </p>

      <div className="mt-6 border border-neutral-200 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
        <div className="bg-secondary-400 rounded-xl px-6 py-4 text-center">
          <p className="text-b-xs text-neutral-800">Ratings</p>
          <p className="text-h-m font-heading font-bold text-neutral-950">
            {ratingSummary.average}
          </p>
        </div>

        <div className="space-y-2">
          {ratingSummary.breakdown.map((row) => {
            const percent = (row.count / ratingSummary.total) * 100;

            return (
              <div key={row.stars} className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary-400"
                    style={{ width: `${Math.min(percent, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-2">
          {ratingSummary.breakdown.map((row) => (
            <div
              key={row.stars}
              className="flex items-center justify-end gap-2"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    size={12}
                    className={
                      i < row.stars
                        ? "text-neutral-950 fill-neutral-950"
                        : "text-neutral-300"
                    }
                  />
                ))}
              </div>
              <span className="text-b-xs text-neutral-700 w-8 text-right">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>


      <h4 className="text-b-l font-heading font-semibold text-neutral-950 mt-8">
        Individual Reviews:
      </h4>

      <div className="flex flex-wrap gap-2 mt-4">
        {["All rating", "5", "4", "3", "2", "1"].map((opt) => {
          const isActive = filter === opt;

          return (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`rounded-full px-4 py-1.5 text-b-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                isActive
                  ? "bg-secondary-400 text-neutral-950"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {opt !== "All rating" && (
                <FiStar
                  size={11}
                  className={isActive ? "text-neutral-950" : "text-neutral-500"}
                />
              )}
              {opt}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-4">
        {reviewsList.map((review, i) => (
          <div
            key={i}
            className="border border-neutral-200 rounded-2xl p-5 md:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-b-s font-heading font-semibold text-neutral-950">
                    {review.name}
                  </p>
                  <p className="text-b-xs text-neutral-500">{review.role}</p>
                </div>
              </div>
              <span className="text-b-xs text-neutral-400 whitespace-nowrap">
                {review.time}
              </span>
            </div>

            <div className="flex items-center gap-0.5 mt-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <FiStar
                  key={s}
                  size={14}
                  className={
                    s < review.stars
                      ? "text-neutral-950 fill-neutral-950"
                      : "text-neutral-300"
                  }
                />
              ))}
            </div>

            <p className="text-b-s text-neutral-600 mt-4 leading-relaxed">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsTab;
