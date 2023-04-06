/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import * as Styled from "./styles";

import Header from "../../components/header";
import Footer from "../../components/footer";

const Manutencao: React.FC = () => {
  return (
    <>
      <Header />
      <Styled.MainContainer>
        <Styled.Title>Atenção. </Styled.Title>
        <span style={{ color: "white", width: "95%", marginBottom: "12vh" }}>
          Devido a nossa prestadora de cartão de crédito, todas as compras serão
          estornadas no máximo de 1 a 3 dias. As compras foram processadas e validadas, mas
          nossa operadora de cartão de crédito (Stripe Pagamentos), de forma
          arbitrária acabou prejudicando as vendas online. As vendas continuarão
          funcionando normalmente na portaria e no escritório.
        </span>
      </Styled.MainContainer>
      <Footer />
    </>
  );
};

export default Manutencao;
