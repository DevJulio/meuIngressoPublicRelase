import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -5vh;
`;
export const Banner = styled.img`
  background-size: cover;
  width: 100%;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  align-self: center;
  display: flex;
`;
export const Span = styled.span`
  padding-bottom: 1vh;
  color: ${({ theme }) => theme.colors.white.normal};
  justify-content: center;
  padding-top: 1vh;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  place-self: center;
`;
export const ContainerData = styled.div`
  display: flex;
  width: fit-content;
  background-position: center;
  width: 95%;
  flex-direction: column;
  align-self: center;
  padding: 1vh;
  justify-content: center;
  background: rgba(255, 255, 255, 0.51);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  margin-top: -6.6vh;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PriceSpan = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  place-self: end;
  margin-right: 2vw;
  margin-top: 2vh;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.secundary};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white.normal};
  padding: 5px;
`;
export const PriceSpanAux = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  place-self: end;
  margin-right: 2vw;
  margin-top: -5vh;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  border-radius: 25px;
`;
export const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  place-self: start;
  margin-left: 2vw;
  margin-top: 1vh;
  font-size: ${({ theme }) => theme.fontSize.md2};
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
`;
export const TitleAndLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 12px;
  }
`;
export const LogoImg = styled.img`
  width: 40px;
  padding-top: 1.5vh;
  cursor: pointer;
  padding-bottom: 1.5vh;
  padding-left: 3vw;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 45px;
  }
`;
export const InfoContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SpanTitle = styled.span`
  padding-left: 3vw;
  padding-right: 2vw;
  color: ${({ theme }) => theme.colors.white.normal};
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md2};
`;
export const SpanDescription = styled.span`
  padding-left: 3vw;
  padding-top: 1vh;
  color: ${({ theme }) => theme.colors.white.normal};
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: justify;
  width: 93%;
  margin-bottom: 3vh;
`;
export const TitleAndRating = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
`;
export const RatingContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white.normal};
  border-radius: 25px;
`;

export const TicketsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-bottom: 2vh;
  margin-top: 2vh;
`;

export const Tickets = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-right: 2vw;
  color: ${({ theme }) => theme.colors.white.normal};
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md2};
  border-style: solid;
  margin-left: 3vw;
  padding: 3vw;
  min-width: 80px;
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