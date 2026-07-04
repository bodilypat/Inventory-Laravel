//File: src/hooks/useInventory.js

import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE_URL || '/api';

export default function useInventory() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInventory = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_BASE}/inventory`);
      setItems(response.data || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addItem = useCallback(async (item) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_BASE}/inventory`, item);
      setItems((prevItems) => [...prevItems, response.data]);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateItem = useCallback(async (id, updates) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(`${API_BASE}/inventory/${id}`, updates);
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? response.data : item))
      );
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteItem = useCallback(async (id) => {
    setLoading(true);
    setError(null);

    try {
      await axios.delete(`${API_BASE}/inventory/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return {
    items,
    loading,
    error,
    fetchInventory,
    addItem,
    updateItem,
    deleteItem,
  };
}

