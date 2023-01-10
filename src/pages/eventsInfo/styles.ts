import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: ${({ theme }) => theme.colors.orange.palete};
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
`;
export const SpanContainer = styled.div`
    font-family: ${({ theme }) => theme.fonts.secundary};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.white.normal};
    display: flex;
    align-self: center;
`;
export const Span = styled.span`
padding-bottom: 1vh;
`
export const TitleAndLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
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
  padding-left: 17vw;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 45px;
  }
`;
export const Title = styled.span`
  display: flex;
  padding-left: 3.9vw;
  width: 95%;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blue.palete};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xlg};
    width: 100%;
  }
`;

export const SelectContainer = styled.div`
  text-align-last: center;  
  padding-top: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Select = styled.select`
border-radius: 50px;
height: 46px;
border-width: 2px;
border-color:${({ theme }) => theme.colors.orange.palete};
font-size: ${({ theme }) => theme.fontSize.md2};
color:${({ theme }) => theme.colors.blue.palete};
font-family: ${({ theme }) => theme.fonts.primary};
padding: 7px;
`
