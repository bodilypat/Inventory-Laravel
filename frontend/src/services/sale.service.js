//File: src/services/sale.service.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const saleService = {
  // Get all sales
  getAllSales: async (params = {}) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/sales`, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get sale by ID
  getSaleById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/sales/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new sale
  createSale: async (saleData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/sales`, saleData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update sale
  updateSale: async (id, saleData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/sales/${id}`, saleData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete sale
  deleteSale: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/sales/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get sales by date range
  getSalesByDateRange: async (startDate, endDate) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/sales/date-range`, {
        params: { start_date: startDate, end_date: endDate }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get sales statistics
  getSalesStatistics: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/sales/statistics`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default saleService;
