import { FormEventHandler } from "react";

function Form({
  onSubmit,
  children,
}: {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-[400px] m-auto bg-black p-4 rounded-xl mt-[calc((100vh_-_200px)_/_2)] opacity-80"
    >
      {children}
    </form>
  );
}

export default Form;
