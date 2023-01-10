import React from "react";
import * as Styled from "./styles";
import burgerMenuStyles from "./burgerMenuStyles";
import { stack as Menu } from "react-burger-menu";
import logo from "../../assets/logo/logo.png";
import { theme } from "../../theme/theme";
import { redirect, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  setTimeout(() => {
    const element = document.querySelector(
      "#root > div.sc-bcXHqe.kmAiWi > div > div.sc-iBYQkv.kzEVHx > div"
    );
    const teste = element as any;
    if (teste) {
      teste["style"].display = "flex";
      teste["style"].marginLeft = "auto";
    }
  }, 150);
  const navigate = useNavigate();

  return (
    <>
      <Styled.Container>
        <Styled.MainContainer onClick={() => {}}>
          <Styled.LogoContainer
            onClick={() => {
              redirect("/");
            }}
          >
            <Styled.LogoImg src={logo} alt="" />
          </Styled.LogoContainer>
          <Styled.MainSpanContainer
            onClick={() => {
              navigate("/");
            }}
          >
            <Styled.NameSpan>Meu</Styled.NameSpan>
            <Styled.NameSpanAux>Ingresso</Styled.NameSpanAux>
          </Styled.MainSpanContainer>
          <Styled.MenuContainer>
            <Menu styles={burgerMenuStyles}>
              <Styled.MenuItem
                id="home"
                onClick={() => {
                  return () => {
                    redirect("/");
                  };
                }}
                href="/"
              >
                Home
              </Styled.MenuItem>
              <Styled.MenuItem id="about" href="/recuperar-ingresso">
                Recuperar Ingresso
              </Styled.MenuItem>
              <Styled.MenuItem id="about" href="/politica-privacidade">
                Política de privacidade
              </Styled.MenuItem>

              <Styled.MenuItem
                id="contact"
                style={{ color: theme.colors.red.normal }}
                href="/adm/login"
              >
                Acessar Meu Ingresso
              </Styled.MenuItem>
            </Menu>
          </Styled.MenuContainer>
          <Styled.MenuDesktopContainer>
            <Styled.MenuDesktopAnchor href="/">Home</Styled.MenuDesktopAnchor>
            <Styled.MenuDesktopAnchor href="/recuperar-ingresso">
              Recuperar Ingresso
            </Styled.MenuDesktopAnchor>

            <Styled.MenuDesktopAnchor href="/politica-privacidade">
              Política de privacidade
            </Styled.MenuDesktopAnchor>
            <Styled.MenuDesktopAnchor
              href="/adm/login"
              style={{
                color: theme.colors.red.normal,
              }}
            >
              Acessar Meu Ingresso
            </Styled.MenuDesktopAnchor>
          </Styled.MenuDesktopContainer>
        </Styled.MainContainer>
      </Styled.Container>
    </>
  );
};

export default Header;
