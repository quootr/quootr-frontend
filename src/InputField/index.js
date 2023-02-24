import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const InputField = ({ type, placeholder, width, height, margin }) => {
  return (
    <div className="input-field">
      <input type={type} id="input-field" placeholder={placeholder} style={{ width, height, margin }} />
    </div>
  );
};

InputField.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  margin: PropTypes.string,
};

export default InputField;
