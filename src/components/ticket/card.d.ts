export type TPrices = {
  title: string;
  price: number;
  description: string;
  isComplete: boolean
}

export type TCardProps = {
  id: string
  isEnabled: boolean;
  title: string;
  pictureUrl: string;
  adicionalPictureUrl: string;
  price: number;
  place: string;
  time: string;
  category: string;
  description?: string;
  day: string;
  month: string;
  year: string;
  ticketColor: string
  calendar: date
  prices: TPrices[]
}