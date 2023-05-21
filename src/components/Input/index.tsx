import { forwardRef, InputHTMLAttributes } from "react";
import { GlobalStyle } from "../../styles/global";
import { InputDefault } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ id, label, type, placeholder, ...rest }, ref) => {
    return (
      <>
        <GlobalStyle />
        <label htmlFor="id" className="labelInput">
          {label}
        </label>
        <InputDefault
          type={type}
          id={id}
          {...rest}
          placeholder={placeholder}
          ref={ref}
        />
      </>
    );
  }
);
