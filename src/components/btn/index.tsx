import React from "react";
import { theme } from "../../theme/theme";
import * as Styled from "./styles";

interface Props {
  action: Function;
  actionSec?: Function;
  label: string;
  color?: string;
  bgColor?: string;
  fontSize?: string;
}
const ButtonPrimary: React.FC<Props> = ({
  action,
  label,
  color,
  bgColor,
  fontSize,
  actionSec,
}) => {
  return (
    <>
      <Styled.MainContainer>
        <Styled.Btn
          style={{
            color: color ? color : theme.colors.white.normal,
            backgroundColor: bgColor ? bgColor : theme.colors.red.normal,
            fontSize: fontSize ? fontSize : theme.fontSize.md2,
          }}
          onClick={() => {
            action();
            if (actionSec) {
              actionSec();
            }
          }}
        >
          {label}
        </Styled.Btn>
      </Styled.MainContainer>
    </>
  );
};

export default ButtonPrimary;
