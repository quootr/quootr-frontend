import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const SubmitButton = ({ text, backgroundColor, width, height, margin }) => {
  return (
    <div className="input-field">
      <input type="button" id="submit-button" value={text} style={{ backgroundColor, width, height, margin }} />
    </div>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  margin: PropTypes.string,
};

export default SubmitButton;
