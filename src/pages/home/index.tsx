import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import InvertBorderPage from "../../components/invertBorderPage";
import { apiMapsAuth } from "../../config";
import { theme } from "../../theme/theme";
import marker from "../../assets/icons/marker.png";
import lupa from "../../assets/icons/lupa.png";
import CookieConsent, { Cookies } from "react-cookie-consent";

import * as Styled from "./styles";
import Ticket from "../../components/ticket";
import Footer from "../../components/footer";
import categories from "./categories";
import { TCardProps } from "../../components/ticket/card";
import api from "../../services/api";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

type TCoords = {
  latitude: number;
  longitude: number;
};

const Home: React.FC = () => {
  const [location, setLocation] = useState<TCoords>({
    latitude: 0,
    longitude: 0,
  });

  const navigate = useNavigate();
  const [city, setCity] = useState("Iporá, Goiás, Brasil.");
  const [allEvents, setAllEvents] = useState<TCardProps[]>([]);
  const [eventsToBeRender, setEventsToBeRender] = useState<TCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
        api.defaults.headers["Authorization"] = `${tokenObj}`;
        const response = await api.get("/getAllEvents");
        if (response.status === 200) {
          if (response.status === 200) {
            const parsed = response.data.map((event: any) => {
              return {
                id: event.id,
                ...event.data,
              };
            });
            setAllEvents(parsed as TCardProps[]);
            setEventsToBeRender(parsed as TCardProps[]);
          }
        }
      } catch (error: any) {
        if (error.response.status === 401) {
          // setUploading(false);
          message.error("Sessão expirada, faça login novamente!");
          setTimeout(() => {
            navigate("/adm/login");
          }, 4000);
        }
        message.error("Verifique os dados e tente novamente!");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => setLocation(position.coords),
    //   (err) => console.error(err)
    // );
  }, []);

  useEffect(() => {
    // const { latitude, longitude } = location;
    // if (latitude && longitude) {
    //   fetch(
    //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBKw4-46yP0CthDU1n79dbFWH62yjPMXeE`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       const city =
    //         data.results[0].address_components[3].long_name +
    //         ", " +
    //         data.results[0].address_components[4].long_name +
    //         ", Brasil."
    //         setCity(city);
    //     })
    //     .catch((err) => console.error(err));
    // }
  }, [location]);
  const handleChange = (type: string) => {
    let events: TCardProps[] = [];
    allEvents.map((event) => {
      if (event.category === type) {
        events.push(event);
      }
      if (type === "all") {
        events.push(event);
      }
    });
    setEventsToBeRender(events);
  };

  return (
    <>
      <Header />
      <Styled.MainContainer>
        <Styled.Container>
          <Styled.TitleAndLogo>
            <Styled.LogoImg src={marker} alt="icone" />
            <Styled.Title>{city}</Styled.Title>
          </Styled.TitleAndLogo>
        </Styled.Container>
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
              Escolha a categoria.
            </option>
            {categories.map((fbb) => (
              <option key={fbb.value} value={fbb.value}>
                {fbb.label}
              </option>
            ))}
          </Styled.Select>
        </Styled.SelectContainer>
        <InvertBorderPage
          insideColor={theme.colors.orange.palete}
          outsideColor={theme.colors.white.normal}
          children={
            <>
              {eventsToBeRender.length ? (
                eventsToBeRender.map((event) => <Ticket data={event} />)
              ) : (
                <></>
              )}
              {eventsToBeRender.length === 0 && (
                <Styled.Title
                  style={{
                    marginTop: "3vh",
                    color: theme.colors.white.normal,
                  }}
                >
                  Sem eventos!
                </Styled.Title>
              )}
            </>
          }
        />
      </Styled.MainContainer>
      <Styled.DesktopContainer>
        <Styled.Title>
          A versão para telas grandes em desenvolvimento.
        </Styled.Title>
        <Styled.Title
          style={{
            fontFamily: theme.fonts.secundary,
          }}
        >
          Versão para dispositivos móveis completa. Acesse pelo seu celular!
        </Styled.Title>
      </Styled.DesktopContainer>
      <CookieConsent
        location="bottom"
        buttonText="Aceito"
        cookieName="meuIngressoCookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "25px" }}
        expires={150}
      >
        Esse site usa cookies para melhorar sua experiência. Clique
        <a
          href="/politica-privacidade"
          style={{ textDecoration: "none", color: "#ffd42d" }}
        >
          {" "}
          aqui
        </a>{" "}
        para saber mais.
      </CookieConsent>

      <Footer />
    </>
  );
};

export default Home;
