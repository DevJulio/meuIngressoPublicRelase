import React from "react";
import * as Styled from "./styles";
import { theme } from "../../theme/theme";
import { TPurchase } from "../../pages/purchaseList";

interface IUsers {
  data: TPurchase;
}

const Purchase: React.FC<IUsers> = ({ data }) => {
  const buyTime = new Date(data.createdAt);
  return (
    <>
      <Styled.Container>
        <Styled.Center>
          <h1>Dados de usuário: </h1>
        </Styled.Center>

        <span>Usuário: {data.ticket[0].userName}</span>
        <span>CPF: {data.ticket[0].cpf}</span>

        <Styled.ContainerRow>
          <span
            style={{
              padding: "1vw",
            }}
          ></span>
        </Styled.ContainerRow>

        <span>Data da compra: {buyTime.toLocaleDateString("pt-br")}</span>
        <span>
          Hora da compra: {buyTime.getHours()}:{buyTime.getMinutes()}
        </span>
        <span>Número de contato: {data.ticket[0].userNumber}</span>
        <Styled.Center>
          <h1>Dados de compra: </h1>
        </Styled.Center>
        <span>Ingresso: {data.tipoIngresso}</span>
        <span
          style={{
            marginBottom: "3vh",
          }}
        >
          Valor pago: {data.valorPago}
        </span>
        {data.ticket.map((tkt) => (
          <Styled.TktDetail>
            <span>Usuário: {tkt.userName}</span>
            <span>CPF: {tkt.cpf}</span>
            <span>Número de contato: {tkt.userNumber}</span>
            {tkt.isUsed && (
              <Styled.UseSpan
                style={{
                  backgroundColor: theme.colors.red.normal,
                }}
              >
                Usado
              </Styled.UseSpan>
            )}

            {!tkt.isUsed && (
              <Styled.UseSpan
                style={{
                  backgroundColor: theme.colors.green.normal,
                }}
              >
                Sem uso
              </Styled.UseSpan>
            )}
          </Styled.TktDetail>
        ))}
      </Styled.Container>
    </>
  );
};

export default Purchase;
