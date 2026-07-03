//File: src/components/inventory/StockStatus.jsx
import React from 'react';
import StockBadge from './StockBadge';
import "./Inventory.css";

const StockStatus = ({ stock }) => {
    return (
        <div className="stock-status">
            <h3>Stock Status</h3>
            <StockBadge stock={stock} />
        </div>
    );
}

export default StockStatus;

