import React from "react";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../utils/cookies";
import api from "../../services/api";

import logoaux from "../../assets/logo/logoaux.png";
import { apiPort } from "../../config";
type TInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<TInputs>();
  const navigate = useNavigate();

  const onSubmit = async (user: TInputs) => {
    try {
      const response = await api.post("loginAdm1n/", user);
      navigate("/users");
      // const token = { ...response.data.data };
      // setCookie("user", JSON.stringify(token), 30);
    } catch (error) {
      console.log(error);
      alert("check Email or Password and try again");
    }
  };

  return (
    <>
      <Styled.Cointainer>
        <Styled.FormCointainer onSubmit={handleSubmit(onSubmit)}>
          <Styled.LogoImg src={logoaux} alt="" />
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

export default Login;
