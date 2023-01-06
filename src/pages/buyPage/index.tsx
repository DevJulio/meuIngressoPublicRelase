import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header";
import { theme } from "../../theme/theme";
import * as Styled from "./styles";
import Footer from "../../components/footer";
import BorderPage from "../../components/borderPage";
import ButtonPrimary from "../../components/btn";
import Modal from "../../components/modal";
import InputMasked from "../../components/maskedIpunt";
import Input from "../../components/input";
import Select from "../../components/select";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export type TFocus = "name" | "number" | "expiry" | "cvc";
type TTicket = {
  userName: string;
  userNumber: string;
  cpf: string;
};

const Buy: React.FC = () => {
  const localAuth: any = useContext(AuthContext);
  const defaultTicket: TTicket = {
    userName: "",
    userNumber: "",
    cpf: "",
  };
  const [number, setNumber] = useState<string | number>("");
  const [name, setName] = useState<string>("");
  const [tipo, setTipo] = useState("Crédito");
  const [expiry, setExpiry] = useState<string | number>("");
  const [cvc, setCvc] = useState<string | number>("");
  const [focus, setfocus] = useState<TFocus>("name");
  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);
  const [ticket, setTicket] = useState<TTicket[]>([defaultTicket]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localAuth.cart.qtd) {
      navigate("/detalhes");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        values[index].userNumber = event.target.checked;
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

  // const checkCcAllData = () => {
  //   let nameNew = false;
  //   let cvcNew = false;
  //   let expiryNew = false;
  //   let numberNew = false;

  //   if (name.length > 5) {
  //     nameNew = true;
  //   }
  //   if (cvc.toString().length >= 3 && cvc.toString().indexOf("_") === -1) {
  //     cvcNew = true;
  //   }
  //   if (
  //     expiry.toString().length === 7 &&
  //     expiry.toString().indexOf("_") === -1
  //   ) {
  //     expiryNew = true;
  //   }
  //   if (
  //     number.toString().length === 19 &&
  //     number.toString().indexOf("_") === -1
  //   ) {
  //     numberNew = true;
  //   }

  //   if (nameNew && cvcNew && expiryNew && numberNew) {
  //     return true;
  //   }

  //   return false;
  // };
  const buy = async () => {
    // if (checkCcAllData()) {
    //   setLoading(true);
    // }
    console.log(ticket);
    // navigate("/ticket");
  };

  const handleAddField = () => {
    if (ticket.length < localAuth.cart.qtd) {
      setTicket([...ticket, defaultTicket]);
    } else {
      const myDiv = document.getElementById("compradoLbl");
      if (myDiv) {
        myDiv.style.display = "none";
      }
    }
  };
  const handleBlockDiv = (index: string) => {
    const myDiv = document.getElementById(index);
    if (myDiv) {
      myDiv.style.display = "none";
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
                <Styled.Title>Dados do comprador</Styled.Title>
              </Styled.MainContainer>
              {ticket.map((value, index) => (
                <>
                  <Styled.Aux id={index.toString()}>
                    <Styled.ItemSpan>
                      {index === 0 ? (
                        <>Informe os dados do titular do compra: </>
                      ) : (
                        <>Informe os dados para o ingresso {index + 1}</>
                      )}
                    </Styled.ItemSpan>
                    <Styled.FormContainer
                      onClick={() => {
                        setfocus("name");
                      }}
                    >
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
                      <Styled.ItemSpan>CPF: </Styled.ItemSpan>
                      <Styled.InputMaskHtml
                        mask={"999.999.999-99"}
                        value={value.cpf}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleFieldChange(index, event, "cpf")}
                      />
                    </Styled.FormContainer>
                    <Styled.FormContainer
                      onClick={() => {
                        setfocus("name");
                      }}
                    >
                      <Styled.ItemSpan>Número de contato: </Styled.ItemSpan>
                      <Styled.InputMaskHtml
                        mask={"(99) 9 9999 9999"}
                        value={value.userNumber}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleFieldChange(index, event, "userNumber")}
                      />
                    </Styled.FormContainer>
                    <Styled.Aux
                      style={{
                        marginTop: "3vh",
                        marginBottom: "3vh",
                      }}
                    >
                      <ButtonPrimary
                        label={"Informar dados do ingresso"}
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
              <Styled.MainContainer>
                <Styled.Title>Dados de cartão de crédito</Styled.Title>
              </Styled.MainContainer>

              <Styled.Aux>
                <Styled.FormContainer
                  onClick={() => {
                    setfocus("name");
                  }}
                >
                  <Input
                    Label={"Nome (assim como no cartão de crédito)"}
                    setValue={setName}
                  ></Input>
                </Styled.FormContainer>

                <Styled.FormContainer
                  onClick={() => {
                    setfocus("cvc");
                  }}
                >
                  <InputMasked
                    setValue={setCvc}
                    Label={"CVV"}
                    mask={"999"}
                  ></InputMasked>
                </Styled.FormContainer>
              </Styled.Aux>
              <Styled.Aux>
                <Styled.FormContainer
                  onClick={() => {
                    setfocus("expiry");
                  }}
                >
                  <InputMasked
                    Label={"Data de validade"}
                    placeholder="MM/AAAA"
                    mask={"99/9999"}
                    setValue={setExpiry}
                  ></InputMasked>
                </Styled.FormContainer>

                <Styled.FormContainer
                  onClick={() => {
                    setfocus("number");
                  }}
                >
                  <InputMasked
                    Label={"Número (assim como no cartão de crédito)"}
                    mask={"9999 9999 9999 9999"}
                    setValue={setNumber}
                  ></InputMasked>
                </Styled.FormContainer>
              </Styled.Aux>

              <Styled.Aux>
                <Styled.FormContainer>
                  <Select
                    label={"Tipo do cartão"}
                    setValue={setTipo}
                    options={["Crédito", "Débito"]}
                  ></Select>
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Styled.PriceContainer>
                    <Styled.Price>Valor: R$ </Styled.Price>
                    <Styled.Price>{localAuth.cart.finalPrice}</Styled.Price>
                  </Styled.PriceContainer>
                </Styled.FormContainer>
              </Styled.Aux>
              <Styled.Aux>
                <div style={{ paddingBottom: "2vh" }}>
                  <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    preview={true}
                    focused={focus}
                  />
                </div>
              </Styled.Aux>
              <Styled.Aux>
                <ButtonPrimary
                  bgColor={theme.colors.green.normal}
                  label={"Finalizar compra"}
                  action={buy}
                />
              </Styled.Aux>
            </Styled.Container>
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Buy;