//File: src/components/inventory/InventoryTable.jsx
import React from 'react';
import SaleTable from './SaleTable';
import PurchaseTable from './PurchaseTable';
import "./Inventory.css";

const InventoryTable = ({ sales, purchases }) => {
    return (
        <div className="inventory-table">
            <div className="sales-section">
                <h2>Sales</h2>
                <SaleTable sales={sales} />
            </div>
            <div className="purchases-section">
                <h2>Purchases</h2>
                <PurchaseTable purchases={purchases} />
            </div>
        </div>
    );
}

export default InventoryTable;

