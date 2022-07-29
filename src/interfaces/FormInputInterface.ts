// 회원가입 form Input Interface (useForm 용)
export interface ISignUpFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  userId: string;
  pin: number;
  confirmPin: number;
}
// 로그인 Form Input Interface (useState object string key 사용 위한)
export interface ILoginFormInputs {
  [key: string]: string;
}

// 회원가입 API 전송 데이터
export interface ISignupData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  userId: string;
  pin: number;
}
