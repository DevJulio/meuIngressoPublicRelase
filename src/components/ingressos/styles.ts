import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  align-items: center;
   color: white;
  width: 25%;
  padding: 5%;
margin-bottom: 5vh;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 10%;
    width: 75%;
  }
`;
export const QRContainer = styled.div`
  display: flex;
  padding: 15%;
  padding: 5%;
  background-color: white;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 8%;
  }
`;
export const IMGContainer = styled.div`
  display: flex;
  padding-bottom: 40px;
`;
export const SpanContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  text-align-last: center;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 21px;
  align-self: center;
  padding-bottom: 25px;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const TicketType = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 53px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const EventInfo = styled.span`
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: ${({ theme }) => theme.fontSize.md};
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;

export const EventInfoWhite = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 20px;
  margin-top: 2vh;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const EventInfoWarning = styled.span`
  color: #ffff00;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 20px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const BtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 `;
export const MainSpanContainer = styled.div`
 display: flex;
 cursor: pointer;
 align-items: center;
 @media ${({ theme }) => theme.devices.tablet} {
   place-content: center;
   width: 100%;
   align-self: center;
   flex: 1;
 }
`;

export const NameSpan = styled.span`
color: ${({ theme }) => theme.colors.white.normal};
 display: flex;
 font-family: ${({ theme }) => theme.fonts.primary};
 font-size: 50px;
 @media ${({ theme }) => theme.devices.tablet} {
   font-size: 35px;
 }
`;
export const NameSpanAux = styled.span`
 display: flex;
 color: ${({ theme }) => theme.colors.orange.palete};
 font-family: ${({ theme }) => theme.fonts.primary};
 font-size: 50px;
 @media ${({ theme }) => theme.devices.tablet} {
   font-size: 35px;
 }
`;export const ColContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
place-content: center;
`;

export const H1modal = styled.h1`
font-size: 20px;
padding-inline: 28px;
`;
