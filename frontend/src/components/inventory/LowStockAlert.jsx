//src/components/inventory/LowStockAlert.jsx
import React from 'react';
import "./Inventory.css";

const LowStockAlert = ({ lowStockItems }) => {
    return (
        <div className="low-stock-alert">
            <h3>Low Stock Alert</h3>
            {lowStockItems.length > 0 ? (
                <ul>
                    {lowStockItems.map((item, index) => (
                        <li key={index}>
                            {item.product} - {item.quantity} left
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No low stock items.</p>
            )}
        </div>
    );
}

export default LowStockAlert;
