//File: src/components/common/Modal.jsx
import React from 'react';
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>    
                <h2 className="modal-title">{title}</h2>
                <div className="modal-body">{children}</div>
                <button className="modal-close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
