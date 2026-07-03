//src/components/inventory/StockMovementTable.jsx
import React from 'react';
import "./Inventory.css";

const StockMovementTable = ({ movements }) => {
    return (
        <table className="stock-movement-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {movements.map((movement, index) => (
                    <tr key={index}>
                        <td>{movement.date}</td>
                        <td>{movement.product}</td>
                        <td>{movement.quantity}</td>
                        <td>{movement.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StockMovementTable;
