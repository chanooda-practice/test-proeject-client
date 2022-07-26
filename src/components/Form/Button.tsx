function Button({
  text,
  responsive,
  onClick,
}: {
  text: string;
  responsive: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`w-full px-2 mb-4${responsive ? " md:w-1/2 md:mb-0" : null}`}>
      <button
        onClick={onClick}
        type="button"
        className="mt-[28px] px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
