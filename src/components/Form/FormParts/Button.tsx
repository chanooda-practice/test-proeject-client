function Button({
  text,
  responsive,
  onClick,
}: {
  text: string;
  responsive?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="p-1 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded whitespace-nowrap hover:bg-blue-500 hover:text-white hover:border-transparent"
    >
      {text}
    </button>
  );
}

export default Button;
