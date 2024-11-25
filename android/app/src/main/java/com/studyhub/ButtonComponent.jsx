import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ label, onClick, variant }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

ButtonComponent.defaultProps = {
  variant: 'primary',
};

export default ButtonComponent;