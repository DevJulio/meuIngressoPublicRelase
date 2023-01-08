import styled from "styled-components";

export const SpanAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2vh;
  padding-bottom: 1vh;
  min-width: 100vw;
  max-width: 100vw;
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
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  background: rgba(255, 255, 255, 0.51);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
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
  margin-left: 8vw;
  padding-bottom: 1vh;
  margin-top: 2vh;
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
export const SpacerCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 19vw;
  height: 3vh;
  border-radius: 25px;
  position: absolute;
  place-self: flex-start;
  margin-left: 11vw;
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
  margin-top: 1vh;
  flex-direction: row;
  margin-bottom: 1vh;
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
  margin-top: -1.8vh;
  align-items: center;
  font-size: 1.25em;
  color: #023047;
  font-family: RobotoRegular, sans-serif;
  border-radius: 25px;
  background-color: #ffffff;
  padding: 5px;
  margin-bottom: 2.6vh;
  margin-right: 2.9vw;
`;

export const EvntTitle = styled.span`
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md2};
  width: 95%;
`;
export const EvntTitleAux = styled.span`
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  position: absolute;
  margin-left: 46vw;
  margin-top: -4vh;
`;

export const EvntTime = styled.span`
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md2};
  position: absolute;
  place-self: center;
  margin-left: 69.5vw;
  margin-top: 6px;
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 5vh;
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
