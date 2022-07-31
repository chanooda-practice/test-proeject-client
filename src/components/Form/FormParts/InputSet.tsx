import { ISetProps } from "../../../interfaces/FormPropsInterface";
import Button from "./Button";
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
  buttonName,
  onClick,
  type,
}: ISetProps) {
  return (
    <div className={`mb-4 w-full${responsive ? " md:w-1/2 px-2" : null}`}>
      <Label text={text} />
      <div className="flex justify-between gap-2">
        <Input
          register={register}
          errorMessage={errorMessage}
          onChange={onChange}
          value={value}
          name={name}
          attr={attr}
          placeholder={placeholder}
          type={type}
        />
        {buttonName && <Button text={buttonName} onClick={onClick} responsive={false} />}
      </div>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
}

export default InputSet;
