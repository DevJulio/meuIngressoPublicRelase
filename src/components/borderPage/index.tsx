import React from "react";
import * as Styled from "./styles";

interface IBorderProps {
  children: any;
  outsideColor: string;
  insideColor: string;
  deskTopChildren?: any;
}

const BorderPage: React.FC<IBorderProps> = ({
  children,
  outsideColor,
  insideColor,
  deskTopChildren,
}) => {
  return (
    <>
      <Styled.MainContainer style={{ backgroundColor: outsideColor }}>
        <Styled.ContainerMobile style={{ backgroundColor: insideColor }}>
          {children}
        </Styled.ContainerMobile>
        {deskTopChildren && (
          <Styled.Container style={{display: "flex"}}>{deskTopChildren}</Styled.Container>
        )}
      </Styled.MainContainer>
    </>
  );
};

export default BorderPage;
