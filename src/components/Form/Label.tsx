import { IInputProps } from "../../interfaces/FormInterface";

function Label({ text }: IInputProps) {
  return (
    <label
      className="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase "
      htmlFor="username"
    >
      {text}
    </label>
  );
}

export default Label;
