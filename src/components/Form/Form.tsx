import { SubmitHandler } from "react-hook-form";
import { ISignUpFormInput } from "../../interfaces/FormInputInterface";

function Form({ onSubmit, children }: { onSubmit: any; children: React.ReactNode }) {
  return (
    <form onSubmit={onSubmit} className="w-full px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      {children}
    </form>
  );
}

export default Form;
