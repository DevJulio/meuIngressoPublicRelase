import React, { useState } from "react";
import * as Styled from "./styles";
import { TCardProps } from "./card";
import { useNavigate } from "react-router-dom";
import Modal from "../modal";
import ButtonPrimary from "../btn";
import { theme } from "../../theme/theme";
import { message } from "antd";
import api from "../../services/api";

interface ITicket {
  data: TCardProps;
  isAdm?: boolean;
  isInfo?: boolean;
}

const Ticket: React.FC<ITicket> = ({ data, isAdm = false, isInfo = false }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);
  const [eventToBeChanged, setEventToBeChanged] = useState<string>("");

  const handleClose = () => {
    setModal(false);
  };

  const disableEvent = async () => {
    try {
      const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
      api.defaults.headers["Authorization"] = `${tokenObj}`;
      const response = await api.put(`/disableEvent/${eventToBeChanged}`);
      if (response.status === 200) {
        message.success("Desativado com sucesso!");
        setTimeout(() => {
          window.location.reload();
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
    handleClose();
  };

  const enableEvent = async () => {
    try {
      const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
      api.defaults.headers["Authorization"] = `${tokenObj}`;
      const response = await api.put(`/enableEvent/${eventToBeChanged}`);
      if (response.status === 200) {
        message.success("Ativado com sucesso!");
        setTimeout(() => {
          window.location.reload();
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
    handleClose();
  };

  const formatedData =
    new Date(data.time).getHours().toString().padStart(2, "0") +
    ":" +
    new Date(data.time).getMinutes().toString().padStart(2, "0");

  return (
    <>
      {modal && (
        <>
          <Modal title={"Atenção!"} handleClose={handleClose}>
            <Styled.TxtContainer>
              {data.status === "active" && (
                <Styled.SpanTitleAux>
                  Você Realmente deseja desativar o evento?
                </Styled.SpanTitleAux>
              )}
              {data.status === "disabled" && (
                <Styled.SpanTitleAux>
                  Você Realmente deseja ativar o evento?
                </Styled.SpanTitleAux>
              )}

              {data.status === "active" && (
                <Styled.Span>
                  Isso fará com que o evento não seja mais encontrado no app
                </Styled.Span>
              )}
              {data.status === "disabled" && (
                <Styled.Span>
                  Isso fará com que o evento seja encontrado no app.
                </Styled.Span>
              )}
            </Styled.TxtContainer>
            <Styled.BtnsContainer>
              {data.status === "active" && (
                <ButtonPrimary
                  bgColor={theme.colors.green.normal}
                  label={"Continuar"}
                  action={() => {
                    disableEvent();
                  }}
                />
              )}
              {data.status === "disabled" && (
                <ButtonPrimary
                  bgColor={theme.colors.green.normal}
                  label={"Continuar"}
                  action={() => {
                    enableEvent();
                  }}
                />
              )}
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
      <Styled.SpanAndIcon
        onClick={() => {
          localStorage.setItem("eventId", data.id);
          if (!isAdm && !isInfo) {
            navigate("/detalhes");
          }
        }}
      >
        <Styled.Spacer>
          <span
            style={{
              paddingTop: "2px",
            }}
          >
            {data.day}
          </span>
          <span>{data.month}</span>
        </Styled.Spacer>
        <Styled.SpacerCategory>
          <span
            style={{
              paddingTop: "5px",
            }}
          >
            {data.category}
          </span>
        </Styled.SpacerCategory>
        <Styled.Banner src={data.pictureUrl} />
        <Styled.Container>
          <Styled.EvntTitle>{data.title}</Styled.EvntTitle>
          <Styled.EvntTitleAux>A partir de: </Styled.EvntTitleAux>
          <Styled.ContainerRow>
            <span style={{ color: theme.colors.blue.palete }}>
              {data.place}
            </span>
            <span
              style={{
                padding: "1vw",
              }}
            ></span>

            <Styled.EvntTime>{formatedData}</Styled.EvntTime>
          </Styled.ContainerRow>
          <Styled.PriceSpan>R${data.price}</Styled.PriceSpan>
        </Styled.Container>
      </Styled.SpanAndIcon>
      {isAdm && (
        <>
          <Styled.BtnsContainer
            style={{
              backgroundColor: theme.colors.white.normal,
              borderRadius: "25px",
              width: "92%",
            }}
          >
            <Styled.BtnContainer>
              <ButtonPrimary
                bgColor={theme.colors.green.normal}
                label={"Editar"}
                action={() => {
                  localStorage.setItem("eventId", data.id);
                  navigate("/adm/editar-evento");
                }}
              />
            </Styled.BtnContainer>
            {data.status === "active" && (
              <ButtonPrimary
                label={"Desativar evento"}
                action={() => {
                  setEventToBeChanged(data.id);
                  setModal(true);
                }}
              />
            )}
            {data.status === "disabled" && (
              <ButtonPrimary
                bgColor={theme.colors.blue.palete}
                label={"Ativar evento"}
                action={() => {
                  setEventToBeChanged(data.id);
                  setModal(true);
                }}
              />
            )}
          </Styled.BtnsContainer>
        </>
      )}
      {isInfo && (
        <>
          <ButtonPrimary
            bgColor={theme.colors.blue.palete}
            label={"Selecionar evento"}
            action={() => {
              localStorage.setItem("eventIdData", data.id);
              navigate("/adm/lista-de-compras");
            }}
          />
        </>
      )}
    </>
  );
};

export default Ticket;
