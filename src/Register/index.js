import React from 'react';
import InputField from '../InputField';
import RegisterContainer from '../RegisterContainer';
import SubmitButton from '../SubmitButton';
import '../global.css';
import * as colors from '../colors';
import './register.css';


const Register = () => {
  return (
    <div className="register-container">
      <RegisterContainer/>
    </div>
  );
};

export default Register;
