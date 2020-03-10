import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ placeholder, onChange, label }) => {
  const [textValue, setTextValue] = useState('');

  const handleChange = (event) => {
    setTextValue(event.target.value);
    onChange(event);
  };

  return (
    <div className="c-input-field">
      { label && (
        <label
          className="c-input-field__label"
          htmlFor="input-field"
        >
          {label}
        </label>
      )}
      <input
        id="input-field"
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
  label: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  onChange: () => {},
  label: '',
};

export default InputField;
