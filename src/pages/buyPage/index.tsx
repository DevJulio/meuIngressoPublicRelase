import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header";
import { theme } from "../../theme/theme";
import * as Styled from "./styles";
import Footer from "../../components/footer";
import BorderPage from "../../components/borderPage";
import ButtonPrimary from "../../components/btn";
import Modal from "../../components/modal";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { message } from "antd";
import api from "../../services/api";
import { TTicket } from "./buy";

export type TFocus = "name" | "number" | "expiry" | "cvc";

const Buy: React.FC = () => {
  const [eventData, setEventData] = useState<any>();

  const { search } = useLocation();
  const searchParms = new URLSearchParams(search);
  const tktInfo = searchParms.get("tktInfo");

  const [ticketInfo] = useState(tktInfo ? JSON.parse(tktInfo) : {});

  useEffect(() => {
    const searchParms = new URLSearchParams(search);
    if (!searchParms) {
      navigate("/detalhes");
    }
    const tktInfo = searchParms.get("tktInfo");
    let parsedInfo: any = {};
    if (tktInfo) {
      parsedInfo = JSON.parse(tktInfo);
    }
    const fetchData = async () => {
      try {
        const response = await api.get(`/getEvent/${parsedInfo.eventId}`);
        if (response.status === 200) {
          const event = response.data;
          setEventData(event);
        }
      } catch (error: any) {
        console.log(error);
        message.error("Verifique os dados e tente novamente!");
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const localAuth: any = useContext(AuthContext);

  const defaultTicket: TTicket = {
    userName: "",
    userNumber: "",
    cpf: "",
    buyId: "",
    isUsed: false,
    ticketDate: ticketInfo.tktDate,
    isComplete: ticketInfo.tktComplete,
    eventId: ticketInfo.eventId,
    ticketName: ticketInfo.tktName,
    ticketColor: eventData ? eventData.ticketColor : "",
    title: eventData ? eventData.title : "",
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);
  const [ticket, setTicket] = useState<TTicket[]>([defaultTicket]);

  const uniqueCode =
    Math.random().toString(36).substr(2, 9) + Date.now().toString(36);

  const navigate = useNavigate();

  const handleFieldChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement> | any,
    key: string
  ) => {
    const values = [...ticket];
    switch (key) {
      case "userName":
        values[index].userName = event.target.value;
        setTicket(values);
        break;
      case "cpf":
        values[index].cpf = event.target.value;
        setTicket(values);
        break;
      case "userNumber":
        values[index].userNumber = event.target.value;
        setTicket(values);
        break;
      default:
        break;
    }
  };

  const handleClose1 = () => {
    setLoading(false);
  };
  const handleClose2 = () => {
    setLoading2(false);
  };
  const handleClose3 = () => {
    setLoading3(false);
  };
  const formatedData =
    new Date().getHours().toString().padStart(2, "0") +
    ":" +
    new Date().getMinutes().toString().padStart(2, "0");

  const buy = async () => {
    const payload = {
      buyId: uniqueCode,
      createdAt: new Date(),
      eventId: ticketInfo.eventId,
      horaCompra: formatedData,
      isValid: true,
      ticket,
      tipoIngresso: ticketInfo.tktName,
      valorPago: ticketInfo.tktPrice / 100,
    };
    try {
      const response = await api.post("/addPurchase", payload);
      if (response.status === 200) {
        sessionStorage.setItem("@AuthFirebase:uniqueCode", uniqueCode);
        localStorage.setItem("@AuthFirebase:uniqueCode", uniqueCode);
        await Promise.all(
          ticket.map(async (ingresso) => {
            const ticketPayload = {
              ...ingresso,
              isValid: true,
              buyId: uniqueCode,
            };
            try {
              const response = await api.post("/addTicket", ticketPayload);
              if (response.status === 200) {
                return true;
              }
            } catch (error: any) {
              message.error("Verifique os dados e tente novamente!");
              return false;
            }
          })
        ).then(async () => {
          try {
            localStorage.setItem("@AuthFirebase:uniqueCodeStatus", "true");
            navigate("/ticket");
          } catch (error: any) {
            console.log(error);
            message.error("Verifique os dados e tente novamente!");
            return false;
          }
        });
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

  const checkTicketData = () => {
    const currentTkt = ticket[ticket.length - 1];
    if (currentTkt.cpf && currentTkt.userName && currentTkt.userNumber) {
      if (currentTkt.ticketColor === "") {
        ticket[ticket.length - 1].ticketColor = eventData.ticketColor;
        currentTkt.ticketColor = eventData.ticketColor;
      }
      if (currentTkt.title === "") {
        ticket[ticket.length - 1].title = eventData.title;
        currentTkt.title = eventData.title;
      }
      return true;
    } else {
      return false;
    }
  };

  const handleAddField = () => {
    if (checkTicketData()) {
      if (ticket.length < ticketInfo.tktQty) {
        setTicket([...ticket, defaultTicket]);
      } else {
        // const compradoLbl = document.getElementById("compradoLbl");
        const cardContainer = document.getElementById("cardContainer");

        buy();
        if (cardContainer) {
          cardContainer.style.display = "flex";
        }
      }
    }
  };
  const handleBlockDiv = (index: string) => {
    if (checkTicketData()) {
      const myDiv = document.getElementById(index);
      if (myDiv) {
        myDiv.style.display = "none";
      }
    } else {
      message.error("Verifique os dados e tente novamente!");
    }
  };

  return (
    <>
      {loading && (
        <Modal title={"Aguarde!"} handleClose={handleClose1}>
          <Styled.H1modal2>Aguarde o processamento da compra!</Styled.H1modal2>
        </Modal>
      )}
      {loading2 && (
        <Modal title={"Sucesso!"} handleClose={handleClose2}>
          <Styled.H1modal>Concluída com sucesso!</Styled.H1modal>
        </Modal>
      )}
      {loading3 && (
        <Modal title={"Erro!"} handleClose={handleClose3}>
          <Styled.H1modal>
            Vefique os seus dados do cartão e tente novamente!
          </Styled.H1modal>
        </Modal>
      )}

      <Header />
      <BorderPage
        insideColor={theme.colors.orange.palete}
        outsideColor={theme.colors.orange.palete}
        children={
          <>
            <Styled.Container>
              <Styled.MainContainer id="compradoLbl">
                <Styled.Title>Informações do comprador</Styled.Title>
                {ticket.length >= 1 && (
                  <>
                    <Styled.ItemSpan style={{ marginLeft: "5vw" }}>
                      Informe os dados individuais para cada ingresso.
                    </Styled.ItemSpan>
                  </>
                )}
              </Styled.MainContainer>
              {ticket.map((value, index) => (
                <>
                  <Styled.Aux id={index.toString()}>
                    <Styled.ItemSpan>
                      {index === 0 ? (
                        <>Informe os dados do titular do compra: </>
                      ) : (
                        <>Cadastro para o ingresso: {index + 1}</>
                      )}
                    </Styled.ItemSpan>
                    <Styled.FormContainer>
                      <Styled.ItemSpan>Nome</Styled.ItemSpan>
                      <Styled.Input
                        type="text"
                        value={value.userName}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleFieldChange(index, event, "userName")}
                      />
                    </Styled.FormContainer>
                    <Styled.FormContainer>
                      <Styled.ItemSpan>Número de contato: </Styled.ItemSpan>
                      <Styled.InputMaskHtml
                        mask={"(99) 9 9999 9999"}
                        value={value.userNumber}
                        type="text"
                        autoComplete="off"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleFieldChange(index, event, "userNumber")}
                      />
                    </Styled.FormContainer>
                    <Styled.FormContainer>
                      <Styled.ItemSpan>CPF: </Styled.ItemSpan>
                      <Styled.InputMaskHtml
                        mask={"999.999.999-99"}
                        value={value.cpf}
                        type="text"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleFieldChange(index, event, "cpf")}
                      />
                    </Styled.FormContainer>
                    <Styled.Aux
                      style={{
                        marginTop: "3vh",
                        marginBottom: "3vh",
                      }}
                    >
                      <ButtonPrimary
                        label={"continuar"}
                        action={handleAddField}
                        actionSec={() => {
                          handleBlockDiv(index.toString());
                        }}
                        bgColor={theme.colors.white.normal}
                        color={theme.colors.orange.palete}
                      />
                    </Styled.Aux>
                  </Styled.Aux>
                </>
              ))}

              <Styled.CardDiv id="cardContainer">
                <Styled.MainContainer>
                  <Styled.Title>Carregando...</Styled.Title>
                </Styled.MainContainer>
                {/* <Styled.MainContainer>
                  <Styled.Title>Dados de cartão de crédito</Styled.Title>
                </Styled.MainContainer>
                <Styled.FormContainer>
                  <Styled.PriceContainer>
                    <Styled.Price>Valor: R$ </Styled.Price>
                    <Styled.Price>{localAuth.cart.finalPrice}</Styled.Price>
                  </Styled.PriceContainer>
                </Styled.FormContainer>
                <Styled.BtnContainerAux>
                  <ButtonPrimary
                    bgColor={theme.colors.green.normal}
                    label={"Seguir para pagamento"}
                    action={() => {
                      buy();
                    }}
                  />
                </Styled.BtnContainerAux> */}
              </Styled.CardDiv>
            </Styled.Container>
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Buy;
