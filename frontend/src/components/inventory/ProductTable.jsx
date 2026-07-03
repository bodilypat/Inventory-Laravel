//File: src/components/common/inventory/ProducTable.jsx
import React from 'react';
import "./Inventory.css";

const ProductTable = ({ products }) => {
  return (
    <table className="product-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index) => (
                <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                    <td><img src={product.image} alt={product.name} className="product-table-image" /></td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default ProductTable;
