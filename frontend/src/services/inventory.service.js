//File: src/services/inventory.service.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const inventoryService = {
  // Get all inventory items
  getInventory: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/inventory`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get inventory item by ID
  getInventoryById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/inventory/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new inventory item
  createInventory: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/inventory`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update inventory item
  updateInventory: async (id, data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/inventory/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete inventory item
  deleteInventory: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/inventory/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get inventory summary/statistics
  getInventorySummary: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/inventory/summary`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Search inventory items
  searchInventory: async (query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/inventory/search`, {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default inventoryService;
