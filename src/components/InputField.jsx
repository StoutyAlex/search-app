import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ placeholder, onChange }) => {
  const [textValue, setTextValue] = useState('');

  const handleChange = (event) => {
    setTextValue(event.target.value);
    onChange(event);
  };

  return (
    <div className="c-input-field">
      <input
        className="c-input-field__input"
        value={textValue}
        placeholder={placeholder}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  placeholder: '',
  onChange: () => {},
};

export default InputField;
