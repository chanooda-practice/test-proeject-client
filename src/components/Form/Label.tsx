import { IInputProps } from "../../interfaces/FormInterface";

function Label({ text }: IInputProps) {
  return (
    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
      {text}
    </label>
  );
}

export default Label;
