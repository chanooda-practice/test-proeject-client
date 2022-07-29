import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { ILoginFormInputs } from "../../interfaces/FormInputInterface";
//Component
import Form from "./Form";
import FormLink from "./FormLink";
import InputSet from "./InputSet";
import Submit from "./Submit";

function LoginForm({onSubmit,onChange,inputs,errorMessage}:) {
  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <Form onSubmit={onSubmit}>
          <InputSet
            text="이메일"
            onChange={onChange}
            value={inputs.username}
            errorMessage={errorMessage.email}
            name="email"
            responsive={false}
          />
          <InputSet
            text="비밀번호"
            onChange={onChange}
            value={inputs.password}
            errorMessage={errorMessage.password}
            name="password"
            responsive={false}
          />
          <div className="flex items-center justify-between mx">
            <FormLink to="/signup" text="회원가입" />
            <Submit long={false} value="로그인" />
          </div>
        </Form>
      </div>
    </>
  );
}
export default LoginForm;
