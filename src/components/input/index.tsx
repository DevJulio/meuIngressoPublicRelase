import React from "react";
import * as Styled from "./styles";
interface Props {
  setValue: Function;
  Label: string;
  isPassowd?: boolean;
  value?: string;
  placeholder?: string;
}
const Input: React.FC<Props> = ({
  setValue,
  Label,
  isPassowd,
  value,
  placeholder,
}) => {
  return (
    <>
      <Styled.MainContainer>
        {Label}
        {!isPassowd ? (
          <Styled.Input
            placeholder={placeholder ? placeholder : ""}
            defaultValue={value ? value : ""}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        ) : (
          <Styled.InputPw
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}
      </Styled.MainContainer>
    </>
  );
};

export default Input;
