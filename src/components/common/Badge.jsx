const tones = {
  neutral: "bg-neutral-100 text-neutral-700",
  lime: "bg-secondary-400 text-neutral-950",
  light: "bg-white/15 text-white",
};

const Badge = ({ tone = "neutral", className = "", children }) => {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-b-xs font-medium ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;