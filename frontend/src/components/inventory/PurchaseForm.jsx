//File: src/components/inventory/PurchaseForm.jsx
import React, { useState } from 'react';
import "./Inventory.css";

const PurchaseForm = ({ onSubmit }) => {
    const [purchase, setPurchase] = useState({
        product: '',
        quantity: '',
        totalPrice: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPurchase(prevPurchase => ({
            ...prevPurchase,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(purchase);
        setPurchase({
            product: '',
            quantity: '',
            totalPrice: ''
        });
    }

    return (
        <form className="purchase-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="product">Product:</label>
                <input
                    type="text"
                    id="product"
                    name="product"
                    value={purchase.product}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={purchase.quantity}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="totalPrice">Total Price:</label>
                <input
                    type="number"
                    id="totalPrice"
                    name="totalPrice"
                    value={purchase.totalPrice}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Purchase</button>
        </form>
    );
};

export default PurchaseForm;
