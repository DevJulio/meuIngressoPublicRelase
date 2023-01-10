import styled from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -5vh;
`;

export const BtnsContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
export const SpanTitleAux = styled.span`
  padding-left: 2vw;
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: ${({ theme }) => theme.fontSize.md};
  width: 95%;
  padding-top: 3vh;
  `;

export const TxtContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
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
  // padding-bottom: 19vh;
  //   padding-top: 13vh;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    width: 90%;
    padding-left: 19px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 10px;
  }
`;
export const Text = styled.span`
  display: flex;
  flex: 1;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.xlg};
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
  }
`;
export const Icons = styled.img`
  display: flex;
  margin-right: 15px;
  max-height: 80px;
  max-width: 80px;
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputMaskHtml = styled(InputMask)`
  color: black;
  font-size: 25px;
  border: 2px solid ${({ theme }) => theme.colors.orange.palete};
  border-radius: 5px;
  margin-top: 20px;
`;
export const FileInput = styled.input`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
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
background-color: #FFFFFF;
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
export const Input = styled.input.attrs(() => ({
  type: "text",
}))`
  color: ${({ theme }) => theme.colors.black.normal};
  font-size: 25px;
  border: 2px solid ${({ theme }) => theme.colors.black.normal};
  border-radius: 5px;f
  margin-top: 10px;
`;
export const ItemSpan = styled.span`
  color: white;
  font-family: ${({ theme }) => theme.fonts.secundary};
  margin-top: 3vh;
  font-size: 18px;
  padding-bottom: 6px;
  padding-inline: 2px;
`;
export const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  place-content: center;
  display: none;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    width: 90%;
    padding-left: 19px;
  }
`;
export const BtnContainerAux = styled.div`
display: flex;
flex-direction: row;
width: 100%;
place-content: center;
padding-bottom: 13vh;
    padding-top: 9vh;
@media ${({ theme }) => theme.devices.tablet} {
  flex-direction: column;
  width: 90%;
  padding-left: 19px;
}
`;