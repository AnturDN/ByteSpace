const Logo = ({ variant = "white" }) => {
  const textColor = variant === "white" ? "text-white" : "text-neutral-950";

  return (
    <div className="flex items-center gap-2">
      <img src="/byte_logo.png" alt="" />
      <span className={`text-b-l font-heading font-bold ${textColor}`}>
        ByteSpace
      </span>
    </div>
  );
};

export default Logo;