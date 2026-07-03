//File: src/components/inventory/SaleForm.jsx
import React, { useState } from 'react';
import "./Inventory.css";

const SaleForm = ({ onSubmit }) => {
    const [sale, setSale] = useState({
        product: '',
        quantity: '',
        totalPrice: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSale(prevSale => ({
            ...prevSale,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(sale);
        setSale({
            product: '',
            quantity: '',
            totalPrice: ''
        });
    }

    return (
        <form className="sale-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="product">Product:</label>
                <input
                    type="text"
                    id="product"
                    name="product"
                    value={sale.product}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={sale.quantity}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="totalPrice">Total Price:</label>
                <input
                    type="number"
                    id="totalPrice"
                    name="totalPrice"
                    value={sale.totalPrice}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit Sale</button>
        </form>
    );
};

export default SaleForm;
