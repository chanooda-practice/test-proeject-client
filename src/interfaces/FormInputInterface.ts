// 회원가입 form Input Interface (useForm 용)
export interface ISignUpFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}
// 로그인 Form Input Interface (useState object string key 사용 위한)
export interface ILoginFormInputs {
  [key: string]: string;
}
