import { Link } from "react-router-dom";
import { IFormLinkProps } from "../../interfaces/FormInterface";

function FormLink({ to, text }: IFormLinkProps) {
  return (
    <Link
      className={`inline-block text-lg font-bold text-blue-500 align-baseline hover:text-blue-800`}
      to={to}
    >
      {text}
    </Link>
  );
}
export default FormLink;
