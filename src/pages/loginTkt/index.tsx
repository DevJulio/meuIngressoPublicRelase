import React, { useContext } from "react";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import logoaux from "../../assets/logo/logoaux.png";
import { AuthContext } from "../../contexts/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

type TInputs = {
  email: string;
  password: string;
};

const LoginTkt: React.FC = () => {
  const { register, handleSubmit } = useForm<TInputs>();
  const localAuth: any = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (user: TInputs) => {
    const res = await localAuth.signIn({ ...user });
    if (res) {
      navigate("/adm");
    } else {
      message.error("Verifique os dados e tente novamente!");
    }
  };

  return (
    <>
      <Styled.Cointainer>
        <Styled.FormCointainer onSubmit={handleSubmit(onSubmit)}>
          <Styled.LogoImg src={logoaux} alt="" />
          <Styled.SpanContainer>
            <Styled.NameSpan>Meu</Styled.NameSpan>
            <Styled.NameSpanAux>Ingresso</Styled.NameSpanAux>
          </Styled.SpanContainer>

          <Styled.MainContainer>
            <Styled.Input {...register("email")} placeholder="E-mail" />
            <Styled.Input
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            <Styled.BtnContainer>
              <Styled.Btn type="submit">Login</Styled.Btn>
            </Styled.BtnContainer>
          </Styled.MainContainer>
        </Styled.FormCointainer>
      </Styled.Cointainer>
    </>
  );
};

export default LoginTkt;
