import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Form from "./Form";
import Input from "./Input";
import Password from "./Password";
import Submit from "./Submit";

function LoginForm() {
  const [inputs, setInputs] = useState({
    id: "",
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
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <Input name="id" onChange={onChange} placeholder="ID" value={inputs.id} />
            <Password
              name="password"
              onChange={onChange}
              placeholder="Password"
              value={inputs.password}
              className="py-2 rounded-md"
            />
          </div>
          <div className="mt-10">
            <Submit value="로그인" />
            <NavLink className="text-white" to={"/signup"}>
              sign up
            </NavLink>
          </div>
        </div>
      </Form>
    </>
  );
}
export default LoginForm;
