import React from "react";
import * as Styled from "./styles";
interface Props {
  setValue: Function;
  label: string;
  options: string[];
}
const Select: React.FC<Props> = ({ setValue, label, options }) => {
  let opt = options.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });

  return (
    <>
      <Styled.MainContainer>
        {label}
        <Styled.Select
          name="select"
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
        >
          {opt}
        </Styled.Select>
      </Styled.MainContainer>
    </>
  );
};

export default Select;
