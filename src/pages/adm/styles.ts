import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -5vh;
`;
export const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 13vh;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md2};
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 5vh;
  margin-left: 2vh;
`;
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align-last: center;
  align-items: center;
  margin-bottom: 3vh;
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5vw;
  cursor: pointer;
`;
export const IconSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.blue.palete};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
export const Icon = styled.img`
  margin-bottom: 3vh;
`;
export const ContainerAux = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  place-items: center;
`;
