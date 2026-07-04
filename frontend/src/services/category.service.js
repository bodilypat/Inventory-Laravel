import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const categoryService = {
  // Get all categories
  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get category by ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new category
  create: async (categoryData) => {
    try {
      const response = await axios.post(`${API_URL}/categories`, categoryData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update category
  update: async (id, categoryData) => {
    try {
      const response = await axios.put(`${API_URL}/categories/${id}`, categoryData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete category
  delete: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Search categories
  search: async (query) => {
    try {
      const response = await axios.get(`${API_URL}/categories/search`, {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default categoryService;
