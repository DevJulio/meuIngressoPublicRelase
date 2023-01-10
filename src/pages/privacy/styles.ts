import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -5vh;
`;

export const Span = styled.span`
  padding-left: 3vw;
  color: ${({ theme }) => theme.colors.white.normal};
  justify-content: center;
  padding-top: 1vh;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.xlg};
  place-self: center;
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
export const SpanTitle = styled.span`
  padding-left: 3vw;
  padding-top: 1vh;
  color: ${({ theme }) => theme.colors.white.normal};
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: ${({ theme }) => theme.fontSize.md2};
  text-align: justify;
  width: 93%;
 `;
