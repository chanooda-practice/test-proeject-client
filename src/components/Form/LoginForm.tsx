// Interface
import { ILoginForm } from "../../interfaces/FormPropsInterface";
import Form from "./FormParts/Form";
import FormLink from "./FormParts/FormLink";
import InputSet from "./FormParts/InputSet";
import Submit from "./FormParts/Submit";
//Component

function LoginForm({ onSubmit, onChange, inputs, errorMessage }: ILoginForm) {
  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <Form onSubmit={onSubmit}>
          <InputSet
            text="ID"
            onChange={onChange}
            value={inputs.userId}
            errorMessage={errorMessage.userId}
            name="userId"
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
