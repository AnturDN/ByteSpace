const variants = {
  primary: "bg-secondary-400 text-neutral-950 hover:bg-secondary-300",
  secondary: "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300",
  outline: "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-b-s",
  md: "px-6 py-3 text-b-m",
  lg: "px-8 py-4 text-b-l",
};

const Button = ({ variant = "primary", size = "md", className = "", children, ...rest }) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;