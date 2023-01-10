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
export type TTicket = {
  userName: string;
  userNumber: string;
  cpf: string;
  isUsed: boolean;
  ticketDate: string;
  isComplete: boolean;
  eventId: string;
  ticketColor: string;
  title: string;
  ticketName: string;
  id?: string;
  buyId?: string
  isValid?: boolean
};
