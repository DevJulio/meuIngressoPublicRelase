import { TPrices } from "../../components/ticket/card";


export type TUsers = {
  id: string;
  userName: string;
  userNumber: string;
  cpf: string;
  isUsed: boolean;
  date: Date;
  buyDetails: TPrices
}