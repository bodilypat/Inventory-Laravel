//File: src/components/inventory/CustomerForm.jsx
import React, { useState } from 'react';
import "./Inventory.css";

const CustomerForm = ({ onSubmit }) => {
    const [customer, setCustomer] = useState({
        name: '',
        contact: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevCustomer => ({
            ...prevCustomer,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(customer); 
    }

    return (
        <form className="customer-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Customer Name"
                value={customer.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="contact"
                placeholder="Contact Information"
                value={customer.contact}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={customer.email}
                onChange={handleChange}
            />
            <button type="submit">Add Customer</button>
        </form>
    );
};

export default CustomerForm;

