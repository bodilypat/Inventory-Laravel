//File: src/components/common/ButtonGroup.jsx
import React from 'react';
import "./Common.css";


const ButtonGroup = ({ buttons, selectedButton, onButtonClick }) => {
    return (
        <div className="button-group">
            {buttons.map((button) => (
                <button
                    key={button.value}
                    className={`button ${selectedButton === button.value ? 'selected' : ''}`}
                    onClick={() => onButtonClick(button.value)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup;

