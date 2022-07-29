import { IErrorMessageProps } from "../../interfaces/FormPropsInterface";

function ErrorMessage({ errorMessage }: IErrorMessageProps) {
  return <p className="text-xs italic text-red-500">{errorMessage}</p>;
}

export default ErrorMessage;
