//File: src/components/common/Select.jsx
import React from 'react';
import "./Select.css";

const Select = ({ options, value, onChange }) => {
    return (
        <select value={value} onChange={onChange} className="select-field">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;

