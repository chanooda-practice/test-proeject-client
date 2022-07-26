import { ChangeEventHandler } from "react";

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
