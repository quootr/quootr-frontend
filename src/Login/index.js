import React from 'react';
import InputField from '../InputField';
import LoginContainer from '../LoginContainer';
import SubmitButton from '../SubmitButton';
import '../global.css';
import * as colors from '../colors';
import './login.css';


const Login = () => {
  return (
    <div className="login-container">
      <LoginContainer />
    </div>
  );
};

export default Login;
