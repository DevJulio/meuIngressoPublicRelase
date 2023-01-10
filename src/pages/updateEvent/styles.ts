import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -5vh;
`;

export const FormContainer = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  width: 40%;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.tablet} {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
`;

export const Aux = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  place-content: center;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    width: 90%;
    padding-left: 19px;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.xlg};
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
  }
`;

export const FileInput = styled.input`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.white.normal};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${({ theme }) => theme.fonts.secundary};
`;

export const H1modal = styled.h1`
  font-size: 21px;
  padding-inline: 48px;
`;
export const H1modal2 = styled.h1`
  font-size: 20px;
  padding-inline: 28px;
`;

export const MainContainer = styled.div`
  place-content: center;
  display: flex;
  flex: auto;
  flex-direction: column;
  margin-top: 20px;
  place-items: center;
`;

export const PriceContainer = styled.div`
  width: 97%;
  display: flex;
  flex-direction: row;
  padding: 5px;
  background-color: #ffffff;
  align-self: center;
  border-radius: 7px;
  place-content: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
export const Price = styled.span`
  color: ${({ theme }) => theme.colors.orange.palete};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
export const Atention = styled.span`
  color: ${({ theme }) => theme.colors.red.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 45px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;

export const Atention2 = styled.span`
  color: white;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 25px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const ItemSpan = styled.span`
  color: white;
  margin-top: 4vh;
  font-size: 18px;
  align-self: center;
  padding-bottom: 3vh;
  padding-inline: 10px;
  font-family: ${({ theme }) => theme.fonts.secundary};
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: left;
  }
`;
export const Close = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
   font-size: ${({ theme }) => theme.fontSize.md2};
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.colors.gray.dark};
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.gray.dark};
    text-decoration: none;
    cursor: pointer;
  }
 
  place-self: flex-end;
  margin-right: 5vw;
  margin-top: 2vh;


`;
export const Input = styled.input.attrs(() => ({
  type: "text",
}))`
  color: ${({ theme }) => theme.colors.black.normal};
  font-size: 25px;
  border: 2px solid ${({ theme }) => theme.colors.black.normal};
  border-radius: 5px;f
  margin-top: 10px;
`;

export const Textarea = styled.textarea.attrs(() => ({
  type: "text",
}))`
  color: ${({ theme }) => theme.colors.black.normal};
  font-size: 25px;
  border: 2px solid ${({ theme }) => theme.colors.black.normal};
  border-radius: 5px;
  margin-top: 10px;
`;
export const Centralize = styled.div`
display: flex;
place-Self: center;
`;
export const TicketCard = styled.div`
display: flex;
border-radius: 25px;
width: 99%;
background-color:  ${({ theme }) => theme.colors.blue.palete};;
flex-direction: column;
align-self: center;
margin-bottom: 5vh;
padding: 12px;
padding-bottom: 5vh;
`;
export const Banner = styled.img`
  background-size: cover;
  width: 100%;
  align-self: center;
  display: flex;
`;
export const InputCheckbox = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  color: black;
  font-size: 25px;
  border: 2px solid ${({ theme }) => theme.colors.orange.palete};
  border-radius: 5px;
  width: 32px;
  height: 32px;
  margin-top: 5vh;
  margin-top: 1vh;
    place-self: center;
`;
