import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const createCategory = useCallback(async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/categories', payload);
      setCategories((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCategory = useCallback(async (id, payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`/api/categories/${id}`, payload);
      setCategories((prev) => prev.map((item) => (item.id === id ? response.data : item)));
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteCategory = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`/api/categories/${id}`);
      setCategories((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    loading,
    error,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};

export default useCategories;
