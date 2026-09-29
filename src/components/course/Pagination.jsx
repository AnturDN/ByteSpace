import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ current = 1, total = 5 }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 md:mt-16">
      <button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-400 transition-colors cursor-pointer">
        <FiChevronLeft size={16} />
      </button>

      {Array.from({ length: total }).map((_, i) => {
        const isActive = i + 1 === current;

        return (
          <button
            key={i}
            className={`w-10 h-10 rounded-full text-b-s font-medium transition-colors cursor-pointer ${
              isActive ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-900" }`}>
            {i + 1}
          </button>
        );
      })}

      <button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-400 transition-colors cursor-pointer">
        <FiChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;