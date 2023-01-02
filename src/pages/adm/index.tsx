import React from "react";
import Header from "../../components/header";
import { theme } from "../../theme/theme";

import * as Styled from "./styles";
import Footer from "../../components/footer";
import BorderPage from "../../components/borderPage";
import ButtonPrimary from "../../components/btn";
import { useNavigate } from "react-router-dom";

const Adm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <BorderPage
        insideColor={theme.colors.white.normal}
        outsideColor={theme.colors.orange.palete}
        children={
          <>
            <Styled.Container>
              <Styled.BtnsContainer>
                <ButtonPrimary
                  bgColor={theme.colors.green.normal}
                  label={"Cadastrar evento"}
                  action={() => {
                    navigate("/adm/criar-evento");
                  }}
                />
              </Styled.BtnsContainer>
              <Styled.BtnsContainer>
                <ButtonPrimary
                  bgColor={theme.colors.blue.palete}
                  label={"Meus eventos"}
                  action={() => {
                    navigate("/adm/lista-de-eventos");
                  }}
                />
              </Styled.BtnsContainer>
              <Styled.BtnsContainer>
                <ButtonPrimary
                  bgColor={theme.colors.yellow.normal}
                  label={"Lista de compras"}
                  action={() => {
                    navigate("/adm/lista-de-compras");
                  }}
                />
              </Styled.BtnsContainer>
              <Styled.BtnsContainer>
                <ButtonPrimary
                  bgColor={theme.colors.red.normal}
                  label={"Lista de eventos"}
                  action={() => {
                    navigate("/");
                  }}
                />
              </Styled.BtnsContainer>
            </Styled.Container>
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Adm;
