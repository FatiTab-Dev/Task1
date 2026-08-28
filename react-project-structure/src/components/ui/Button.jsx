export function Button({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}) {
  const getVariantClass = () => {
    switch (variant) {
      case "secondary":
        return "btn btn-secondary text-white hover:bg-gray-600";
      case "danger":
        return "btn btn-danger text-white hover:bg-red-600";
      default:
        return "btn btn-primary text-white hover:bg-blue-600";
    }
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 mx-3 rounded ${getVariantClass()} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
}
