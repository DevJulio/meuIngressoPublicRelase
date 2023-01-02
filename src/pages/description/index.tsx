import React, { useState } from "react";
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

const Detail: React.FC = () => {
  const weekDay = formatarData(
    `${eventsProps[0].day}/${eventsProps[0].month}/${eventsProps[0].year}`
  );
  const [modal, setModal] = useState<boolean>(false);
  const [ticketType, setTicketType] = useState<string>("");

  const handleClose = () => {
    setModal(false);
  };

  const navigate = useNavigate();

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
            <Styled.Container>
              <Styled.Banner src={eventsProps[0].adicionalPictureUrl} />
              <Styled.ContainerData>
                <span>{eventsProps[0].title}</span>
                <Styled.ContainerRow>
                  <span
                    style={{
                      fontFamily: theme.fonts.primary,
                      fontSize: theme.fontSize.md2,
                    }}
                  >
                    {eventsProps[0].place}
                  </span>
                </Styled.ContainerRow>
                <Styled.PriceSpanAux>A partir de:</Styled.PriceSpanAux>
                <Styled.PriceSpan>R${eventsProps[0].price}</Styled.PriceSpan>
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
                      {eventsProps[0].day}
                    </span>
                    <span
                      style={{
                        fontFamily: theme.fonts.primary,
                      }}
                    >
                      {eventsProps[0].month}
                    </span>
                  </Styled.Spacer>
                </Styled.TitleAndLogo>

                <Styled.Spacer
                  style={{
                    marginLeft: "15vw",
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
                    {eventsProps[0].time}
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
                  {eventsProps[0].description}
                </Styled.SpanDescription>
              </Styled.Description>
              <Styled.SpanTitle>Ingressos disponíveis:</Styled.SpanTitle>

              <Styled.TicketsContainer>
                {eventsProps[0].prices.map((item: any, id) => (
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
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Detail;
