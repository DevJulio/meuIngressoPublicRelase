import React, { useState } from "react";
import Header from "../../components/header";
import { theme } from "../../theme/theme";
import * as Styled from "./styles";
import Footer from "../../components/footer";
import BorderPage from "../../components/borderPage";
import ButtonPrimary from "../../components/btn";
import Modal from "../../components/modal";
import eventsProps from "../home/eventProps";
import InputMasked from "../../components/maskedIpunt";
import Input from "../../components/input";
import Select from "../../components/select";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";

export type TFocus = "name" | "number" | "expiry" | "cvc";

const Buy: React.FC = () => {
  const [number, setNumber] = useState<string | number>("");
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userNumber, setUserNumber] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [Tipo, setTipo] = useState("Crédito");
  const [expiry, setExpiry] = useState<string | number>("");
  const [cvc, setCvc] = useState<string | number>("");
  const [focus, setfocus] = useState<TFocus>("name");
  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);

  const handleClose1 = () => {
    setLoading(false);
  };
  const handleClose2 = () => {
    setLoading2(false);
  };
  const handleClose3 = () => {
    setLoading3(false);
  };
  const navigate = useNavigate();

  const checkCcAllData = () => {
    let nameNew = false;
    let cvcNew = false;
    let expiryNew = false;
    let numberNew = false;

    if (name.length > 5) {
      nameNew = true;
    }
    if (cvc.toString().length >= 3 && cvc.toString().indexOf("_") === -1) {
      cvcNew = true;
    }
    if (
      expiry.toString().length === 7 &&
      expiry.toString().indexOf("_") === -1
    ) {
      expiryNew = true;
    }
    if (
      number.toString().length === 19 &&
      number.toString().indexOf("_") === -1
    ) {
      numberNew = true;
    }

    if (nameNew && cvcNew && expiryNew && numberNew) {
      return true;
    }

    return false;
  };
  const buy = async () => {
    // if (checkCcAllData()) {
    //   setLoading(true);
    // }
    navigate("/ticket");
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
              <Styled.MainContainer>
                <Styled.Title>Dados do comprador</Styled.Title>
              </Styled.MainContainer>
              <Styled.Aux>
                <Styled.FormContainer
                  onClick={() => {
                    setfocus("name");
                  }}
                >
                  <Input Label={"Nome"} setValue={setUserName}></Input>
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <InputMasked
                    setValue={setCpf}
                    Label={"CPF do comprador"}
                    mask={"999.999.999-99"}
                  ></InputMasked>
                </Styled.FormContainer>
                <Styled.FormContainer
                  onClick={() => {
                    setfocus("name");
                  }}
                >
                  <InputMasked
                    setValue={setUserNumber}
                    Label={"Número de contato"}
                    mask={"(99) 9 9999 9999"}
                  ></InputMasked>
                </Styled.FormContainer>
              </Styled.Aux>

              <Styled.MainContainer>
                <Styled.Title>Dados de cartão de crédito</Styled.Title>
                {/* <Styled.Icons src={cc} /> */}
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
                    <Styled.Price>
                      {eventsProps[0].prices[0].price}
                    </Styled.Price>
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
