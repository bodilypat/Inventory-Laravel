//File: src/components/inventory/SupplierForm.jsx
import React, { useState } from 'react';
import "./Inventory.css";

const SupplierForm = ({ onSubmit }) => {
    const [supplier, setSupplier] = useState({
        name: '',
        contact: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplier(prevSupplier => ({
            ...prevSupplier,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(supplier); 
    }

    return (
        <form className="supplier-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Supplier Name"
                value={supplier.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="contact"
                placeholder="Contact Information"
                value={supplier.contact}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={supplier.email}
                onChange={handleChange}
            />
            <button type="submit">Add Supplier</button>
        </form>
    );
};

export default SupplierForm;
