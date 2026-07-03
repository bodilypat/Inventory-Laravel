//File: src/components/common/Alert.jsx
import React from 'react';
import "./Coomon.css";

const Alert = ({ message, type }) => {
    const alertStyle = {
        backgroundColor: type === 'error' ? '#f8d7da' : '#d1ecf1', // Red for error, blue for info
        color: type === 'error' ? '#721c24' : '#0c5460', // Dark red for error, dark blue for info
        border: type === 'error' ? '1px solid #f5c6cb' : '1px solid #bee5eb', // Border color based on type
        padding: '10px',
        borderRadius: '4px',
        margin: '10px 0',
    };
    return (
        <div className="alert" style={alertStyle}>
            {message}
        </div>
    );
}

export default Alert;

