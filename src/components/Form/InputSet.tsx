import { ISetProps } from "../../interfaces/FormInterface";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import Label from "./Label";

function InputSet({ text, errorMessage, onChange, value, name }: ISetProps) {
  console.log(value);
  return (
    <div className="mb-4">
      <Label text={text} />
      <Input errorMessage={errorMessage} onChange={onChange} value={value} name={name} />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
}

export default InputSet;
