import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import InvertBorderPage from "../../components/invertBorderPage";
import { theme } from "../../theme/theme";
import lupa from "../../assets/icons/lupa.png";

import * as Styled from "./styles";
import Ticket from "../../components/ticket";
import Footer from "../../components/footer";
import { TCardProps } from "../../components/ticket/card";
import categories from "../home/categories";
import api from "../../services/api";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import TokenValidate from "../../components/validateToken";

const EventsInfo: React.FC = () => {
  const [allEvents, setAllEvents] = useState<TCardProps[]>([]);
  const [eventsToBeRender, setEventsToBeRender] = useState<TCardProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      const userUid = JSON.parse(
        storageUser ? storageUser.toString() : "{uid:'vazio}"
      );
      try {
        const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");

        api.defaults.headers["Authorization"] = `${tokenObj}`;
        const response = await api.get(`/getAllMyEvents/${userUid.uid}`);
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

      <TokenValidate
        children={
          <>
            <InvertBorderPage
              insideColor={theme.colors.orange.palete}
              outsideColor={theme.colors.white.normal}
              children={
                <>
                  {eventsToBeRender.length ? (
                    eventsToBeRender.map((event) => (
                      <Ticket data={event} isInfo />
                    ))
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
          </>
        }
      />

      <Footer />
    </>
  );
};

export default EventsInfo;
