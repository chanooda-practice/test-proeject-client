import { ChangeEventHandler, FormEventHandler, useState } from "react";
import LoginForm from "../components/Form/LoginForm";
import { ILoginFormInputs } from "../interfaces/FormInputInterface";

function HomeViewModel() {
  const [inputs, setInputs] = useState<ILoginFormInputs>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
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
    e.preventDefault();
    for (const key in inputs) {
      if (inputs[key] === "") {
        setErrorMessage((prev) => ({ ...prev, [key]: `${key}를 입력해주세요.` }));
        break;
      } else {
        setErrorMessage((prev) => ({ ...prev, [key]: "" }));
      }
    }
  };

  return <LoginForm />;
}

export default HomeViewModel;
