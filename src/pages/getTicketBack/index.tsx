import React, { useState } from "react";
import * as Styled from "./styles";

import Header from "../../components/header";
import { theme } from "../../theme/theme";
import Footer from "../../components/footer";
import InputMasked from "../../components/maskedIpunt";
import ButtonPrimary from "../../components/btn";
import api from "../../services/api";
import { message } from "antd";
import IngressoReady from "../../components/ingressos";
import { TTicket } from "../buyPage/buy";

const GetTicket: React.FC = () => {
  const [cpf, setCpf] = useState<string>("");
  const [ticket, setTicket] = useState<TTicket[]>();

  const searchTkt = async () => {
    try {
      const response = await api.get(`/getTicket/${cpf}`);
      if (response.status === 200) {
        setTicket(response.data);
        const cpfFields = document.getElementById("cpfFields");
        if (cpfFields) {
          cpfFields.style.display = "none";
        }
      }
    } catch (error: any) {
      console.log(error);
      message.error("Verifique os dados e tente novamente!");
    }
  };

  const createTicket = () => {
    if (ticket) {
      return ticket.map((tkt) => {
        return <IngressoReady tkt={tkt} />;
      });
    }
  };

  return (
    <>
      <Header />

      <Styled.Cointainer>
        <Styled.Title>
          Informe seu cpf para ter acesso ao seu ingresso!
        </Styled.Title>
        <div id="cpfFields">
          <Styled.FormContainer>
            <InputMasked
              setValue={setCpf}
              Label={"CPF do comprador"}
              mask={"999.999.999-99"}
            ></InputMasked>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <ButtonPrimary
              label={"Buscar ingresso!"}
              action={searchTkt}
              bgColor={theme.colors.white.normal}
              color={theme.colors.green.normal}
            />
          </Styled.FormContainer>
        </div>
        <Styled.FormContainer>{createTicket()}</Styled.FormContainer>
      </Styled.Cointainer>

      <Footer />
    </>
  );
};

export default GetTicket;
