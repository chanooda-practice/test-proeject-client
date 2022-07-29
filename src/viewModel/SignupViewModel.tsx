import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// Component
import SignUpForm from "../components/Form/SignUpForm";
// Interface
import { ISignUpFormInputs } from "../interfaces/FormInputInterface";
import {
  checkDuplicateId,
  checkDuplicatePhoneNumber,
  checkPhoneNumber,
  signup,
} from "../Model/api/Auth/signupApi";

function SignupViewModel() {
  const navigate = useNavigate();

  // ID 중복 확인 Mutate
  const { mutate: checkDuplicateIdMutate, isLoading: checkDuplicateIdLoading } =
    useMutation(checkDuplicateId);
  // 전화번호 중복 확인 Mutate
  const { mutateAsync: checkPhoneNumberMutate, isLoading: checkPhoneNumberLoading } =
    useMutation(checkPhoneNumber);
  // 전화번호 인증 Mutate
  const {
    mutateAsync: checkDuplicatePhoneNumberMutate,
    isLoading: checkDuplicatePhoneNumberLoading,
  } = useMutation(checkDuplicatePhoneNumber);
  // 회원가입 Mutate
  const { mutate: signupMutate, isLoading: signupLoading } = useMutation(signup);

  const {
    register, // input 등록 및 설정 객체
    handleSubmit, // onSubmit 이벤트 시 실행 함수
    formState: { errors }, // form의 에러메시지 가져옴
    watch, // 값의 입력 및 변화를 지켜봄
    setError, // custom error 설정
  } = useForm<ISignUpFormInputs>();

  // 회원가입 폼의 입력값을 받아옴
  const onValid: SubmitHandler<ISignUpFormInputs> = (formData) => {
    if (signupLoading) return;

    console.log(formData);
    const { confirmPassword, confirmPin, ...data } = formData;

    // 비밀번호 다르면 에러 리턴
    if (formData.password !== confirmPassword) {
      setError("confirmPassword", { message: "비밀번호가 다릅니다." });
      return;
    }
    // 핀번호 다르면 에러 리턴
    else if (confirmPin !== formData.pin) {
      setError("confirmPin", { message: "PIN이 다릅니다." });
      return;
    }
    // 문제 없으면 api 접근
    else {
      console.log(data);
      signupMutate(data, {
        onSuccess: (data) => {
          return navigate("/");
        },
      });
    }
  };

  // 전화번호 인증 버튼 클릭 이벤트
  const onPhoneNumberBtnClick = async () => {
    if (checkDuplicatePhoneNumberLoading || checkPhoneNumberLoading) return;

    const phoneNumber = watch("phoneNumber");
    // 전화번호가 올바른 유형으로 전달 됬는지 확인
    if (!phoneNumber.match(/[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/)) {
      setError("phoneNumber", { message: "올바른 형식으로 입력해주세요." });
      return;
    } else {
      setError("phoneNumber", { message: undefined });
    }
    const data = { phoneNumber };
    // 전화번호 중복 확인
    const isDuplicatePhoneNumber = await checkDuplicatePhoneNumberMutate(data, {});
    if (isDuplicatePhoneNumber.data.isOk === false) {
      alert("이미 존재하는 전화번호입니다.");
      return;
    }
    // 전화번호 인증 확인
    await checkPhoneNumberMutate(data, {
      onSuccess: (data) => {
        if (data.data.isOk === true) alert("전화번호 인증 완료");
        else alert("전화번호 인증 실패");
      },
    });
  };
  // ID 확인 버튼 클릭 이벤트
  const onIdButtonClick = async () => {
    const userId = watch("userId");
    if (userId === "" || checkDuplicateIdLoading) return;
    // ID 중복 확인
    checkDuplicateIdMutate(userId, {
      onSuccess: (data) => {
        console.log(data.data.isOk);
        if (data.data.isOk === true) alert("사용가능한 ID입니다.");
        else alert("이미 존재하는 ID 입니다.");
      },
    });
  };

  return (
    <>
      <SignUpForm
        onSubmit={handleSubmit(onValid)}
        register={register}
        errors={errors}
        onClick={{
          phoneNumber: onPhoneNumberBtnClick,
          userId: onIdButtonClick,
        }}
      />
    </>
  );
}

export default SignupViewModel;
