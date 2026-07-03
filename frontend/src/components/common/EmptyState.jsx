//File: src/components/common/EmptyState.jsx
import React from 'react';
import "./Common.css";

const EmptyState = ({ message, icon }) => {
    return (
        <div className="empty-state">
            {icon && <div className="empty-state-icon">{icon}</div>}
            <div className="empty-state-message">{message}</div>
        </div>
    );
}

export default EmptyState;
