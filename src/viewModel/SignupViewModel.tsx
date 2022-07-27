import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// Component
import SignUpForm from "../components/Form/SignUpForm";
// Interface
import { ISignUpFormInputs } from "../interfaces/FormInputInterface";
// Atom
import { checkPhoneNumber, phoneNumberState } from "../Model/signupModel";

function SignupViewModel() {
  const {
    register, // input 등록 및 설정 객체
    handleSubmit, // onSubmit 이벤트 시 실행 함수
    formState: { errors }, // form의 에러메시지 가져옴
    watch, // 값의 입력 및 변화를 지켜봄
    setError, // custom error 설정
  } = useForm<ISignUpFormInputs>();

  const setPhoneNumberState = useSetRecoilState(phoneNumberState);
  const check = useRecoilValue(checkPhoneNumber);
  const phoneNumber = useRecoilState(phoneNumberState);

  // 회원가입 폼의 입력값을 받아옴
  const onValid: SubmitHandler<ISignUpFormInputs> = (formData) => {};

  // 전화번호 인증 버튼
  const onPhoneNumberBtnClick = () => {
    const phoneNumber = watch("phoneNumber");
    if (!phoneNumber.match(/[0-9]{3}-[0-9]{3,4}-[0-9]{4}/)) {
      setError("phoneNumber", { message: "올바른 형식으로 입력해주세요." });
    } else {
      setError("phoneNumber", { message: undefined });
      setPhoneNumberState(phoneNumber);
    }
  };

  return (
    <>
      <SignUpForm
        onSubmit={handleSubmit(onValid)}
        register={register}
        errors={errors}
        onPhoneNumberBtnClick={onPhoneNumberBtnClick}
      />
    </>
  );
}

export default SignupViewModel;
