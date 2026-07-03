//File: src/components/inventory/StockBadge.jsx
import React from 'react';
import "./Inventory.css";

const StockBadge = ({ stock }) => {
    const getBadgeColor = (stock) => {
        if (stock > 10) return 'green';
        if (stock >= 5) return 'yellow';
        return 'red';
    }

    return (
        <span className={`stock-badge ${getBadgeColor(stock)}`}>
            {stock}
        </span>
    );
}

export default StockBadge;

