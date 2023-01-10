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
import { TTicket } from "../../pages/buyPage/buy";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Modal from "../modal";

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

interface Props {
  tkt: TTicket;
}

const IngressoReady: React.FC<Props> = ({ tkt }) => {
  window.scrollTo(0, 0);

  const [fontColor, setFontColor] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const tktDate = new Date(tkt.ticketDate).toLocaleDateString();

  useEffect(() => {
    if (eventsProps[0].ticketColor === "#000000") {
      setFontColor(theme.colors.white.normal);
    }
    if (eventsProps[0].ticketColor === "#FFFFFF") {
      setFontColor(theme.colors.black.normal);
    }
  }, []);
  // TODO: Alterar link
  const value = `http://localhost:3000/adm/liberar-entrada?id=${tkt.id}`;

  function downloadURI(uri: string, name: string) {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
  }

  const downloadAsImage = () => {
    const element = document.getElementById(tkt.id ? tkt.id : "");
    if (element) {
      html2canvas(element).then(function (canvas) {
        const myImage = canvas.toDataURL();
        downloadURI(myImage, "ENTRADA_MEU_INGRESSO.png");
      });
    }
  };

  const sendWhatsAppLink = (number: string, link: string) => {
    const parsedNumber = number.replace(/\(\s*|\s*\)/g, "");
    window.open(
      `https://api.whatsapp.com/send?phone=${parsedNumber}&text=Obrigado por Usar o Meu Ingresso! Link para acessar o ingresso: ${encodeURIComponent(
        link
      )}`
    );
  };

  const send2Wpp = async () => {
    setLoading(true);
    const element = document.getElementById(tkt.id ? tkt.id : "");
    if (element) {
      html2canvas(element).then(function (canvas) {
        canvas.toBlob(function (blob) {
          if (blob) {
            const storage = getStorage();
            const storageRef = ref(storage, "user" + Math.random() * 100);
            const uploadTask = uploadBytesResumable(storageRef, blob);
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                console.error(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  setLoading(false);
                  sendWhatsAppLink(tkt.userNumber, downloadURL);
                  console.log(downloadURL);
                });
              }
            );
          }
        });
      });
    }
  };

  const handleClose = () => {
    setLoading(false);
  };

  return (
    <Styled.Container>
      {loading && (
        <Modal title={"Aguarde!"} handleClose={handleClose}>
          <Styled.H1modal>Aguarde o processamento do ingresso!</Styled.H1modal>
        </Modal>
      )}

      <Styled.BtnsContainer>
        <ButtonPrimary
          bgColor={theme.colors.green.normal}
          label={"Salvar ingresso"}
          action={() => {
            downloadAsImage();
          }}
        />
        <ButtonPrimary
          bgColor={theme.colors.green.normal}
          label={"enviar ingresso via WhatsApp"}
          action={() => {
            send2Wpp();
          }}
        />
      </Styled.BtnsContainer>

      <Styled.MainContainer
        id={tkt.id}
        style={{
          backgroundColor: tkt.ticketColor,
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
            {tkt.userName}, seja bem vindo(a) ao seu próximo evento!
          </Styled.Title>
        </Styled.SpanContainer>
        <Styled.QRContainer>
          <QRCode level="L" value={value}></QRCode>
        </Styled.QRContainer>
        <Styled.SpanContainer>
          <Styled.TicketType>{tkt.ticketName}</Styled.TicketType>
        </Styled.SpanContainer>
        <Styled.SpanContainer
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            height: "32px",
          }}
        >
          <Styled.EventInfo>{tkt.title}</Styled.EventInfo>
        </Styled.SpanContainer>
        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWhite style={{ color: fontColor }}>
            {tkt.isComplete
              ? "Válido todos os dias do evento!"
              : `Válido somente no dia ${tktDate}`}
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWarning>Atenção</Styled.EventInfoWarning>
        </Styled.SpanContainer>
        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWhite style={{ fontSize: "15px", color: fontColor }}>
            Ingresso único e intransferível. Consulte as condições de uso no
            local do evento.
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default IngressoReady;
