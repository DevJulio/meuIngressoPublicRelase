import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import lupa from "../../assets/icons/lupa.png";
import * as Styled from "./styles";
import Footer from "../../components/footer";
import InvertBorderPage from "../../components/invertBorderPage";
import { theme } from "../../theme/theme";
import Purchase from "../../components/purchase";
import purchaseProps from "./purchaseProps";
import api from "../../services/api";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import TokenValidate from "../../components/validateToken";

type TSaleArr = {
  cpf: string;
  eventId: string;
  isComplete: boolean;
  isUsed: boolean;
  ticketColor: string;
  ticketDate: string;
  ticketName: string;
  title: string;
  userName: string;
  userNumber: string;
};

export type TPurchase = {
  createdAt: string;
  eventId: string;
  horaCompra: string;
  id: string;
  tipo: string;
  tipoIngresso: string;
  valorPago: number;
  ticket: TSaleArr[];
};

const PurchaseList: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const [money, setMoney] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [accessqty, setAccessQty] = useState<number>(0);
  const [sales, setSales] = useState<TPurchase[]>([]);
  const [tiposDeIngresso, setTiposDeIngresso] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const eventIdData = localStorage.getItem("eventIdData");

      try {
        const tokenObj = sessionStorage.getItem("@AuthFirebase:accessToken");
        api.defaults.headers["Authorization"] = `${tokenObj}`;
        const response = await api.get(`/getAllMySales/${eventIdData}`);
        if (response.status === 200) {
          const localSales = response.data.map((sale: any) => {
            if (sale.isValid) {
              return sale;
            }
          });
 
          setSales(localSales);
          let allTkTtypes: string[] = [];
          localSales.forEach((sale: TPurchase) => {
            allTkTtypes.push(sale.tipoIngresso);
          });
          setTiposDeIngresso(
            allTkTtypes.filter(
              (item, index) => allTkTtypes.indexOf(item) === index
            )
          );
          firstChild(localSales);
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

  const firstChild = (sales: any) => {
    setTitle("todos ingressos");
    let count = 0;
    let accessCount = 0;
    let price = 0;

    sales.map((purchase: TPurchase) => {
      price = price + purchase.valorPago;
      purchase.ticket.forEach((sale: TSaleArr) => {
        count++;
        if (sale.isUsed) {
          accessCount++;
        }
      });
    });
    setQty(count);
    setAccessQty(accessCount);
    setMoney(price);
  };

  const handleChange = (type: string) => {
    if (type !== "all") {
      setTitle(type);
      setMoney(0);
      let count = 0;
      let accessCount = 0;
      let price = 0;
      sales.map((purchase: TPurchase) => {
        if (purchase.tipoIngresso === type) {
          price = price + purchase.valorPago;
          purchase.ticket.forEach((sale: TSaleArr) => {
            count++;
            if (sale.isUsed) {
              accessCount++;
            }
          });
        }
      });
      setQty(count);
      setAccessQty(accessCount);
      setMoney(price);
    } else {
      firstChild(sales);
    }
  };

  return (
    <>
      <Header />
      <TokenValidate
        children={
          <>
            <Styled.SelectContainer>
              <Styled.LogoImg
                src={lupa}
                alt="icone"
                style={{
                  paddingLeft: "0vw",
                }}
              />
              <Styled.Select
                name="select"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              >
                <option selected disabled value="0">
                  Escolha o tipo de ingresso:
                </option>
                <option key={"all"} value={"all"}>
                  Ver todos
                </option>
                {tiposDeIngresso &&
                  tiposDeIngresso.map((sale: any) => (
                    <option key={sale} value={sale}>
                      {sale}
                    </option>
                  ))}
              </Styled.Select>
            </Styled.SelectContainer>
            {money > 0 && sales && (
              <Styled.InfoContainer>
                <Styled.Info>Valor arrecadado com: {title}</Styled.Info>
                <Styled.Info>R$ {money}</Styled.Info>
                <Styled.Info>Quantidade vendida: {qty}</Styled.Info>
                <Styled.Info>Ingressos usados: {accessqty}</Styled.Info>
              </Styled.InfoContainer>
            )}

            <InvertBorderPage
              insideColor={theme.colors.orange.palete}
              outsideColor={theme.colors.white.normal}
              children={
                <>
                  {sales.length ? (
                    <>
                      {sales.map((sale: TPurchase) => (
                        <Purchase data={sale} />
                      ))}
                    </>
                  ) : (
                    <>
                      <Styled.NoData>
                        <Styled.Title>Sem vendas!</Styled.Title>
                      </Styled.NoData>
                    </>
                  )}
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

export default PurchaseList;
