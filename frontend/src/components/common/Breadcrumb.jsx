//File: src/components/common/Breadcrumb.jsx
import React from 'react';
import "./Common.css";

const Breadcrumb = ({ items }) => {
    return (
        <nav className="breadcrumb">
            {items.map((item, index) => (
                <span key={index} className="breadcrumb-item">
                    {item}
                    {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
                </span>
            ))}
        </nav>
    );
}

export default Breadcrumb;

