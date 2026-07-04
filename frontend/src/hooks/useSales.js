//File: src/hooks/useSales.js
import { useState, useEffect, useCallback } from 'react';

const API_URL = '/api/sales';

const useSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResponse = async (response) => {
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      const message = data?.message || response.statusText || 'Request failed';
      throw new Error(message);
    }
    return data;
  };

  const fetchSales = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      const data = await handleResponse(response);
      setSales(Array.isArray(data) ? data : []);
      return data;
    } catch (err) {
      setError(err.message || 'Unable to fetch sales');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const createSale = useCallback(async (saleData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(saleData),
      });
      const data = await handleResponse(response);
      setSales((prev) => [...prev, data]);
      return data;
    } catch (err) {
      setError(err.message || 'Unable to create sale');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateSale = useCallback(async (id, saleData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(saleData),
      });
      const data = await handleResponse(response);
      setSales((prev) => prev.map((item) => (item.id === id ? data : item)));
      return data;
    } catch (err) {
      setError(err.message || 'Unable to update sale');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteSale = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      await handleResponse(response);
      setSales((prev) => prev.filter((item) => item.id !== id));
      return true;
    } catch (err) {
      setError(err.message || 'Unable to delete sale');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  return {
    sales,
    loading,
    error,
    fetchSales,
    createSale,
    updateSale,
    deleteSale,
  };
};

export default useSales;
