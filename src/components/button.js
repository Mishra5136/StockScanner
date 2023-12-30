
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, label }) => (
  <button className="btn btn-primary" onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
