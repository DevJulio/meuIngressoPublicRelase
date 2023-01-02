import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import InvertBorderPage from "../../components/invertBorderPage";
import { theme } from "../../theme/theme";
import lupa from "../../assets/icons/lupa.png";

import * as Styled from "./styles";
import Ticket from "../../components/ticket";
import Footer from "../../components/footer";
import { TCardProps } from "../../components/ticket/card";
import eventsProps from "../home/eventProps";
import categories from "../home/categories";

const Events: React.FC = () => {
  const [allEvents, setAllEvents] = useState<TCardProps[]>([]);
  const [eventsToBeRender, setEventsToBeRender] = useState<TCardProps[]>([]);

  useEffect(() => {
    setAllEvents(eventsProps);
    setEventsToBeRender(eventsProps);
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
      <InvertBorderPage
        insideColor={theme.colors.orange.palete}
        outsideColor={theme.colors.white.normal}
        children={
          <>
            {eventsToBeRender.length ? (
              eventsToBeRender.map((event) => <Ticket data={event} isAdm />)
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
      <Footer />
    </>
  );
};

export default Events;
