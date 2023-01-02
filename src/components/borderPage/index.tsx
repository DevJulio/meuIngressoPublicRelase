import React from "react";
import * as Styled from "./styles";

interface IBorderProps {
  children: any;
  outsideColor: string;
  insideColor: string;
}

const BorderPage: React.FC<IBorderProps> = ({
  children,
  outsideColor,
  insideColor,
}) => {
  return (
    <>
      <Styled.MainContainer style={{ backgroundColor: outsideColor }}>
        <Styled.ContainerMobile style={{ backgroundColor: insideColor }}>
          {children}
        </Styled.ContainerMobile>
      </Styled.MainContainer>
    </>
  );
};

export default BorderPage;
