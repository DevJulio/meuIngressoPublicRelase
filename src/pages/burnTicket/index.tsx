/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import * as Styled from "./styles";

import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Modal from "../../components/modal";
import api from "../../services/api";
import { message } from "antd";
import { TTicket } from "../buyPage/buy";

const Burn: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [modal3, setModal3] = useState<boolean>(false);
  const [modal4, setModal4] = useState<boolean>(false);

  const { search } = useLocation();
  const navigate = useNavigate();
  const searchParms = new URLSearchParams(search);
  const tktId = searchParms.get("id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
        api.defaults.headers["Authorization"] = `${tokenObj}`;
        const response = await api.get(`/getTicketToBurn/${tktId}`);
        if (response.status === 200) {
          await confirmarEntrada(response.data);
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
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmarEntrada = async (data: TTicket) => {
    const currentDay = new Date().getDate();
    const tktDate = new Date(data.ticketDate);
    let tktDatePlusFive = new Date(tktDate);
    tktDatePlusFive.setHours(tktDate.getHours() + 5);

    if (data) {
      if (!data.isValid) {
        setModal3(true);
        return;
      } else {
        if (data.isUsed && data.isComplete) {
          setModal(true);
        }
        if (!data.isUsed && !data.isComplete) {
          const tktDay = tktDate.getDate();
          if (data.isComplete) {
            const tktRes = await updateTkt();
            if (tktRes) {
              setModal(true);
            }
          } else {
            if (currentDay === Number(tktDay)) {
              const tktRes = await updateTkt();
              if (tktRes) {
                setModal(true);
              }
            } else {
              if (currentDay === tktDatePlusFive.getDate()) {
                const tktRes = await updateTkt();
                if (tktRes) {
                  setModal(true);
                }
              } else {
                if (currentDay > Number(tktDay)) {
                  setModal3(true);
                  return;
                }
                if (currentDay < Number(tktDay)) {
                  setModal4(true);
                  return;
                }
                setModal2(true);
              }
            }
          }
        } else {
          if (data.isUsed && data.isComplete) {
          } else {
            setModal3(true);
          }
        }
      }
    }
  };

  const updateTkt = async () => {
    try {
      const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
      api.defaults.headers["Authorization"] = `${tokenObj}`;
      const response = await api.put(`/updateTicket/${tktId}`);
      if (response.status === 200) {
        return true;
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

  const handleClose = () => {
    setModal(false);
  };
  const handleClose2 = () => {
    setModal2(false);
  };
  const handleClose3 = () => {
    setModal3(false);
  };
  const handleClose4 = () => {
    setModal4(false);
  };
  return (
    <>
      {modal && (
        <>
          <Modal title={"Sucesso!"} handleClose={handleClose}>
            <Styled.H1modal2>Entrada Garantida com sucesso!</Styled.H1modal2>
          </Modal>
        </>
      )}
      {modal2 && (
        <>
          <Modal title={"Falha!"} handleClose={handleClose2}>
            <Styled.H1modal2>Verifique o dia do ingresso!</Styled.H1modal2>
          </Modal>
        </>
      )}
      {modal3 && (
        <>
          <Modal title={"Atenção!"} handleClose={handleClose3}>
            <Styled.H1modal2>Ingresso antigo ou já usado!</Styled.H1modal2>
          </Modal>
        </>
      )}
      {modal4 && (
        <>
          <Modal title={"Atenção!"} handleClose={handleClose4}>
            <Styled.H1modal2>Ingresso para evento futuro!</Styled.H1modal2>
          </Modal>
        </>
      )}
      <Header />
      <Styled.MainContainer>
        <Styled.Title>Validação das entradas!</Styled.Title>
      </Styled.MainContainer>
      <Footer />
    </>
  );
};

export default Burn;
