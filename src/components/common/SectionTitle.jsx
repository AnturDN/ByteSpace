const SectionTitle = ({ eyebrow, title, subtitle, align = "center", className = "" }) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-b-s font-medium text-primary-600 uppercase tracking-wide mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-h-s text-neutral-950">{title}</h2>
      {subtitle && <p className="text-b-m text-neutral-500 mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;