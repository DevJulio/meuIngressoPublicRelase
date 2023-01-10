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
import { message, TimePicker } from "antd";
import { Input as AntdInput } from "antd";
import { SketchPicker } from "react-color";
import dayjs from "dayjs";
import { TPrices } from "../../components/ticket/card";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import TokenValidate from "../../components/validateToken";

const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [time, setTime] = useState<any>();
  const [description, setDescription] = useState<string>("");
  const [ticketColor, setTicketColor] = useState<string>("#FB8500");
  const [pictureUrl, setpictureUrl] = useState<File>();
  const [adicionalPictureUrl, setAdicionalPictureUrl] = useState<File>();
  const [calendar, setCalendar] = useState(new Date());
  const [calendarFinish, setCalendarFinish] = useState(new Date());
  const [finish, setFinish] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  const [prices, setPrices] = useState<TPrices[]>([
    {
      description: "",
      price: 0,
      title: "",
      isComplete: false,
      ticketDate: "",
    },
  ]);

  const { TextArea } = AntdInput;
  const options = ["Músical", "Educacional", "Esportivo", "Religioso"];
  const navigate = useNavigate();
  const format = "HH:mm";

  const handleClose = () => {
    setFinish(false);
    navigate("/adm/lista-de-eventos");
  };

  const handleCloseLoading = () => {
    setUploading(false);
  };
  const checkPrices = () => {
    let ret = true;
    prices.forEach((element) => {
      if (!element.description || !element.title || !element.price) {
        ret = false;
      }
    });
    return ret;
  };
  let imageCounter = 0;
  let localPicUrl = "";
  let LocaladicionalPictureUrl = "";

  const cadastrar = async () => {
    const day = calendar.getDate();
    const month = calendar.getMonth();
    const year = calendar.getFullYear();
    const userId: any = sessionStorage.getItem("@AuthFirebase:user");
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
      pictureUrl: localPicUrl,
      status: "active",
      calendar,
      calendarFinish,
      adicionalPictureUrl: LocaladicionalPictureUrl,
      userId: JSON.parse(userId).uid,
      createdAt: new Date(),
    };
    try {
      const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
      api.defaults.headers["Authorization"] = `${tokenObj}`;
      const response = await api.post("/addEvent", ticket);
      if (response.status === 200) {
        setUploading(false);
        setFinish(true);
      }
    } catch (error: any) {
      if (error.response.status === 401) {
        setUploading(false);
        message.error("Sessão expirada, faça login novamente!");
        setTimeout(() => {
          navigate("/adm/login");
        }, 4000);
      }
      message.error("Verifique os dados e tente novamente!");
    }
  };
  const handleCalendar = (date: Date) => {
    setCalendar(date);
  };
  const handleCalendarFinish = (date: Date) => {
    setCalendarFinish(date);
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

  const addImg = async (file: File | null) => {
    const validatedFields = validateFields();
    const prices = checkPrices();
    if (file && prices && !validatedFields.length) {
      setUploading(true);
      const storage = getStorage();
      const storageRef = ref(storage, "user" + Math.random() * 100);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
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
            if (imageCounter === 0) {
              localPicUrl = downloadURL;
              if (adicionalPictureUrl) {
                imageCounter++;
                addImg(adicionalPictureUrl);
              }
            }
            if (imageCounter === 1) {
              LocaladicionalPictureUrl = downloadURL;
              imageCounter++;
            }
            if (imageCounter === 2) {
              imageCounter++;
              cadastrar();
            }
          });
        }
      );
    } else {
      validatedFields.forEach((field) => {
        message.error(field);
      });
      if (!prices) {
        message.error("Verifique os dados dos ingressos e tente novamente!");
      }
    }
  };

  const validateFields = () => {
    const userId: any = sessionStorage.getItem("@AuthFirebase:user");
    const validateFields = [];
    if (!title) {
      validateFields.push("Informe um título antes de prosseguir!");
    }
    if (!place) {
      validateFields.push("Informe um local antes de prosseguir!");
    }
    if (!time) {
      validateFields.push("Informe o horário antes de prosseguir!");
    }
    if (!description) {
      validateFields.push("Informe uma decrição antes de prosseguir!");
    }
    if (!ticketColor) {
      validateFields.push(
        "Informe uma cor para seu ingresso antes de prosseguir!"
      );
    }
    if (!pictureUrl) {
      validateFields.push("Informe uma imagem principal antes de prosseguir!");
    }
    if (!calendar) {
      validateFields.push("Informe a data inicial antes de prosseguir!");
    }
    if (!adicionalPictureUrl) {
      validateFields.push("Informe uma imagem adicional antes de prosseguir!");
    }
    if (!calendarFinish) {
      validateFields.push("Informe a data final antes de prosseguir!");
    }
    if (!userId) {
      validateFields.push("Você deve estar autenticado!");
    }
    return validateFields;
  };

  return (
    <>
      {finish && (
        <Modal title={"Sucesso!"} handleClose={handleClose}>
          <Styled.H1modal>Concluída com sucesso!</Styled.H1modal>
        </Modal>
      )}
      {uploading && (
        <Modal title={"Atenção!"} handleClose={handleCloseLoading}>
          <Styled.H1modal>Cadastrando evento, aguarde...</Styled.H1modal>
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
                    {/* <Styled.Spacer
                      onClick={() => {
                        navigate("/adm");
                      }}
                    >
                      ←
                    </Styled.Spacer> */}
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
                          setValue={setTitle}
                        ></Input>
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
                        <Styled.ItemSpan>
                          Selecione a data de inicio do evento.
                        </Styled.ItemSpan>
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
                          Selecione a data final do evento.
                        </Styled.ItemSpan>
                        <Calendar
                          onChange={(date: Date) => {
                            handleCalendarFinish(date);
                          }}
                          value={calendarFinish}
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
                          defaultValue={dayjs("00:00", format)}
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
                        label={"Finalizar cadastro"}
                        action={() => {
                          addImg(pictureUrl ? pictureUrl : null);
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

export default CreateEvent;
