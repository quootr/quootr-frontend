import './style.css';
import React from 'react';
import InputField from '../InputField';
import SubmitButton from '../SubmitButton';
import '../global.css';
import * as colors from '../colors';
import Link from '../Link';
import star from '../VisualComponents/Star4.svg';
const PersonalInformationContainer = () =>  {
  return (
    <div class="hralign">
        <form class="hralign">
            <img src={star} alt="Star" class="verticalMargin"/>
            <h1 class="PersonalInformation-title">Agora, vamos te verificar...</h1>
            <InputField type={"text"} placeholder={"E-mail"} width={"310px"} height={"57px"} margin="0px 0px 15px 0px"/>
            <InputField type={"text"} placeholder={"Data de Nascimento"} width={"310px"} height={"57px"} margin="0px 0px 15px 0px"/>
            <SubmitButton text={"Criar conta!"} backgroundColor={colors.quootrYellow} width={"310px"} height={"88px"} margin="25px 0px 0px 0px"/>
        </form>
    </div>
  );
};

export default PersonalInformationContainer;
