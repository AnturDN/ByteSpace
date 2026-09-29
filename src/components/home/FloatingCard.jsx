import { motion } from "framer-motion";

const FloatingCard = ({ className = "", delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`absolute bg-white rounded-2xl shadow-xl px-4 py-3 ${className}`}
  >
    <motion.div
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default FloatingCard;