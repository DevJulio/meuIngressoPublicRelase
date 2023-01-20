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
  window.scrollTo(0, 0);
  const [ticket, setTicket] = useState<TTicket[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("@AuthFirebase:uniqueCode");
    const status = localStorage.getItem("@AuthFirebase:uniqueCodeStatus");
    const fetchData = async () => {
      if (status && id) {
        try {
          const response = await api.get(`/getTicketsToSave/${id}`);
          if (response.status === 200) {
            setTicket(response.data);
            localStorage.setItem("@AuthFirebase:uniqueCodeStatus", "false");
          }
        } catch (error: any) {
          console.log(error);
          message.error("Verifique os dados e tente novamente!");
        }
      } else {
        message.error(
          "Verifique os dados e tente novamente. ou contate o suporte na página a seguir...",
          10
        );
        setTimeout(() => {
          navigate("/contato");
        }, 4000);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTicket = () => {
    return ticket.map((tkt, index) => {
      return <IngressoReady key={index} tkt={tkt} />;
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
              celular, onde será armazenado na pasta de downloads.
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              Caso não consiga salvar o ingresso, a captura de tela também será
              aceita.
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              Caso o usuário perca o ingresso ou não consiga baixar, pode ser
              recuperado via CPF na página principal do site.
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              No iPhone pode ser acessado no seguinte caminho: Arquivos →
              Dowloads → "ENTRADA_MEU_INGRESSO" OU Arquivos → Recentes →
              "ENTRADA_MEU_INGRESSO"
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              No Android pode ser encontrado na galeria de imagens ou no
              seguinte caminho: Meus Arquivos (ou algum gerenciador de Arquivos)
              → Dowloads → "ENTRADA_MEU_INGRESSO".
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              É necessário apresentar o ingresso na entrada com QR code nítido e
              legível.
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
