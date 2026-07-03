//File: src/components/inventory/Filters.jsx
import React from 'react';
import "./Inventory.css";

const Filters = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="filters">
            <label htmlFor="category">Filter by Category:</label>
            <select
                id="category"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="">All</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filters;

