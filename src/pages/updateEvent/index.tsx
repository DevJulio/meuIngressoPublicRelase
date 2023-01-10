import React, { useEffect, useState } from "react";
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
import { message, TimePicker } from "antd";
import { Input as AntdInput } from "antd";
import { SketchPicker } from "react-color";

import dayjs from "dayjs";
import { TPrices } from "../../components/ticket/card";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import TokenValidate from "../../components/validateToken";

// import { useNavigate } from "react-router-dom";

const UpdateEvent: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [time, setTime] = useState<any>("");
  const [description, setDescription] = useState<string>("");
  const [ticketColor, setTicketColor] = useState<string>("#FB8500");
  const [pictureUrl, setpictureUrl] = useState<File>();
  const [adicionalPictureUrl, setAdicionalPictureUrl] = useState<File>();
  const [LocalPictureUrl, setLocalPictureUrl] = useState<string>();
  const [LocalAdicionalPictureUrl, setLocalAdicionalPictureUrl] =
    useState<string>();

  const [calendar, setCalendar] = useState(new Date());
  const [calendarFinish, setCalendarFinish] = useState(new Date());

  const [loading, setLoading] = useState<boolean>(false);
  const [prices, setPrices] = useState<TPrices[]>([
    {
      description: "",
      price: 0,
      title: "",
      isComplete: false,
      ticketDate: "",
    },
  ]);
  const eventIdLocal = localStorage.getItem("eventId");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/getEvent/${eventIdLocal}`);
        if (response.status === 200) {
          const event = response.data;

          setTitle(event.title);
          setPlace(event.place);
          setCategory(event.category);
          setDescription(event.description ? event.description : "");
          setCalendar(event.calendar);
          setCalendarFinish(event.calendarFinish);
          // setTime(dayjs(new Date(time).toISOString(), format));
          setTicketColor(event.ticketColor);
          setPrices(event.prices);
          setLocalPictureUrl(event.pictureUrl);
          setLocalAdicionalPictureUrl(event.adicionalPictureUrl);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { TextArea } = AntdInput;
  const options = ["Músical", "Educacional", "Esportivo", "Religioso"];
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
      setLoading(true);
    }
  };
  const handleCalendar = (date: Date) => {
    setCalendar(date);
  };

  const handleAddField = () => {
    setPrices([
      ...prices,
      {
        description: "",
        price: 0,
        title: "",
        isComplete: false,
        ticketDate: "",
      },
    ]);
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
        case "isComplete":
          values[index].isComplete = event.target.checked;
          setPrices(values);
          break;
        case "ticketDate":
          values[index].ticketDate = event;
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

  const handleCalendarFinish = (date: Date) => {
    setCalendarFinish(date);
  };

  const update = async () => {
    const day = new Date(calendar).getDate();
    const month = new Date(calendar).getMonth();
    const year = new Date(calendar).getFullYear();
    // pictureUrl: localPicUrl,
    // adicionalPictureUrl: LocaladicionalPictureUrl,
    const ticket = {
      title,
      place,
      prices,
      time: time.$d,
      category: category ? category : options[0],
      day,
      month,
      year,
      description,
      ticketColor,
      calendar,
      calendarFinish,
      updatedAt: new Date(),
    };
    try {
      const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
      api.defaults.headers["Authorization"] = `${tokenObj}`;
      const response = await api.put(`/updateEvent/${eventIdLocal}/`, ticket);
      if (response.status === 200) {
        message.success("Atualizado com sucesso com sucesso!");
        setTimeout(() => {
          navigate("/adm");
        }, 2000);
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

  return (
    <>
      {loading && (
        <Modal title={"Sucesso!"} handleClose={handleClose}>
          <Styled.H1modal>Concluída com sucesso!</Styled.H1modal>
        </Modal>
      )}

      <Header />
      <TokenValidate
        children={
          <>
            <BorderPage
              insideColor={theme.colors.orange.palete}
              outsideColor={theme.colors.orange.palete}
              children={
                <>
                  <Styled.Container>
                    <Styled.Atention>Atenção!</Styled.Atention>
                    <Styled.Atention2>Instruções de cadastro:</Styled.Atention2>
                    <Styled.ItemSpan>
                      Preencha todos os campos a baixo e escolha as melhores
                      fotos!
                    </Styled.ItemSpan>
                    <Styled.MainContainer>
                      <Styled.Title>Dados do evento:</Styled.Title>
                    </Styled.MainContainer>
                    <Styled.Aux>
                      <Styled.FormContainer>
                        <Input
                          Label={"Título do evento"}
                          value={title}
                          setValue={setTitle}
                        ></Input>
                      </Styled.FormContainer>
                      <Styled.FormContainer>
                        <Input
                          setValue={setPlace}
                          value={place}
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
                        <Styled.ItemSpan>
                          Selecione a data de inicio do evento.
                        </Styled.ItemSpan>
                        <Calendar
                          onChange={(date: Date) => {
                            handleCalendar(date);
                          }}
                          value={new Date(calendar)}
                          minDate={new Date()}
                          locale="PT-br"
                        />
                      </Styled.FormContainer>
                      <Styled.FormContainer>
                        <Styled.ItemSpan>
                          Selecione a data final do evento.
                        </Styled.ItemSpan>
                        <Calendar
                          onChange={(date: Date) => {
                            handleCalendarFinish(date);
                          }}
                          value={new Date(calendarFinish)}
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
                          value={time}
                          format={format}
                        />
                      </Styled.FormContainer>
                      <Styled.FormContainer>
                        <Styled.ItemSpan>
                          Selecione a cor do ingresso
                        </Styled.ItemSpan>
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
                          <Styled.FormContainer>
                            <Styled.ItemSpan>Banner Atual:</Styled.ItemSpan>
                            <Styled.Banner src={LocalPictureUrl} alt="" />
                          </Styled.FormContainer>
                        </Styled.Centralize>

                        <Styled.FormContainer>
                          <Styled.ItemSpan>Alterar banner:</Styled.ItemSpan>
                          <Styled.FileInput
                            type="file"
                            id="mainBanner"
                            onChange={(e) => {
                              changeInput(e, true);
                            }}
                          />
                        </Styled.FormContainer>
                      </Styled.FormContainer>

                      <Styled.FormContainer>
                        <Styled.ItemSpan>
                          Carregue o banner secundário (Maior e mais detalhes)
                        </Styled.ItemSpan>
                        <Styled.Centralize>
                          <Styled.FormContainer>
                            <Styled.ItemSpan>Banner Atual:</Styled.ItemSpan>
                            <Styled.Banner
                              src={LocalAdicionalPictureUrl}
                              alt=""
                            />
                          </Styled.FormContainer>
                        </Styled.Centralize>

                        <Styled.FormContainer>
                          <Styled.ItemSpan>Alterar banner:</Styled.ItemSpan>
                          <Styled.FileInput
                            type="file"
                            id="mainBanner"
                            onChange={(e) => {
                              changeInput(e, false);
                            }}
                          />
                        </Styled.FormContainer>
                      </Styled.FormContainer>

                      <Styled.FormContainer
                        style={{
                          placeSelf: "center",
                        }}
                      >
                        <Styled.ItemSpan style={{ fontSize: "20px" }}>
                          Detalhes dos ingresssos. Caso seja necessario,
                          adicione mais um ao clicar no botão "Adicionar
                          ingresso".
                        </Styled.ItemSpan>

                        {prices.map((field, index) => (
                          <Styled.TicketCard key={index}>
                            <Styled.Close
                              onClick={() => handleRemoveField(index)}
                            >
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
                              <Styled.ItemSpan>
                                Preço do ingresso.
                              </Styled.ItemSpan>
                              <Styled.Input
                                type="text"
                                value={field.price}
                                onChange={(e) => {
                                  handleFieldChange(index, e, "", true);
                                }}
                              />
                            </Styled.FormContainer>
                            <Styled.FormContainer>
                              <Styled.ItemSpan>
                                Selecione o dia da validade do ingresso.
                              </Styled.ItemSpan>
                              <Calendar
                                onChange={(date: Date) => {
                                  handleFieldChange(
                                    index,
                                    date,
                                    "ticketDate",
                                    false
                                  );
                                }}
                                value={
                                  field.ticketDate
                                    ? new Date(field.ticketDate)
                                    : new Date()
                                }
                                minDate={new Date()}
                                locale="PT-br"
                              />
                            </Styled.FormContainer>

                            <Styled.FormContainer>
                              <Styled.ItemSpan>
                                Esse ingresso da acesso a todos os dias do
                                evento?
                              </Styled.ItemSpan>
                              <Styled.InputCheckbox
                                checked={field.isComplete}
                                onChange={(event) => {
                                  handleFieldChange(index, event, "isComplete");
                                }}
                                type="checkbox"
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
                        label={"Finalizar alterações"}
                        action={() => {
                          update();
                          // addImg(pictureUrl ? pictureUrl : null);
                        }}
                      />
                    </Styled.Aux>
                  </Styled.Container>
                </>
              }
            />
          </>
        }
      />
      <Footer />
    </>
  );
};

export default UpdateEvent;
