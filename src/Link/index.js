import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ url, color, text }) => (
  <a href={url} style={{ color }}>
    {text}
  </a>
);

Link.propTypes = {
    url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
