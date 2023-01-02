import styled from "styled-components";



export const InputContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  position: relative;
  display: inline-block;
  width: 90px;
  min-width: 0;
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;
  width: fit-content;
 `;

export const Input = styled.input`
  -webkit-font-smoothing: antialiased;
  list-style: none;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0 11px;
  text-align: start;
  background-color: transparent;
  border: 0;
  border-radius: 6px;
  outline: 0;
  transition: all 0.2s linear;
  appearance: textfield;
  color: rgba(0, 0, 0, 0.88);
  font-size: inherit;
  vertical-align: top;
`;

export const Label = styled.label`
  -webkit-font-smoothing: antialiased;
  color: rgba(0, 0, 0, 0.88);
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  position: relative;
  max-width: 100%;
  min-height: 1px;
  box-sizing: border-box;
  display: inline-block;
  flex-grow: 0;
  overflow: hidden;
  vertical-align: middle;
  margin: 0;
  padding: 0 0 8px;
  white-space: initial;
  text-align: start;
`;

export const Container = styled.div`
-webkit-font-smoothing: antialiased;
color: rgba(0, 0, 0, 0.88);
line-height: 1.5714285714285714;
list-style: none;
font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
font-size: 14px;
display: flex;
flex-flow: row wrap;
min-width: 0;
box-sizing: border-box;
`

export const Percent = styled.div`
-webkit-font-smoothing: antialiased;
line-height: 1.5714285714285714;
list-style: none;
font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
border-collapse: separate;
border-spacing: 0;
box-sizing: border-box;
display: table-cell;
white-space: nowrap;
padding-top: 0.5vh;
vertical-align: middle;
position: relative;
padding: 0 11px;
color: rgba(0, 0, 0, 0.88);
font-weight: normal;
font-size: 14px;
text-align: center;
background-color: rgba(0, 0, 0, 0.02);
border: 1px solid #d9d9d9;
border-radius: 6px;
transition: all 0.3s;
border-inline-start: 0;
border-start-start-radius: 0;
border-end-start-radius: 0;
padding-top: 0.5vh;
`