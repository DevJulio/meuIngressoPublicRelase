/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
// import api from "../../../services/api";
import QRCode from "react-qr-code";
// import logo from "../../../assets/img/logo.png";
import html2canvas from "html2canvas";
import * as Styled from "./styles";
import ButtonPrimary from "../btn";
import { theme } from "../../theme/theme";
import eventsProps from "../../pages/home/eventProps";

export type TPassport = {
  day: string;
  brand: string;
  buyerNamer: string;
  date: string;
  last_digits: string;
  online: boolean;
  created_at: string;
  img: string;
  type: string;
  reference_id: string;
  id: string;
  holder: string;
};

const IngressoReady: React.FC = () => {
  const [passaporteData, setPassaporteData] = useState<TPassport>();
  const [fontColor, setFontColor] = useState<string>();

  const docId = localStorage.getItem("AMOG_TICKET_ID");

  useEffect(() => {
    if (eventsProps[0].ticketColor === "#000000") {
      setFontColor(theme.colors.white.normal);
    }
    if (eventsProps[0].ticketColor === "#FFFFFF") {
      setFontColor(theme.colors.black.normal);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      // const res = await api.get<TPassport>(`/getTicketData/${docId}`);
      // res && setPassaporteData(res.data);
    };
    fetchData();
  }, [docId]);

  const value = `https://www.amog.com.br/compras/burn/?id=${docId}`;

  function downloadURI(uri: string, name: string) {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
  }

  function DownloadAsImage() {
    const element = document.getElementById("target");
    if (element) {
      html2canvas(element).then(function (canvas) {
        const myImage = canvas.toDataURL();
        downloadURI(myImage, "ENTRADA_MEU_INGRESSO.png");
      });
    }
  }

  return (
    <Styled.Container>
      <Styled.BtnsContainer>
        <ButtonPrimary
          bgColor={theme.colors.green.normal}
          label={"Salvar ingresso"}
          action={() => {
            DownloadAsImage();
          }}
        />
      </Styled.BtnsContainer>

      <Styled.MainContainer
        id="target"
        style={{
          backgroundColor: eventsProps[0].ticketColor,
        }}
      >
        <Styled.IMGContainer>
          <Styled.MainSpanContainer>
            <Styled.NameSpan>Meu</Styled.NameSpan>
            <Styled.NameSpanAux>Ingresso</Styled.NameSpanAux>
          </Styled.MainSpanContainer>
        </Styled.IMGContainer>
        <Styled.SpanContainer>
          <Styled.Title>
            {passaporteData?.buyerNamer}, seja bem vindo(a) ao seu próximo
            evento!
          </Styled.Title>
        </Styled.SpanContainer>
        <Styled.QRContainer>
          <QRCode level="L" value={value}></QRCode>
        </Styled.QRContainer>
        <Styled.SpanContainer>
          <Styled.TicketType>
            {eventsProps[0].prices[0].title}
          </Styled.TicketType>
        </Styled.SpanContainer>
        <Styled.SpanContainer
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            height: "32px",
          }}
        >
          <Styled.EventInfo>{eventsProps[0].title}</Styled.EventInfo>
        </Styled.SpanContainer>
        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWhite style={{ color: fontColor }}>
            Válido somente no dia {passaporteData?.day}.
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWarning>Atenção</Styled.EventInfoWarning>
        </Styled.SpanContainer>
        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWhite style={{ fontSize: "15px", color: fontColor }}>
            Ingresso válido para uso único. Consulte as condições de uso no
            local do evento.
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default IngressoReady;
