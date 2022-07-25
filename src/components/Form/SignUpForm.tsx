import { FormEventHandler } from "react";
import Form from "./Form";

function SignUpForm() {
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {};

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div></div>
      </Form>
    </>
  );
}

export default SignUpForm;
