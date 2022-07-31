import { IInputProps } from "../../../interfaces/FormPropsInterface";

function Input({
  errorMessage,
  value,
  onChange,
  name,
  register,
  attr,
  placeholder,
  type,
}: IInputProps) {
  return (
    <input
      className={`w-full block px-4 h-[40px] leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-double focus:bg-white " ${
        errorMessage ? "border-red-500" : null
      }`}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      {...register}
      {...attr}
    />
  );
}

export default Input;
