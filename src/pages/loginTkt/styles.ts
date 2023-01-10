// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";

export const Cointainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 100%;
  height: fit-content;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;
export const FormCointainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue.palete};
  height: 100vh;
  width: 100%;
  position: fixed;
  padding-top: 18vh;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;
export const Input = styled.input`
  width: 25vw;
  margin-top: 4vh;
  border-radius: 10px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.green.normal};
  color: ${({ theme }) => theme.colors.gray.light};
  padding: 1em;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 1vh;
    width: 100%;
  }
`;
export const LogoImg = styled.img`
  width: 25%;
  padding-top: 5px;
  padding-bottom: 5px;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 75%;
    padding-top: 5px;
    cursor: pointer;
  }
`;

export const BtnContainer = styled.div`
  place-content: center;
  display: flex;
  padding-top: 8vh;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  padding-top: 4vh;
  flex-direction: column;
  width: 75%;
  align-items: center;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;

export const Btn = styled.button`
  place-self: center;
  min-width: 25vw;
  padding: 0.5vw;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md2};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.green.normal};
  color: ${({ theme }) => theme.colors.white.normal};
  cursor: pointer;
  border-style: none;
  transition:  background-color 0.5s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.dark};
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 3vw;
    width: 100%;
  }
`;
export const NameSpan = styled.span`
color: ${({ theme }) => theme.colors.yellow.palete};
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
`;
export const SpanContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  place-content: center;
  width: 100%;
  align-self: center;
  flex-direction: row;

`;