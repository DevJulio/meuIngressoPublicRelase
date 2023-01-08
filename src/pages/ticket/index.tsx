/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import * as Styled from "./styles";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { theme } from "../../theme/theme";
import IngressoReady from "../../components/ingressos";
import { message } from "antd";
import api from "../../services/api";
import { TTicket } from "../buyPage/buy";
import ButtonPrimary from "../../components/btn";
import { useNavigate } from "react-router-dom";

const TickeReady: React.FC = () => {
  const [ticket, setTicket] = useState<TTicket[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const id = sessionStorage.getItem("@AuthFirebase:uniqueCode");
        const response = await api.get(`/getTicketsToSave/${id}`);
        if (response.status === 200) {
          setTicket(response.data);
        }
      } catch (error: any) {
        console.log(error);
        message.error("Verifique os dados e tente novamente!");
      }
    };
    fetchData();
  }, []);

  const createTicket = () => {
    return ticket.map((tkt) => {
      return <IngressoReady tkt={tkt} />;
    });
  };

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Comprovante de compra</Styled.Title>
      </Styled.MainContainer>
      <Styled.Container style={{ backgroundColor: theme.colors.orange.palete }}>
        <Styled.ColContainer>
          <Styled.Atention>Atenção!</Styled.Atention>
          <Styled.Atention2>Instruções de uso:</Styled.Atention2>
          <Styled.ColContainer style={{ paddingTop: "15px" }}>
            <Styled.ItemSpan>
              Clique no botão "Salvar ingresso" para baixar o ingresso no seu
              celular
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              Clique no botão "Enviar ingresso via WhatsApp" para receber o
              ingresso no número informado na compra.
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              É necessário apresentar o ingresso na entrada com QR code nítido e
              legível
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              Ingresso pode ser impresso, ou apresentado no celular em forma de
              print ou baixado.
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              Caso o usuário perca o ingresso ou não consiga baixar, pode ser
              recuperado via CPF na página principal do site.
            </Styled.ItemSpan>
          </Styled.ColContainer>
        </Styled.ColContainer>
      </Styled.Container>
      <Styled.Container>{createTicket()}</Styled.Container>
      <ButtonPrimary
        bgColor={theme.colors.orange.palete}
        label={"Voltar para página principal"}
        action={() => {
          navigate("/");
        }}
      />
      <Footer />
    </>
  );
};

export default TickeReady;
