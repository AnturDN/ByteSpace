import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import { categories } from "../../data/courses";

const CategoriesTabs = () => {
  const [active, setActive] = useState("Featured");

  return (
    <Container>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {categories.map((cat) => {
          const isActive = active === cat;

          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative rounded-full px-4 md:px-5 py-2 text-b-xs md:text-b-s font-medium transition-colors cursor-pointer ${
                isActive
                  ? "text-neutral-950"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-secondary-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>
    </Container>
  );
};

export default CategoriesTabs;