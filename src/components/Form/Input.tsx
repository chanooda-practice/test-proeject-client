import { IInputProps } from "../../interfaces/FormInterface";

function Input({ errorMessage, value, onChange, name, register, attr, placeholder }: IInputProps) {
  return (
    <input
      className={`block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-double focus:bg-white " ${
        errorMessage ? "border-red-500" : null
      }`}
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
