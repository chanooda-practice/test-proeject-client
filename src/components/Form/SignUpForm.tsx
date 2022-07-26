import { match } from "assert";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignUpFormInput } from "../../interfaces/FormInputInterface";
import Button from "./Button";
import Form from "./Form";
import FormLink from "./FormLink";
import FormRow from "./FormRow";
import InputSet from "./InputSet";
import Submit from "./Submit";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<ISignUpFormInput>();

  const onValid: SubmitHandler<ISignUpFormInput> = (formData) => {
    console.log(formData);
  };

  const onPhoneNumberBtnClick = () => {
    const phoneNumber = watch("phoneNumber");
    console.log(phoneNumber);
    if (!phoneNumber.match(/[0-9]{3}-[0-9]{3,4}-[0-9]{4}/)) {
      setError("phoneNumber", { message: "올바른 형식으로 입력해주세요." });
    } else {
      setError("phoneNumber", { message: undefined });
    }
  };

  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <Form onSubmit={handleSubmit(onValid)}>
          <FormRow>
            <InputSet
              name="name"
              text="이름"
              responsive={true}
              register={register("name", { required: "이름을 입력해주세요." })}
              errorMessage={errors.name?.message}
            />
            <InputSet
              name="email"
              text="이메일"
              responsive={true}
              register={register("email", { required: "이메일을 입력해주세요." })}
              errorMessage={errors.email?.message}
            />
          </FormRow>
          <FormRow>
            <InputSet
              text="비밀번호"
              responsive={true}
              register={register("password", { required: "비밀번호를 입력해주세요." })}
              errorMessage={errors.password?.message}
            />
            <InputSet
              text="비밀번호 확인"
              responsive={true}
              register={register("confirmPassword", {
                required: "비밀번호 확인란을 입력해주세요.",
              })}
              errorMessage={errors.confirmPassword?.message}
            />
          </FormRow>
          <FormRow>
            <InputSet
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
              attr={{
                type: "tel",
              }}
            />
            <Button text="전화번호 확인" responsive={true} onClick={onPhoneNumberBtnClick} />
          </FormRow>
          <FormLink to="/" text="로그인" />
          <Submit value="회원가입" long={true} />
        </Form>
      </div>
    </>
  );
}

export default SignUpForm;
