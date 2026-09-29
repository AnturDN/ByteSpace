import { motion } from "framer-motion";

const CourseTabs = ({ active, onChange, tabs }) => {
  return (
    <div className="flex items-center gap-2">
      {tabs.map((tab) => {
        const isActive = active === tab;

        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`relative rounded-full px-5 py-2 text-b-s font-medium transition-colors cursor-pointer ${
              isActive ? "text-neutral-950" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}>
            {isActive && (
              <motion.span
                layoutId="courseTab"
                className="absolute inset-0 rounded-full bg-secondary-400"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CourseTabs;