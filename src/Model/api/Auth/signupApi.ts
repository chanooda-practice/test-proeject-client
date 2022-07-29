import { ISignupData } from "../../../interfaces/FormInputInterface";
import { defaultClient } from "../../quries/axiosConfig";

// 회원가입 관련 API

// ID 중복 확인 API
export async function checkDuplicateId(userId: string) {
  return defaultClient.post<{ message: string; isOk: boolean }>(
    `/auth/checkDuplicateId?userId=${userId}`
  );
}
// 전화번혹 중복 API
export async function checkDuplicatePhoneNumber(data: { phoneNumber: string }) {
  return defaultClient.post<{ message: string; isOk: boolean }>(
    `/auth/checkDuplicatePhoneNumber`,
    data
  );
}
// 전화번호 인증 API
export async function checkPhoneNumber(data: { phoneNumber: string }) {
  return defaultClient.post<{ message: string; isOk: boolean }>(`/auth/checkPhoneNumber`, data);
}
// 회원가입 API
export async function signup(data: ISignupData) {
  return defaultClient.post<{ message: string; isOk: boolean }>(`/auth/signup`, data);
}
