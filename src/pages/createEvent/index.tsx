import React, { useState } from "react";
import Header from "../../components/header";
import { theme } from "../../theme/theme";
import * as Styled from "./styles";
import Footer from "../../components/footer";
import BorderPage from "../../components/borderPage";
import ButtonPrimary from "../../components/btn";
import Modal from "../../components/modal";
import Input from "../../components/input";
import Select from "../../components/select";
import "react-credit-cards/es/styles-compiled.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TimePicker } from "antd";
import { Input as AntdInput } from "antd";
import { SketchPicker } from "react-color";

import dayjs from "dayjs";
import { TPrices } from "../../components/ticket/card";

// import { useNavigate } from "react-router-dom";

const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [time, setTime] = useState<any>("");
  const [description, setDescription] = useState<string>("");
  const [ticketColor, setTicketColor] = useState<string>("#FB8500");
  const [pictureUrl, setpictureUrl] = useState<File>();
  const [adicionalPictureUrl, setAdicionalPictureUrl] = useState<File>();
  const [calendar, setCalendar] = useState(new Date());

  const [loading, setLoading] = useState<boolean>(false);
  const [prices, setPrices] = useState<TPrices[]>([
    {
      description: "",
      price: 0,
      title: "",
    },
  ]);

  const { TextArea } = AntdInput;
  const options = ["Músical", "Educacional", "Esportivo", "Religioso"];
  // const navigate = useNavigate();
  const format = "HH:mm";

  const handleClose = () => {
    setLoading(false);
  };
  const checkPrices = () => {
    prices.forEach((element) => {
      if (!element.description || !element.title || !element.price) {
        return false;
      }
    });
    return true;
  };

  const cadastrar = async () => {
    if (
      title &&
      place &&
      time &&
      description &&
      ticketColor &&
      pictureUrl &&
      checkPrices() &&
      adicionalPictureUrl
    ) {
      const ticket = {
        title,
        place,
        prices,
        time,
        category: category ? category : options[0],
        description,
        ticketColor,
        pictureUrl,
        adicionalPictureUrl,
      };
      console.log(ticket);
      setLoading(true);
    }
  };
  const handleCalendar = (date: Date) => {
    setCalendar(date);
  };
  console.log(time.$d);

  const handleAddField = () => {
    setPrices([...prices, { description: "", price: 0, title: "" }]);
  };
  const handleFieldChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement> | any,
    key: string,
    number?: boolean
  ) => {
    const values = [...prices];

    if (!number) {
      switch (key) {
        case "title":
          values[index].title = event.target.value;
          setPrices(values);
          break;
        case "description":
          values[index].description = event.target.value;
          setPrices(values);
          break;
        default:
          break;
      }
    } else {
      const aux = Math.max(0, Math.min(99999, Number(event.target.value)));
      values[index].price = aux;
      setPrices(values);
    }
  };

  const handleRemoveField = (index: number) => {
    if (prices.length > 1) {
      const values = [...prices];
      values.splice(index, 1);
      setPrices(values);
    }
  };
  const changeInput = (e: any, isMain: boolean) => {
    const localFile = e.target.files[0];
    if (isMain) {
      setpictureUrl(localFile);
    } else {
      setAdicionalPictureUrl(localFile);
    }
  };
  return (
    <>
      {loading && (
        <Modal title={"Sucesso!"} handleClose={handleClose}>
          <Styled.H1modal>Concluída com sucesso!</Styled.H1modal>
        </Modal>
      )}

      <Header />
      <BorderPage
        insideColor={theme.colors.orange.palete}
        outsideColor={theme.colors.orange.palete}
        children={
          <>
            <Styled.Container>
              <Styled.Atention>Atenção!</Styled.Atention>
              <Styled.Atention2>Instruções de cadastro:</Styled.Atention2>
              <Styled.ItemSpan>
                Preencha todos os campos a baixo e escolha as melhores fotos!
              </Styled.ItemSpan>
              <Styled.MainContainer>
                <Styled.Title>Dados do evento:</Styled.Title>
              </Styled.MainContainer>
              <Styled.Aux>
                <Styled.FormContainer>
                  <Input Label={"Título do evento"} setValue={setTitle}></Input>
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Input
                    setValue={setPlace}
                    Label={"Endereço do evento"}
                  ></Input>
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Select
                    label={"Categoria do evento"}
                    setValue={setCategory}
                    options={options}
                  ></Select>
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Styled.ItemSpan>Descrição do evento.</Styled.ItemSpan>
                  <TextArea
                    rows={4}
                    value={description}
                    placeholder="Descrição e vantagens"
                    onChange={(event: any) =>
                      setDescription(event.target.value)
                    }
                  />
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Styled.ItemSpan>Selecione a data do evento.</Styled.ItemSpan>
                  <Calendar
                    onChange={(date: Date) => {
                      handleCalendar(date);
                    }}
                    value={calendar}
                    minDate={new Date()}
                    locale="PT-br"
                  />
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Styled.ItemSpan>
                    Selecione o horário do evento.
                  </Styled.ItemSpan>

                  <TimePicker
                    onChange={(val: any) => {
                      setTime(val);
                    }}
                    value={time as any}
                    defaultValue={dayjs("12:08", format)}
                    format={format}
                  />
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Styled.ItemSpan>Selecione a cor do ingresso</Styled.ItemSpan>
                  <Styled.Centralize>
                    <SketchPicker
                      color={ticketColor}
                      width={"300px"}
                      onChangeComplete={(color) => {
                        setTicketColor(color.hex);
                      }}
                    />
                  </Styled.Centralize>
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Styled.ItemSpan>
                    Carregue o banner principal do evento (Aparecerá na
                    listagem)
                  </Styled.ItemSpan>
                  <Styled.Centralize>
                    <Styled.FileInput
                      type="file"
                      id="mainBanner"
                      onChange={(e) => {
                        changeInput(e, true);
                      }}
                    />
                  </Styled.Centralize>
                </Styled.FormContainer>
                <Styled.FormContainer>
                  <Styled.ItemSpan>
                    Carregue o banner secundário (Maior e mais detalhes)
                  </Styled.ItemSpan>
                  <Styled.Centralize>
                    <Styled.FileInput
                      type="file"
                      id="mainBanner"
                      onChange={(e) => {
                        changeInput(e, false);
                      }}
                    />
                  </Styled.Centralize>
                </Styled.FormContainer>
                <Styled.FormContainer
                  style={{
                    placeSelf: "center",
                  }}
                >
                  <Styled.ItemSpan style={{ fontSize: "20px" }}>
                    Detalhes dos ingresssos. Caso seja necessario, adicione mais
                    um ao clicar no botão "Adicionar ingresso".
                  </Styled.ItemSpan>

                  {prices.map((field, index) => (
                    <Styled.TicketCard key={index}>
                      <Styled.Close onClick={() => handleRemoveField(index)}>
                        X
                      </Styled.Close>
                      <Styled.FormContainer>
                        <Styled.ItemSpan>
                          Título do ingresso. (Ex: Pista)
                        </Styled.ItemSpan>
                        <Styled.Input
                          type="text"
                          value={field.title}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => handleFieldChange(index, event, "title")}
                        />
                      </Styled.FormContainer>
                      <Styled.FormContainer>
                        <Styled.ItemSpan>
                          Descrição do ingresso.
                        </Styled.ItemSpan>
                        <TextArea
                          rows={4}
                          value={field.description}
                          placeholder="Descrição e vantagens"
                          onChange={(event: any) =>
                            handleFieldChange(index, event, "description")
                          }
                        />
                      </Styled.FormContainer>

                      <Styled.FormContainer>
                        <Styled.ItemSpan>Preço do ingresso.</Styled.ItemSpan>
                        <Styled.Input
                          type="text"
                          value={field.price}
                          onChange={(e) => {
                            handleFieldChange(index, e, "", true);
                          }}
                        />
                      </Styled.FormContainer>
                    </Styled.TicketCard>
                  ))}
                  <Styled.Aux
                    style={{
                      marginTop: "3vh",
                      marginBottom: "3vh",
                    }}
                  >
                    <ButtonPrimary
                      label={"Adicionar ingresso"}
                      action={handleAddField}
                      bgColor={theme.colors.white.normal}
                      color={theme.colors.orange.palete}
                    />
                  </Styled.Aux>
                </Styled.FormContainer>
              </Styled.Aux>

              <Styled.Aux>
                <ButtonPrimary
                  bgColor={theme.colors.green.normal}
                  label={"Finalizar cadastro"}
                  action={cadastrar}
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

export default CreateEvent;
