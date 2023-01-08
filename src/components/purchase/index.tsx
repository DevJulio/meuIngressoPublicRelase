import React from "react";
import * as Styled from "./styles";
import { TUsers } from "../../pages/buyPage/buy";
import { theme } from "../../theme/theme";

interface IUsers {
  data: TUsers;
}

const Purchase: React.FC<IUsers> = ({ data }) => {
  const buyTime = data.date;
  return (
    <>
      <Styled.Container>
        <Styled.Center>
          <h1>Dados de usuário: </h1>
        </Styled.Center>
        <span>Usuário: {data.userName}</span>
        <span>CPF: {data.cpf}</span>

        <Styled.ContainerRow>
          <span
            style={{
              padding: "1vw",
            }}
          ></span>
        </Styled.ContainerRow>

        {data.isUsed && (
          <Styled.UseSpan
            style={{
              backgroundColor: theme.colors.red.normal,
            }}
          >
            Usado
          </Styled.UseSpan>
        )}

        {!data.isUsed && (
          <Styled.UseSpan
            style={{
              backgroundColor: theme.colors.green.normal,
            }}
          >
            Sem uso
          </Styled.UseSpan>
        )}
        <span>Data da compra: {buyTime.toLocaleDateString("pt-br")}</span>
        <span>
          Hora da compra: {buyTime.getHours()}:{buyTime.getMinutes()}
        </span>
        <span>Número de contato: {data.userNumber}</span>
        <Styled.Center>
          <h1>Dados de compra: </h1>
        </Styled.Center>
        <span>Ingresso: {data.buyDetails.title}</span>
        <span
          style={{
            marginBottom: "3vh",
          }}
        >
          Valor pago: {data.buyDetails.price}
        </span>
      </Styled.Container>
    </>
  );
};

export default Purchase;
