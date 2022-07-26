import { ISetProps } from "../../interfaces/FormInterface";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import Label from "./Label";

function InputSet({
  text,
  errorMessage,
  onChange,
  value,
  name,
  responsive,
  register,
  attr,
  placeholder,
}: ISetProps) {
  return (
    <div className={`mb-4 w-full${responsive ? " md:w-1/2 px-2" : null}`}>
      <Label text={text} />
      <Input
        register={register}
        errorMessage={errorMessage}
        onChange={onChange}
        value={value}
        name={name}
        attr={attr}
        placeholder={placeholder}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
}

export default InputSet;
