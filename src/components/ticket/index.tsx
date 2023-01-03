import React, { useState } from "react";
import * as Styled from "./styles";
import { TCardProps } from "./card";
import { useNavigate } from "react-router-dom";
import Modal from "../modal";
import ButtonPrimary from "../btn";
import { theme } from "../../theme/theme";
import { message } from "antd";

interface ITicket {
  data: TCardProps;
  isAdm?: boolean;
}

const Ticket: React.FC<ITicket> = ({ data, isAdm = false }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);
  const [eventToBeDisabled, setEventToBeDisabled] = useState<string>("");

  const handleClose = () => {
    setModal(false);
  };

  const disableEvent = async () => {
    console.log(eventToBeDisabled);
    message.success("Desativado com sucesso!");
    handleClose();
  };

  const enableEvent = async () => {
    console.log(eventToBeDisabled);
    message.success("Ativado com sucesso!");
    handleClose();
  };

  return (
    <>
      {modal && (
        <>
          <Modal title={"Atenção!"} handleClose={handleClose}>
            <Styled.TxtContainer>
              {data.isEnabled && (
                <Styled.SpanTitleAux>
                  Você Realmente deseja desativar o evento?
                </Styled.SpanTitleAux>
              )}
              {!data.isEnabled && (
                <Styled.SpanTitleAux>
                  Você Realmente deseja ativar o evento?
                </Styled.SpanTitleAux>
              )}

              {data.isEnabled && (
                <Styled.Span>
                  Isso fará com que o evento não seja mais encontrado no app
                </Styled.Span>
              )}
              {!data.isEnabled && (
                <Styled.Span>
                  Isso fará com que o evento seja encontrado no app.
                </Styled.Span>
              )}
            </Styled.TxtContainer>
            <Styled.BtnsContainer>
              {data.isEnabled && (
                <ButtonPrimary
                  bgColor={theme.colors.green.normal}
                  label={"Continuar"}
                  action={() => {
                    disableEvent();
                  }}
                />
              )}
              {!data.isEnabled && (
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
          navigate("/detalhes");
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
          <span>{data.title}</span>
          <Styled.ContainerRow>
            <span>{data.place}</span>
            <span
              style={{
                padding: "1vw",
              }}
            ></span>
            <span>{data.time}</span>
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
            {data.isEnabled && (
              <ButtonPrimary
                label={"Desativar evento"}
                action={() => {
                  setEventToBeDisabled(data.id);
                  setModal(true);
                }}
              />
            )}
            {!data.isEnabled && (
              <ButtonPrimary
                label={"Ativar evento"}
                action={() => {
                  setEventToBeDisabled(data.id);
                  setModal(true);
                }}
              />
            )}
          </Styled.BtnsContainer>
        </>
      )}
    </>
  );
};

export default Ticket;
