function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  const baseStyle =
    "rounded-xl px-6 py-3 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary:
      "border border-slate-600 text-white hover:bg-slate-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;