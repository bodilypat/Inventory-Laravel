//File: src/components/inventory/DashboardCards.jsx
import React from 'react';
import "./Inventory.css";

const DashboardCards = ({ totalProducts, totalStock, totalMovements }) => {
    return (
        <div className="dashboard-cards">
            <div className="card">
                <h3>Total Products</h3>
                <p>{totalProducts}</p>
            </div>
            <div className="card">
                <h3>Total Stock</h3>
                <p>{totalStock}</p>
            </div>
            <div className="card">
                <h3>Total Movements</h3>
                <p>{totalMovements}</p>
            </div>
        </div>
    );
};

export default DashboardCards;


