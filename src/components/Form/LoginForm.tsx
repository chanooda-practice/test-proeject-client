import { ChangeEventHandler, FormEventHandler, useState } from "react";
//Component
import Form from "./Form";
import FormLink from "./FormLink";
import InputSet from "./InputSet";
import Submit from "./Submit";

interface IInputs {
  [key: string]: string;
}

function LoginForm() {
  const [inputs, setInputs] = useState<IInputs>({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
    const { value, name } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    for (const key in inputs) {
      console.log(typeof key);
      if (inputs[key] === "") {
        setErrorMessage((prev) => ({ ...prev, [key]: `${key}를 입력해주세요.` }));
        break;
      } else {
        setErrorMessage((prev) => ({ ...prev, [key]: "" }));
      }
    }
  };
  console.log(inputs);
  return (
    <>
      <div className="w-full max-w-xs">
        <Form onSubmit={onSubmit}>
          <InputSet
            text="Username"
            onChange={onChange}
            value={inputs.username}
            errorMessage={errorMessage.username}
            name="username"
          />
          <InputSet
            text="Password"
            onChange={onChange}
            value={inputs.password}
            errorMessage={errorMessage.password}
            name="password"
          />
          <div className="flex items-center justify-between">
            <Submit value="Sign In" />
            <FormLink to="#" text="Forgot Password?" />
          </div>
        </Form>
      </div>
    </>
  );
}
export default LoginForm;
