import React, { useEffect } from "react";
import Header from "../../components/header";
import { theme } from "../../theme/theme";

import * as Styled from "./styles";
import Footer from "../../components/footer";
import BorderPage from "../../components/borderPage";
import ButtonPrimary from "../../components/btn";
import { useNavigate } from "react-router-dom";
import TokenValidate from "../../components/validateToken";
import api from "../../services/api";
import { message } from "antd";
import { getStorage } from "../../utils/storage";
import cadastrarEvento from "../../assets/icons/cadastrarEvento.png";
import meusEventos from "../../assets/icons/meusEventos.png";
import vendas from "../../assets/icons/vendas.png";
import invalidar from "../../assets/icons/invalidar.png";
import lista from "../../assets/icons/lista.png";

const Adm: React.FC = () => {
  const navigate = useNavigate();
  const user = getStorage("@AuthFirebase:user");

  useEffect(() => {
    console.log(user);
    if (!user.email) {
      navigate("/adm/login");
    }
    const fetchData = async () => {
      try {
        const tokenObj = localStorage.getItem("@AuthFirebase:accessToken");
        api.defaults.headers["Authorization"] = `${tokenObj}`;
        const response = await api.get(`/getAdmAuth/${user.email}`);
        if (response.status === 200) {
          if (!response.data) {
            navigate("/adm/login");
          }
        }
      } catch (error: any) {
        console.log(error);
        navigate("/adm/login");
        if (error.response.status === 401) {
          message.error("Sessão expirada, faça login novamente!");
          setTimeout(() => {
            navigate("/adm/login");
          }, 4000);
        }
        message.error("Sessão expirada, faça login novamente!");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <TokenValidate
        children={
          <>
            <BorderPage
              insideColor={theme.colors.white.normal}
              outsideColor={theme.colors.orange.palete}
              children={
                <>
                  {/* <Styled.Container>
                    <Styled.TitleContainer>
                      <Styled.Title>logado como:</Styled.Title>
                      <Styled.Title>{user.email}</Styled.Title>
                    </Styled.TitleContainer>
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
                        label={"Lista de vendas"}
                        action={() => {
                          navigate("/adm/seleciona-evento");
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
                  </Styled.Container> */}
                </>
              }
              deskTopChildren={
                <>
                  <Styled.Container style={{ backgroundColor: "white" }}>
                    <Styled.TitleContainer>
                      <Styled.Title>logado como:</Styled.Title>
                      <Styled.Title>{user.email}</Styled.Title>
                    </Styled.TitleContainer>
                    <Styled.ContainerAux style={{ backgroundColor: "white" }}>
                      <Styled.RowContainer>
                        <Styled.IconContainer
                          onClick={() => {
                            navigate("/adm/criar-evento");
                          }}
                        >
                          <Styled.Icon src={cadastrarEvento} />
                          <Styled.IconSpan>Cadastrar Evento</Styled.IconSpan>
                        </Styled.IconContainer>

                        <Styled.IconContainer
                          onClick={() => {
                            navigate("/adm/lista-de-eventos");
                          }}
                        >
                          <Styled.Icon src={meusEventos} />
                          <Styled.IconSpan>Meus eventos</Styled.IconSpan>
                        </Styled.IconContainer>

                        <Styled.IconContainer
                          onClick={() => {
                            navigate("/adm/seleciona-evento");
                          }}
                        >
                          <Styled.Icon src={vendas} />
                          <Styled.IconSpan>Lista de vendas</Styled.IconSpan>
                        </Styled.IconContainer>
                      </Styled.RowContainer>
                      <Styled.RowContainer>
                        <Styled.IconContainer
                          onClick={() => {
                            navigate("/");
                          }}
                        >
                          <Styled.Icon src={lista} />
                          <Styled.IconSpan>Lista de eventos</Styled.IconSpan>
                        </Styled.IconContainer>
                        <Styled.IconContainer>
                          <Styled.Icon src={invalidar} />
                          <Styled.IconSpan>Invalidar Ingresso</Styled.IconSpan>
                        </Styled.IconContainer>
                      </Styled.RowContainer>
                    </Styled.ContainerAux>
                  </Styled.Container>
                </>
              }
            />
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Adm;
