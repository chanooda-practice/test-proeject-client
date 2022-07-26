import { ChangeEventHandler } from "react";

export interface IInputProps {
  text?: string;
  errorMessage?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

export interface ISetProps {
  text: string;
  errorMessage?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
}

export interface IFormLinkProps {
  text: string;
  to: string;
}

export interface IErrorMessageProps {
  errorMessage?: string;
}
