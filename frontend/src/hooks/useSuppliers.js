import { useEffect, useState, useCallback } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSuppliers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/suppliers`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to load suppliers');
      }

      const data = await response.json();
      setSuppliers(data);
    } catch (err) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  const createSupplier = useCallback(async (supplier) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/suppliers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(supplier),
      });

      if (!response.ok) {
        throw new Error('Failed to create supplier');
      }

      const data = await response.json();
      setSuppliers((current) => [...current, data]);
      return data;
    } catch (err) {
      setError(err.message || 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateSupplier = useCallback(async (id, updates) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/suppliers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Failed to update supplier');
      }

      const data = await response.json();
      setSuppliers((current) => current.map((supplier) => (supplier.id === id ? data : supplier)));
      return data;
    } catch (err) {
      setError(err.message || 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteSupplier = useCallback(async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/suppliers/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete supplier');
      }

      setSuppliers((current) => current.filter((supplier) => supplier.id !== id));
      return true;
    } catch (err) {
      setError(err.message || 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSuppliers();
  }, [fetchSuppliers]);

  return {
    suppliers,
    loading,
    error,
    fetchSuppliers,
    createSupplier,
    updateSupplier,
    deleteSupplier,
  };
};

export default useSuppliers;
