import { IInputProps } from "../../interfaces/FormInterface";

function Submit({ value }: IInputProps) {
  return (
    <input
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      type="submit"
      value={value}
    ></input>
  );
}

export default Submit;
