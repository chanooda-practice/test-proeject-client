import { ILoginFormInputs } from "../../../interfaces/FormInputInterface";
import { defaultClient } from "../../quries/axiosConfig";

export async function signinApi(data: ILoginFormInputs) {
  return defaultClient.post("auth/signin", data);
}
