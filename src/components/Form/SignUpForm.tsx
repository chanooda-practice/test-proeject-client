import Form from "./FormParts/Form";
import FormLink from "./FormParts/FormLink";
import FormRow from "./FormParts/FormRow";
import InputSet from "./FormParts/InputSet";
import Submit from "./FormParts/Submit";

function SignUpForm({
  onSubmit,
  register,
  errors,
  onClick,
}: {
  onSubmit: any;
  register: any;
  errors: any;
  onClick: any;
}) {
  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <Form onSubmit={onSubmit}>
          <FormRow>
            <InputSet
              name="name"
              text="이름"
              responsive={true}
              register={register("name", { required: "이름을 입력해주세요." })}
              errorMessage={errors.name?.message}
            />
            <InputSet
              buttonName="중복ID 확인"
              text="ID"
              responsive={true}
              register={register("userId", {
                required: "ID를 입력해주세요.",
              })}
              errorMessage={errors.userId?.message}
              onClick={onClick["userId"]}
            />
          </FormRow>
          <FormRow>
            <InputSet
              text="비밀번호"
              type="password"
              responsive={true}
              register={register("password", { required: "비밀번호를 입력해주세요." })}
              errorMessage={errors.password?.message}
            />
            <InputSet
              text="비밀번호 확인"
              type="password"
              responsive={true}
              register={register("confirmPassword", {
                required: "비밀번호 확인란을 입력해주세요.",
              })}
              errorMessage={errors.confirmPassword?.message}
            />
          </FormRow>
          <FormRow>
            <InputSet
              text="PIN"
              type="password"
              responsive={true}
              register={register("pin", {
                required: "PIN을 입력해주세요.",
                pattern: { value: /[0-9]{6}/g, message: "6자리 숫자를 입력해주세요." },
              })}
              errorMessage={errors.pin?.message}
            />
            <InputSet
              text="PIN 확인"
              type="password"
              responsive={true}
              register={register("confirmPin", {
                required: "PIN 확인란을 입력해주세요.",
              })}
              errorMessage={errors.confirmPin?.message}
            />
          </FormRow>
          <FormRow>
            <InputSet
              name="email"
              text="이메일"
              responsive={true}
              register={register("email", { required: "이메일을 입력해주세요." })}
              errorMessage={errors.email?.message}
            />
            <InputSet
              buttonName="전화번호 확인"
              placeholder="123-1234-1234"
              text="전화번호"
              responsive={true}
              register={register("phoneNumber", {
                required: "전화번호를 입력해주세요.",
                pattern: {
                  value: /[0-9]{3}-[0-9]{3,4}-[0-9]{4}/,
                  message: "올바른 형식으로 입력해주세요.",
                },
              })}
              errorMessage={errors.phoneNumber?.message}
              onClick={onClick["phoneNumber"]}
              attr={{
                type: "tel",
              }}
            />
          </FormRow>
          <div className="flex items-center justify-between mt-4">
            <FormLink to="/" text="로그인" />
            <Submit long={false} value="회원가입" />
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUpForm;
