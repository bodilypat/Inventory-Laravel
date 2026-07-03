//File: src/components/common/Textarea.jsx
import React from 'react';
import "./Common.css";

const Textarea = ({ placeholder, value, onChange }) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="textarea-field"
        />
    );
}   

export default Textarea;

