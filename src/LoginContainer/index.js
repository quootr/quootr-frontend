import './style.css';
import React from 'react';
import InputField from '../InputField';
import SubmitButton from '../SubmitButton';
import '../global.css';
import * as colors from '../colors';
import Link from '../Link';
import star from '../VisualComponents/Star5.svg';
const LoginContainer = () =>  {
  return (
    <div class="hralign">
        <form class="hralign">
            <img src={star} alt="Star" class="verticalMargin"/>
            <h1 class="login-title">Quem é você?</h1>
            <InputField type={"text"} placeholder={"@Usuário"} width={"310px"} height={"57px"} margin="0px 0px 15px 0px"/>
            <InputField type={"password"} placeholder={"Senha"} width={"310px"} height={"57px"} margin="0px 0px 15px 0px"/>
            <SubmitButton text={"Entrar"} backgroundColor={colors.quootrYellow} width={"310px"} height={"88px"} margin="25px 0px 0px 0px"/>
        <h3 class="resize text">Não tem uma conta? <Link url={"https://www.quootr.com/register"} color={colors.quootrYellow} text={"Cria uma!"} class="resize"/> </h3>
        </form>
    </div>
  );
};



export default LoginContainer;
