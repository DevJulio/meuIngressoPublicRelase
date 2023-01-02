import React, { ReactNode } from "react";

import * as Styled from "./styles";

interface Props {
  handleClose(value: boolean): void;
  children?: ReactNode;
  title: string;
}

const Modal: React.FC<Props> = ({ handleClose, children, title }) => {
  return (
    <>
      <Styled.Container>
        <Styled.Content>
          <Styled.Header>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Close
              onClick={() => {
                handleClose(false);
              }}
            >
              X
            </Styled.Close>
          </Styled.Header>
          {children}
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default Modal;
