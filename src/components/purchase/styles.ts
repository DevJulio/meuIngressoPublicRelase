import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  align-self: center;
   justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  width: fit-content;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.white.normal};
  width: 86%;
  flex-direction: column;
   align-self: center;
  padding: 1vh;
  justify-content: center;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.51);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.secundary};
  margin-top: 1.5vh;
`;
export const SpanAux = styled.span`
  color: ${({ theme }) => theme.colors.blue.palete};
  display: flex;
  margin-top: 1vh;
  font-family: ${({ theme }) => theme.fonts.primary};
  argin-right: auto;
  font-size: ${({ theme }) => theme.fontSize.lg};
  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    text-align: center;
    width: 100%;
  }
`;
export const Span = styled.span`
  padding-bottom: 1vh;
`;
export const LogoImg = styled.img`
  padding-top: 1.5vh;
  cursor: pointer;
  padding-bottom: 1.5vh;
  padding-left: 17vw;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 45px;
  }
`;
export const Banner = styled.img`
  background-size: cover;
  width: 90%;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  align-self: center;
  display: flex;
`;

export const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  width: 11vw;
  height: 5vh;
  border-radius: 25px;
  position: absolute;
  place-self: end;
  margin-right: 8vw;
  margin-top: 2vh;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  `;
export const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  `;

export const PriceSpan = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  place-self: end;
  margin-right: 2vw;
  margin-top: 0vh;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.secundary};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white.normal};
  padding: 1vh;
  `;


export const UseSpan = styled.span`
display: flex;
flex-direction: column;
position: absolute;
place-self: end;
margin-right: 1vw;
margin-top: -1vh;
align-items: center;
font-size: ${({ theme }) => theme.fontSize.md};
color: ${({ theme }) => theme.colors.white.normal};
font-family: ${({ theme }) => theme.fonts.secundary};
border-radius: 25px;
 padding: 1vh;
`;

export const TktDetail = styled.div`
  display: flex;
  margin-bottom: 3vh;
  flex-direction: column;
  `;