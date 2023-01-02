import { TCardProps } from "../../components/ticket/card";
import { theme } from "../../theme/theme";
import categories from "./categories";

const eventsProps: TCardProps[] = [
  {
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
    id: "1",
    ticketColor: theme.colors.black.normal,
    prices: [
      {
        title: "Camarote",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
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
    id: "2",
    ticketColor: "",
    prices: [
      {
        title: "Camarote",
        price: 400.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
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
    id: "3",
    ticketColor: "",
    prices: [
      {
        title: "Camarote",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
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
    ticketColor: "",
    prices: [
      {
        title: "Camarote",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
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
    ticketColor: "",
    prices: [
      {
        title: "Camarote",
        price: 500.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
      {
        title: "Pista",
        price: 350.0,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nemo maxime nesciunt quod quia",
      },
    ]
  },
];

export default eventsProps;
