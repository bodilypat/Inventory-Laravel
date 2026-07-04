//File: src/services/purchase.service.js

import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_URL || 'http://localhost:8000/api';

const purchaseService = {
  // Get all purchases
  getPurchases() {
    return axios.get(`${API_BASE_URL}/purchases`);
  },

  // Get purchase by ID
  getPurchaseById(id) {
    return axios.get(`${API_BASE_URL}/purchases/${id}`);
  },

  // Create new purchase
  createPurchase(purchaseData) {
    return axios.post(`${API_BASE_URL}/purchases`, purchaseData);
  },

  // Update purchase
  updatePurchase(id, purchaseData) {
    return axios.put(`${API_BASE_URL}/purchases/${id}`, purchaseData);
  },

  // Delete purchase
  deletePurchase(id) {
    return axios.delete(`${API_BASE_URL}/purchases/${id}`);
  },

  // Get purchases with filters
  getPurchasesFiltered(filters) {
    return axios.get(`${API_BASE_URL}/purchases`, { params: filters });
  },

  // Get purchase items
  getPurchaseItems(purchaseId) {
    return axios.get(`${API_BASE_URL}/purchases/${purchaseId}/items`);
  },

  // Add purchase item
  addPurchaseItem(purchaseId, itemData) {
    return axios.post(`${API_BASE_URL}/purchases/${purchaseId}/items`, itemData);
  },

  // Update purchase item
  updatePurchaseItem(purchaseId, itemId, itemData) {
    return axios.put(`${API_BASE_URL}/purchases/${purchaseId}/items/${itemId}`, itemData);
  },

  // Delete purchase item
  deletePurchaseItem(purchaseId, itemId) {
    return axios.delete(`${API_BASE_URL}/purchases/${purchaseId}/items/${itemId}`);
  }
};

export default purchaseService;
