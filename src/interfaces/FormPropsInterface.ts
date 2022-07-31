import { ChangeEventHandler, FormEventHandler } from "react";
import { ILoginFormInputs } from "./FormInputInterface";

export interface ISetProps {
  text: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
  register?: any;
  responsive: boolean;
  attr?: any;
  placeholder?: string;
  buttonName?: string;
  onClick?: any;
  type?: string;
}

export interface IInputProps {
  text?: string;
  errorMessage?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  register?: any;
  attr?: any;
  placeholder?: string;
  type?: string;
}

export interface IFormLinkProps {
  text: string;
  to: string;
}

export interface IErrorMessageProps {
  errorMessage?: string;
}

export interface ISubmitProps {
  value: string;
  long: boolean;
}

export interface IErrorMessage {
  userId: string;
  password: string;
}

export interface ILoginForm {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  inputs: ILoginFormInputs;
  errorMessage: IErrorMessage;
}
