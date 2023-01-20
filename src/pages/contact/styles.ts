import styled from "styled-components";


export const MainContainer = styled.div`
  place-content: center;
  display: flex;
  flex: auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.orange.palete};
   place-items: center;
`;

export const Title = styled.a`
  color: ${({ theme }) => theme.colors.white.normal};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md2};
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
  }
`;
export const Icons = styled.img`
  display: flex;
  margin-right: 15px;
  max-height: 70px;
  max-width: 70px;
  cursor: pointer;
`;

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  place-content: center;
  flex-direction: row;
  align-items: center;
`;

export const DefaultTitle = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.xlg};
  margin-top: 6vh;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
  }
`;


export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
  margin-bottom: 18vh;
`;