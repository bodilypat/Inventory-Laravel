//File: src/services/supplier.service.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const supplierService = {
  // Get all suppliers
  getAllSuppliers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/suppliers`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get supplier by ID
  getSupplierById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/suppliers/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Create new supplier
  createSupplier: async (supplierData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/suppliers`, supplierData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update supplier
  updateSupplier: async (id, supplierData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/suppliers/${id}`, supplierData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete supplier
  deleteSupplier: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/suppliers/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Search suppliers
  searchSuppliers: async (query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/suppliers/search`, {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get supplier contact
  getSupplierContact: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/suppliers/${id}/contact`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default supplierService;
