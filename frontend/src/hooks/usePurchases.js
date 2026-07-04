//File: src/hooks/usePurchases.js

import { useCallback, useEffect, useState } from 'react';

const API_BASE = '/api/purchases';

export default function usePurchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPurchases = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_BASE);
      if (!response.ok) {
        throw new Error(`Failed to fetch purchases: ${response.statusText}`);
      }
      const data = await response.json();
      setPurchases(data);
    } catch (err) {
      setError(err.message || 'Unable to load purchases');
    } finally {
      setLoading(false);
    }
  }, []);

  const createPurchase = useCallback(async (purchase) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchase),
      });

      if (!response.ok) {
        throw new Error(`Failed to create purchase: ${response.statusText}`);
      }

      const newPurchase = await response.json();
      setPurchases((prev) => [...prev, newPurchase]);
      return newPurchase;
    } catch (err) {
      setError(err.message || 'Unable to create purchase');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePurchase = useCallback(async (id, updates) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error(`Failed to update purchase: ${response.statusText}`);
      }

      const updatedPurchase = await response.json();
      setPurchases((prev) => prev.map((item) => (item.id === id ? updatedPurchase : item)));
      return updatedPurchase;
    } catch (err) {
      setError(err.message || 'Unable to update purchase');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deletePurchase = useCallback(async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete purchase: ${response.statusText}`);
      }

      setPurchases((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message || 'Unable to delete purchase');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPurchases();
  }, [fetchPurchases]);

  return {
    purchases,
    loading,
    error,
    fetchPurchases,
    createPurchase,
    updatePurchase,
    deletePurchase,
  };
}
