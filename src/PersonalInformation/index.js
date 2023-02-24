import React from 'react';
import InputField from '../InputField';
import PersonalInformationContainer from '../PersonalInformationContainer';
import SubmitButton from '../SubmitButton';
import '../global.css';
import * as colors from '../colors';
import './personalInformation.css';

const PersonalInformation = () => {
  return (
    <div className="personalInformation-container">
      <PersonalInformationContainer/>
    </div>
  );
};

export default PersonalInformation;
