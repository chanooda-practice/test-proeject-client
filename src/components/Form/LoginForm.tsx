import React, {
  ChangeEventHandler,
  EventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";

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
      <form onSubmit={onSubmit}>
        <input name="id" type="text" onChange={onChange} placeholder="ID" value={inputs.id} />
        <input
          name="password"
          type="password"
          onChange={onChange}
          placeholder="Password"
          value={inputs.password}
        />
        <input type="submit" value="로그인" />
      </form>
    </>
  );
}
export default LoginForm;
