//File: src/hooks/useDashboard.js

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/api/dashboard');
      setStats(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return {
    stats,
    loading,
    error,
    refresh: fetchDashboard,
  };
};

export default useDashboard;

