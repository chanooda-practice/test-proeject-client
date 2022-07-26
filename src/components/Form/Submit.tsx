import { ISubmitProps } from "../../interfaces/FormInterface";

function Submit({ value, long }: ISubmitProps) {
  return (
    <input
      className={`cursor-pointer px-4 py-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
        long ? " w-full block mt-4 " : null
      }`}
      type="submit"
      value={value}
    ></input>
  );
}

export default Submit;
