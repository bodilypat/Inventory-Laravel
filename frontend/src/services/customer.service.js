//File: src/services/customer.service.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const customerService = {
  // Get all customers
  getAllCustomers: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/customers`, { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get customer by ID
  getCustomerById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/customers/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Create new customer
  createCustomer: async (customerData) => {
    try {
      const response = await axios.post(`${API_URL}/customers`, customerData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update customer
  updateCustomer: async (id, customerData) => {
    try {
      const response = await axios.put(`${API_URL}/customers/${id}`, customerData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete customer
  deleteCustomer: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/customers/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Search customers
  searchCustomers: async (query) => {
    try {
      const response = await axios.get(`${API_URL}/customers/search`, {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get customer orders
  getCustomerOrders: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/customers/${id}/orders`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default customerService;
