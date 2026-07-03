//File: src/components/inventory/PurchaseTable.jsx
import React from 'react';
import "./Inventory.css";

const PurchaseTable = ({ purchases }) => {
    return (
        <table className="purchase-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {purchases.map((purchase, index) => (
                    <tr key={index}>
                        <td>{purchase.product}</td>
                        <td>{purchase.quantity}</td>
                        <td>${purchase.totalPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PurchaseTable;

