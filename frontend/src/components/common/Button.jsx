//File: src/components/common/Button.jsx
import React from 'react';
import "./Common.css";

const Button = ({ label, onClick, disabled = false, type = "button" }) => {
    return (
        <button className="custom-button" onClick={onClick} disabled={disabled} type={type}>
            {label}
        </button>
    );
}

export default Button;

