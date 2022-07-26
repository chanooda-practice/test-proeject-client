import { FormEventHandler } from "react";

function Form({
  onSubmit,
  children,
}: {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
}) {
  return (
    <form onSubmit={onSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      {children}
    </form>
  );
}

export default Form;
