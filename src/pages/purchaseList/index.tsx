import React, { useState } from "react";
import Header from "../../components/header";
import lupa from "../../assets/icons/lupa.png";
import * as Styled from "./styles";
import Footer from "../../components/footer";
import InvertBorderPage from "../../components/invertBorderPage";
import { theme } from "../../theme/theme";
import Purchase from "../../components/purchase";
import purchaseProps from "./purchaseProps";
import eventsProps from "../home/eventProps";

const PurchaseList: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const [money, setMoney] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [accessqty, setAccessQty] = useState<number>(0);

  const handleChange = (type: string) => {
    setTitle(type);
    setMoney(0);
    let count = 0;
    let accessCount = 0;
    let price = 0;
    purchaseProps.map((purchase) => {
      if (purchase.buyDetails.title === type) {
        count++;
        price = purchase.buyDetails.price;
      }
      if (purchase.isUsed) {
        accessCount++;
      }
    });
    setQty(count);
    setAccessQty(accessCount);
    setMoney(count * price);
  };

  return (
    <>
      <Header />
      <Styled.SelectContainer>
        <Styled.LogoImg
          src={lupa}
          alt="icone"
          style={{
            paddingLeft: "0vw",
          }}
        />
        <Styled.Select
          name="select"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          <option selected disabled value="0">
            Escolha o tipo de ingresso:
          </option>
          {eventsProps[0].prices.map((fbb) => (
            <option key={fbb.title} value={fbb.title}>
              {fbb.title}
            </option>
          ))}
        </Styled.Select>
      </Styled.SelectContainer>
      {money > 0 && (
        <Styled.InfoContainer>
          <Styled.Info>Valor arrecadado com: {title}</Styled.Info>
          <Styled.Info>R$ {money}</Styled.Info>
          <Styled.Info>Quantidade vendida: {qty}</Styled.Info>
          <Styled.Info>Ingressos usados: {accessqty}</Styled.Info>
        </Styled.InfoContainer>
      )}

      <InvertBorderPage
        insideColor={theme.colors.orange.palete}
        outsideColor={theme.colors.white.normal}
        children={
          <>
            <Purchase data={purchaseProps[0]} />
            <Purchase data={purchaseProps[1]} />
            <Purchase data={purchaseProps[2]} />
          </>
        }
      />
      <Footer />
    </>
  );
};

export default PurchaseList;
