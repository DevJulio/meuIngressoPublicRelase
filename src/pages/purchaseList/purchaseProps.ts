import { TUsers } from "../buyPage/user";

const purchaseProps: TUsers[] = [
    {
        cpf: "05143763177",
        id: "1",
        userName: "Júlio Rodrigues",
        userNumber: "(64) 9 96140938",
        isUsed: false,
        date: new Date(),
        buyDetails:
        {
            price: 500,
            isComplete: true,
            description: "",
            title: "Camarote"
        },

    }, {
        cpf: "05143763177",
        id: "1",
        userName: "Júlio Rodrigues",
        userNumber: "(64) 9 96140938",
        isUsed: false,
        date: new Date(),
        buyDetails:
        {
            price: 350,
            isComplete: true,
            description: "",
            title: "Pista"
        },

    }, {
        cpf: "05143763177",
        id: "1",
        userName: "Júlio Rodrigues",
        userNumber: "(64) 9 96140938",
        isUsed: true,
        date: new Date(),
        buyDetails:
        {
            price: 500,
            isComplete: true,
            description: "",
            title: "Camarote"
        },

    }
];

export default purchaseProps;
