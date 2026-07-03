//File: src/components/common/Badge.jsx
import React from 'react';
import "./Common.css";

const Badge = ({ text, color }) => {
    const badgeStyle = {
        backgroundColor: color || '#007bff', // Default color if none is provided
    };
    return (
        <span className="badge" style={badgeStyle}>
            {text}
        </span>
    );
}

export default Badge;

