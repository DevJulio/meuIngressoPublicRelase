import { TCardProps } from "../../components/ticket/card";
import { theme } from "../../theme/theme";
import categories from "./categories";
// , Arthur da Costa Barros
const eventsProps: TCardProps[] = [
  {
    title: "Muladeiros",
    pictureUrl: "https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gMhMdHXECUgLenTROcvboNBotvWCi5Ik9PXM-i0FuTa5PlUM2KwCeyWxZMR3ZGiKbrDHN48xC6BB6f9WlhzVcFszFt5NQ=w1920-h902",
    adicionalPictureUrl: "https://guiaog.com.br/uploads/eventos/zkBiA6vdOuet4dvsve2gWa.jpg",
    price: 500.0,
    place: "Parque de exposições de Iporá.",
    time: "22:00",
    isEnabled: true,
    category: categories[2].label,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur voluptates cum a sequi maxime vero atque quas sunt recusandae praesentium aliquam fugit quis qui, iure ratione dicta fugiat totam.",
    day: "30",
    month: "Dec",
    year: "2022",
    id: "1",
    calendar: new Date(),
    status: "",
    ticketColor: theme.colors.orange.palete,
    prices: [
      {
        title: "Camarote",
        isComplete: true,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 350.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
    ]

  }, {
    title: "Guns N' Roses",
    pictureUrl: "https://jornalgoias.com.br/wp-content/uploads/2022/04/Guns-N%E2%80%99Roses-780x405.jpeg",
    adicionalPictureUrl: "https://www.eventim.com.br/campaign/fileadmin/fm_br/campaigns/2022/guns-n-roses/gnr-h1.jpg",
    price: 500.0,
    place: "Estádio Serra Dourada",
    time: "22:00",
    isEnabled: true,
    category: categories[1].label,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur voluptates cum a sequi maxime vero atque quas sunt recusandae praesentium aliquam fugit quis qui, iure ratione dicta fugiat totam.",
    day: "30",
    month: "Dec",
    year: "2022",
    id: "2",
    calendar: new Date(),
    status: "",
    ticketColor: theme.colors.black.normal,
    prices: [
      {
        title: "Camarote",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 350.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
    ]

  },
  {
    title: "Linkin Park",
    pictureUrl: "https://80minutos.com.br/img/artist/0/498.jpg",
    adicionalPictureUrl: "",
    price: 400.0,
    place: "Estádio Serra Dourada",
    time: "22:00",
    isEnabled: true,
    category: categories[1].label,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur voluptates cum a sequi maxime vero atque quas sunt recusandae praesentium aliquam fugit quis qui, iure ratione dicta fugiat totam.",
    day: "31",
    month: "Dec",
    year: "2022",
    id: "3",
    calendar: new Date(),
    status: "",
    ticketColor: "",
    prices: [
      {
        title: "Camarote",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 400.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 350.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
    ]
  },
  {
    title: "Guns N' Roses",
    pictureUrl: "https://jornalgoias.com.br/wp-content/uploads/2022/04/Guns-N%E2%80%99Roses-780x405.jpeg",
    adicionalPictureUrl: "",
    price: 500.0,
    place: "Estádio Serra Dourada",
    time: "22:00",
    isEnabled: true,
    category: categories[1].label,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur voluptates cum a sequi maxime vero atque quas sunt recusandae praesentium aliquam fugit quis qui, iure ratione dicta fugiat totam.",
    day: "30",
    month: "Dec",
    year: "2022",
    id: "4",
    calendar: new Date(),
    status: "",
    ticketColor: "",
    prices: [
      {
        title: "Camarote",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 350.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
    ]
  },
  {
    title: "Guns N' Roses",
    pictureUrl: "https://jornalgoias.com.br/wp-content/uploads/2022/04/Guns-N%E2%80%99Roses-780x405.jpeg",
    adicionalPictureUrl: "",
    price: 500.0,
    place: "Estádio Serra Dourada",
    time: "22:00",
    isEnabled: true,
    category: categories[1].label,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur voluptates cum a sequi maxime vero atque quas sunt recusandae praesentium aliquam fugit quis qui, iure ratione dicta fugiat totam.",
    day: "30",
    month: "Dec",
    year: "2022",
    id: "5",
    calendar: new Date(),
    status: "",
    ticketColor: "",
    prices: [
      {
        title: "Camarote",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 350.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
    ]
  },
  {
    title: "Guns N' Roses",
    pictureUrl: "https://jornalgoias.com.br/wp-content/uploads/2022/04/Guns-N%E2%80%99Roses-780x405.jpeg",
    adicionalPictureUrl: "",
    price: 500.0,
    place: "Estádio Serra Dourada",
    time: "22:00",
    isEnabled: true,
    category: categories[1].label,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur voluptates cum a sequi maxime vero atque quas sunt recusandae praesentium aliquam fugit quis qui, iure ratione dicta fugiat totam.",
    day: "30",
    month: "Dec",
    year: "2022",
    id: "6",
    calendar: new Date(),
    status: "",
    ticketColor: "",
    prices: [
      {
        title: "Camarote",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
        isComplete: false,
        ticketDate: "Sat Jan 07 2023 22:37:20 GMT-0300 (Horário Padrão de Brasília)",
        price: 350.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
    ]
  },
];

export default eventsProps;
