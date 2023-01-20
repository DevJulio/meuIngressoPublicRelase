/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import * as Styled from "./styles";

import Header from "../../components/header";
import Footer from "../../components/footer";

const Fail: React.FC = () => {
  return (
    <>
      <Header />
      <Styled.MainContainer>
        <Styled.Title>
          Erro ao realizar a compra, contate o suporte
        </Styled.Title>
      </Styled.MainContainer>
      <Footer />
    </>
  );
};

export default Fail;
