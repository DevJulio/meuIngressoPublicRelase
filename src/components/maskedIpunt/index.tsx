import React from "react";
import * as Styled from "./styles";
interface Props {
  setValue: Function;
  Label: string;
  placeholder?: string;
  mask?: string;
}
const InputMasked: React.FC<Props> = ({
  setValue,
  Label,
  placeholder,
  mask = "",
}) => {
  return (
    <>
      <Styled.MainContainer>
        {Label}
        <Styled.InputMaskHtml
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          mask={mask}
        ></Styled.InputMaskHtml>
      </Styled.MainContainer>
    </>
  );
};

export default InputMasked;
