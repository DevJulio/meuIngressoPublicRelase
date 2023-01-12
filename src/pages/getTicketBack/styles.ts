// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";

export const Cointainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.orange.palete};
  align-items: center;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;
export const CointainerAux = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45vh;
  background-color: ${({ theme }) => theme.colors.orange.palete};
  align-items: center;
  @media ${({ theme }) => theme.devices.tablet} {
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
export const FormContainer = styled.div`
margin-top: 3vh;
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
@media ${({ theme }) => theme.devices.tablet} {
  margin-left: 0px;
  margin-right: 0px;
  width: 90%;
}
`;