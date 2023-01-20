/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import * as Styled from "./styles";

import Header from "../../components/header";
import Footer from "../../components/footer";
import whatsapp from "../../assets/icons/whatsapp.png";
const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <Styled.MainContainer>
        <Styled.DefaultTitle>
          Entre em contato para saber mais!
        </Styled.DefaultTitle>
        <Styled.ContactContainer>
          <Styled.Container>
            <Styled.Icons src={whatsapp} />
            <Styled.Title href="https://api.whatsapp.com/send?phone=5564996140938&text=Meu Ingresso!">
              Júlio Rodrigues
            </Styled.Title>
          </Styled.Container>
          <Styled.Container>
            <Styled.Icons src={whatsapp} />
            <Styled.Title href="https://api.whatsapp.com/send?phone=5562986216877&text=Meu Ingresso!">
              Jackson André
            </Styled.Title>
          </Styled.Container>
        </Styled.ContactContainer>
      </Styled.MainContainer>
      <Footer />
    </>
  );
};

export default Contact;
