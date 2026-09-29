import { FiFilter, FiBarChart2, FiGrid, FiChevronDown, FiSliders } from "react-icons/fi";

const FilterBar = () => {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">

      <div className="flex items-center gap-3 flex-wrap">
        <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-b-s text-neutral-800 hover:border-neutral-400 transition-colors cursor-pointer">
          <FiFilter size={14} />
          Filter
        </button>

        <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-b-s text-neutral-800 hover:border-neutral-400 transition-colors cursor-pointer">
          <FiBarChart2 size={14} />
          Level
        </button>

        <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-b-s text-neutral-800 hover:border-neutral-400 transition-colors cursor-pointer">
          <FiGrid size={14} />
          Category
        </button>
      </div>


      <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-b-s text-neutral-800 hover:border-neutral-400 transition-colors cursor-pointer">
        <FiSliders size={14} />
        Most relevant
        <FiChevronDown size={14} />
      </button>
    </div>
  );
};

export default FilterBar;