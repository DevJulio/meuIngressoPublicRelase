import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { theme } from "../../theme/theme";
import * as Styled from "./styles";
import Footer from "../../components/footer";
import eventsProps from "../home/eventProps";
import BorderPage from "../../components/borderPage";
import calendario from "../../assets/icons/calendario.png";
import { formatarData } from "../../utils/parseDate";
import { Rating } from "react-simple-star-rating";
import ButtonPrimary from "../../components/btn";
import Modal from "../../components/modal";
import { useNavigate } from "react-router-dom";
import { TCardProps } from "../../components/ticket/card";
import api from "../../services/api";
import { message } from "antd";

const Detail: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [ticketType, setTicketType] = useState<string>("");
  const [event, setEvent] = useState<TCardProps>();

  const handleClose = () => {
    setModal(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem("eventId");
      try {
        const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
        api.defaults.headers["Authorization"] = `${tokenObj}`;
        const response = await api.get(`/getEvent/${id}`);
        if (response.status === 200) {
          if (response.status === 200) {
            const event = response.data;
            setEvent(event);
          }
        }
      } catch (error: any) {
        console.log(error);
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

  const formatedTime =
    new Date(event ? event.time.toString() : "00:00")
      .getHours()
      .toString()
      .padStart(2, "0") +
    ":" +
    new Date(event ? event.time.toString() : "00:00")
      .getMinutes()
      .toString()
      .padStart(2, "0");

  const weekDay = formatarData(
    `${eventsProps[0].day}/${eventsProps[0].month}/${eventsProps[0].year}`
  );

  return (
    <>
      {modal && (
        <>
          <Modal title={"Atenção!"} handleClose={handleClose}>
            <Styled.TxtContainer>
              <Styled.SpanTitleAux>
                Você escolheu o ingresso: {ticketType}, deseja continuar para o
                pagamento?
              </Styled.SpanTitleAux>
            </Styled.TxtContainer>
            <Styled.BtnsContainer>
              <ButtonPrimary
                bgColor={theme.colors.green.normal}
                label={"Continuar"}
                action={() => {
                  handleClose();
                  navigate("/compra");
                }}
              />
              <ButtonPrimary
                label={"Cancelar"}
                action={() => {
                  handleClose();
                }}
              />
            </Styled.BtnsContainer>
          </Modal>
        </>
      )}

      <Header />
      <BorderPage
        insideColor={theme.colors.orange.palete}
        outsideColor={theme.colors.orange.palete}
        children={
          <>
            {event && (
              <Styled.Container>
                <Styled.Banner src={event.adicionalPictureUrl} />
                <Styled.ContainerData>
                  <span>{event.title}</span>
                  <Styled.ContainerRow>
                    <span
                      style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.md2,
                      }}
                    >
                      {event.place}
                    </span>
                  </Styled.ContainerRow>
                  <Styled.PriceSpanAux>A partir de:</Styled.PriceSpanAux>
                  <Styled.PriceSpan>R${event.price}</Styled.PriceSpan>
                </Styled.ContainerData>

                <Styled.InfoContainerRow>
                  <Styled.TitleAndLogo>
                    <Styled.LogoImg src={calendario} />
                    <Styled.Spacer>
                      <span
                        style={{
                          paddingTop: "2px",
                        }}
                      >
                        {event.day}
                      </span>
                      <span
                        style={{
                          fontFamily: theme.fonts.primary,
                        }}
                      >
                        {event.month}
                      </span>
                    </Styled.Spacer>
                  </Styled.TitleAndLogo>

                  <Styled.Spacer
                    style={{
                      marginLeft: "51vw",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.sm,
                      }}
                    >
                      {weekDay}
                    </span>
                    <span
                      style={{
                        fontFamily: theme.fonts.secundary,
                        fontSize: theme.fontSize.sm,
                      }}
                    >
                      {formatedTime}
                    </span>
                  </Styled.Spacer>
                </Styled.InfoContainerRow>
                <Styled.Description>
                  <Styled.TitleAndRating>
                    <Styled.SpanTitle>Detalhes do evento:</Styled.SpanTitle>
                    <Styled.RatingContainer>
                      <Rating size={35} initialValue={4.5} allowFraction />
                    </Styled.RatingContainer>
                  </Styled.TitleAndRating>
                  <Styled.SpanDescription>
                    {event.description}
                  </Styled.SpanDescription>
                </Styled.Description>
                <Styled.SpanTitle>Ingressos disponíveis:</Styled.SpanTitle>

                <Styled.TicketsContainer>
                  {event.prices.map((item: any, id) => (
                    <Styled.Tickets
                      id={id.toString()}
                      onClick={() => {
                        setTicketType(item.title);
                        setModal(true);
                      }}
                    >
                      <span> {item.title}</span>
                      <span>R$ {item.price}</span>
                    </Styled.Tickets>
                  ))}
                </Styled.TicketsContainer>
                {/* <ButtonPrimary
                action={() => {}}
                label="Comprar ingresso!"
                bgColor="#fff"
                color={theme.colors.orange.palete}
              /> */}
              </Styled.Container>
            )}
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Detail;
