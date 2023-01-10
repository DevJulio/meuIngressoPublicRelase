import React, { useContext, useEffect, useState } from "react";
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
import { Button, message } from "antd";
import { AuthContext } from "../../contexts/auth";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const Detail: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [qtdModal, setQtdModal] = useState<boolean>(false);
  const [ticketIndex, setTicketIndex] = useState<any>(0);
  const [event, setEvent] = useState<TCardProps>();
  const [count, setCount] = useState(1);

  const localAuth: any = useContext(AuthContext);
  const eventId = localStorage.getItem("eventId");

  const handleClose = () => {
    setModal(false);
  };
  const handleCloseQtd = () => {
    setQtdModal(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/getEvent/${eventId}`);
        if (response.status === 200) {
          const event = response.data;
          setEvent(event);
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
    event
      ? event.calendar
      : `${eventsProps[0].day}/${eventsProps[0].month}/${eventsProps[0].year}`
  );

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    if (count >= 1) {
      if (count === 1) {
        return;
      }
      let newCount = count - 1;
      if (newCount < 0) {
        newCount = 0;
      }
      setCount(newCount);
    }
  };

  const expireDay = () => {
    if (event) {
      if (event.prices[ticketIndex].isComplete) {
        return "Todos os dias";
      } else {
        return new Date(
          event.prices[ticketIndex].ticketDate
        ).toLocaleDateString();
      }
    } else {
      return "";
    }
  };
  const expireDayVar = expireDay();

  return (
    <>
      {modal && event && (
        <>
          <Modal title={"Atenção!"} handleClose={handleClose}>
            <Styled.TxtContainer>
              <Styled.ModalSpan>
                Você escolheu o ingresso: {event.prices[ticketIndex].title}.
              </Styled.ModalSpan>
              <Styled.ModalSpan
                style={{
                  paddingTop: "1vh",
                }}
              >
                Válido para: {<>{expireDayVar}</>}.
              </Styled.ModalSpan>

              <Styled.ModalSpan>
                {event.prices[ticketIndex].description}
              </Styled.ModalSpan>
              <Styled.ModalSpan>
                Deseja continuar para o pagamento?
              </Styled.ModalSpan>
            </Styled.TxtContainer>
            <Styled.BtnsContainer>
              <ButtonPrimary
                bgColor={theme.colors.green.normal}
                label={"Continuar"}
                action={() => {
                  handleClose();
                  localAuth.addCart({
                    ticket: event.prices[ticketIndex].title,
                    qtd: count,
                    finalPrice: count * event.prices[ticketIndex].price,
                    ticketDate: event.prices[ticketIndex].ticketDate,
                    isComplete: event.prices[ticketIndex].isComplete,
                    eventId: eventId,
                    ticketColor: event.ticketColor,
                    title: event.title,
                    ticketName: event.prices[ticketIndex].title,
                  });
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
      {qtdModal && event && (
        <>
          <Modal title={"Atenção!"} handleClose={handleCloseQtd}>
            <Styled.ModalSpan>
              Deseja adicionar mais ingressos do tipo{" "}
              {event ? event.prices[ticketIndex].title : ""} ao carrinho?
            </Styled.ModalSpan>
            <Styled.RowContainer>
              <Button size="large" onClick={decline} icon={<MinusOutlined />} />
              <Styled.Counter>{count}</Styled.Counter>
              <Button size="large" onClick={increase} icon={<PlusOutlined />} />
            </Styled.RowContainer>
            <Styled.ColContainer>
              <Styled.ModalSpan
                style={{
                  placeContent: "center",
                  paddingLeft: "0",
                }}
              >
                Valor aual:
              </Styled.ModalSpan>
              <Styled.Counter>
                R$: {count * event.prices[ticketIndex].price}
              </Styled.Counter>
            </Styled.ColContainer>
            <Styled.BtnsContainer>
              <ButtonPrimary
                bgColor={theme.colors.green.normal}
                label={"Continuar"}
                action={() => {
                  handleCloseQtd();
                  setModal(true);
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

      <Styled.MainContainer>
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
                          setCount(1);
                          setTicketIndex(id);
                          setQtdModal(true);
                        }}
                      >
                        <span> {item.title}</span>
                        <span>R$ {item.price}</span>
                      </Styled.Tickets>
                    ))}
                  </Styled.TicketsContainer>
                </Styled.Container>
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
      <Footer />
    </>
  );
};

export default Detail;
