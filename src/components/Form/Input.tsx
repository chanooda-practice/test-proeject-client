import { IInputProps } from "../../interfaces/FormInterface";

function Input({ errorMessage, value, onChange, name }: IInputProps) {
  console.log(value);
  return (
    <input
      className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
        errorMessage ? "border-red-500" : null
      }`}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

export default Input;
