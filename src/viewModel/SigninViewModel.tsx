import { useMutation } from "@tanstack/react-query";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
// View
import LoginForm from "../components/Form/LoginForm";
// Interface
import { ILoginFormInputs } from "../interfaces/FormInputInterface";
import { signinApi } from "../Model/api/Auth/signinApi";

function SigninViewModel() {
  const { mutate, isLoading } = useMutation(signinApi);

  const [inputs, setInputs] = useState<ILoginFormInputs>({
    userId: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    userId: "",
    password: "",
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    if (isLoading) return;
    e.preventDefault();
    for (const key in inputs) {
      if (inputs[key] === "") {
        setErrorMessage((prev) => ({ ...prev, [key]: `${key}를 입력해주세요.` }));
        break;
      } else {
        setErrorMessage((prev) => ({ ...prev, [key]: "" }));
      }
    }
    mutate(inputs, {
      onSuccess: (data) => {
        window.localStorage.setItem("accessToken", data.data.accessToken);
        window.location.href = "/";
      },
    });
  };

  return (
    <LoginForm
      inputs={inputs}
      onChange={onChange}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
    />
  );
}

export default SigninViewModel;
