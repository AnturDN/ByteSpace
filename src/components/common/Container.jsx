const Container = ({ children, className = "" }) => {
  return <div className={`container-bs ${className}`}>{children}</div>;
};

export default Container;