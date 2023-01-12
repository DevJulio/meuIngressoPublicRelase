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

const Adm: React.FC = () => {
  const navigate = useNavigate();
  const user = getStorage("@AuthFirebase:user");

  useEffect(() => {
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
                  <Styled.Container>
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
                  </Styled.Container>
                </>
              }
              deskTopChildren={
                <>
                  <Styled.Container>
                    <Styled.TitleContainer>
                      <Styled.Title>logado como:</Styled.Title>
                      <Styled.Title>{user.email}</Styled.Title>
                    </Styled.TitleContainer>
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
