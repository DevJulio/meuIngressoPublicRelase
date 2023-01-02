import React from "react";
import { TInpupt } from "./input";

import * as Styled from "./styles";

const AntInput: React.FC<TInpupt> = ({
  value,
  defaultValue,

  setValue,
  label,
}) => {
  return (
    <>
      <Styled.Label> {label} </Styled.Label>
      <Styled.Container>
        <Styled.InputContainer>
          <Styled.Input
            type="number"
            value={value}
            defaultValue={defaultValue}
            onChange={setValue}
          />
        </Styled.InputContainer>
      </Styled.Container>
    </>
  );
};

export default AntInput;
