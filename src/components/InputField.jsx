import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  placeholder, onChange, onBlur, onFocus, label,
}) => {
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
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  label: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  label: '',
};

export default InputField;
