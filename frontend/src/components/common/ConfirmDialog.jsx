//File: src/components/common/ConfirmDialog.jsx
import React from 'react';
import "./Common.css.css";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="confirm-dialog">
            <div className="confirm-dialog-message">{message}</div>
            <div className="confirm-dialog-actions">
                <button className="confirm-dialog-button confirm" onClick={onConfirm}>Confirm</button>
                <button className="confirm-dialog-button cancel" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default ConfirmDialog;

