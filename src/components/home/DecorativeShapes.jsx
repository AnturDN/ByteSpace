import { motion } from "framer-motion";

const float = (duration = 6, y = 12) => ({
  animate: { y: [-y, y, -y] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});


export const LimeSwipe = ({ className = "" }) => (
  <motion.img
    {...float(7, 10)}
    src="./top-left.png"
    alt=""
    draggable={false}
    className={`absolute pointer-events-none select-none ${className}`}
  />
);

export const LimeArcTopRight = ({ className = "" }) => (
  <motion.img
    {...float(8, 12)}
    src="./top-right.png"
    alt=""
    draggable={false}
    className={`absolute pointer-events-none select-none ${className}`}
  />
);

export const WhiteZigzag = ({ className = "" }) => (
  <motion.img
    {...float(9, 8)}
    src="./cntr-left.png"
    alt=""
    draggable={false}
    className={`absolute pointer-events-none select-none ${className}`}
  />
);


export const WhiteRing = ({ className = "" }) => (
  <motion.img
    {...float(10, 12)}
    src="btm-left.png"
    alt=""
    draggable={false}
    className={`absolute pointer-events-none select-none ${className}`}
  />
);

export const WhiteTriangle = ({ className = "" }) => (
  <motion.img
    {...float(7, 10)}
    src="./cntr-right.png"
    alt=""
    draggable={false}
    className={`absolute pointer-events-none select-none ${className}`}
  />
);


export const WhiteSwirl = ({ className = "" }) => (
  <motion.img
    {...float(10, 10)}
    src="./btm-right.png"
    alt=""
    draggable={false}
    className={`absolute pointer-events-none select-none ${className}`}
  />
);