import styled from "styled-components";


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

export const Info = styled.span`
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md2};
  margin-left: 5vw;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
  }
`;
export const InfoContainer = styled.div`
  place-content: center;
  display: flex;
  flex: auto;
  flex-direction: column;
  margin-top: 20px;
  place-items: flex-start;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 60px;

  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
  }
`;
export const NoData = styled.div`
  place-content: center;
  display: flex;
  flex: auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.orange.palete};
   place-items: center;
`;
