//File: src/components/inventory/SaleTable.jsx
import React from 'react';
import "./Inventory.css";

const SaleTable = ({ sales }) => {
    return (
        <table className="sale-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {sales.map((sale, index) => (
                    <tr key={index}>
                        <td>{sale.product}</td>
                        <td>{sale.quantity}</td>
                        <td>${sale.totalPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SaleTable;

