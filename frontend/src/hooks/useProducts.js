//File: src/hooks/useProducts.js 

import { useState, useCallback } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleError = useCallback((error) => {
    const message = error?.message || 'Something went wrong';
    setError(message);
    setLoading(false);
    return Promise.reject(error);
  }, []);

  const getProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/products`);
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
      return data;
    } catch (error) {
      return handleError(error);
    }
  }, [handleError]);

  const getProduct = useCallback(
    async (id) => {
      if (!id) return null;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE}/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        const data = await response.json();
        setSelectedProduct(data);
        setLoading(false);
        return data;
      } catch (error) {
        return handleError(error);
      }
    },
    [handleError]
  );

  const createProduct = useCallback(
    async (payload) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE}/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          throw new Error(`Failed to create product: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts((prev) => [...prev, data]);
        setLoading(false);
        return data;
      } catch (error) {
        return handleError(error);
      }
    },
    [handleError]
  );

  const updateProduct = useCallback(
    async (id, payload) => {
      if (!id) return null;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE}/products/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          throw new Error(`Failed to update product: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts((prev) => prev.map((item) => (item.id === data.id ? data : item)));
        setSelectedProduct(data);
        setLoading(false);
        return data;
      } catch (error) {
        return handleError(error);
      }
    },
    [handleError]
  );

  const deleteProduct = useCallback(
    async (id) => {
      if (!id) return null;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE}/products/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Failed to delete product: ${response.statusText}`);
        }
        setProducts((prev) => prev.filter((item) => item.id !== id));
        if (selectedProduct?.id === id) {
          setSelectedProduct(null);
        }
        setLoading(false);
        return true;
      } catch (error) {
        return handleError(error);
      }
    },
    [handleError, selectedProduct]
  );

  return {
    products,
    selectedProduct,
    loading,
    error,
    setSelectedProduct,
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}

