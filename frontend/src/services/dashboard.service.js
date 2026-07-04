//File: src/services/dashboard.service.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

class DashboardService {
  /**
   * Get dashboard overview statistics
   */
  getDashboardStats() {
    return axios.get(`${API_BASE_URL}/dashboard/stats`);
  }

  /**
   * Get inventory summary
   */
  getInventorySummary() {
    return axios.get(`${API_BASE_URL}/dashboard/inventory-summary`);
  }

  /**
   * Get recent transactions
   */
  getRecentTransactions(limit = 10) {
    return axios.get(`${API_BASE_URL}/dashboard/recent-transactions`, {
      params: { limit }
    });
  }

  /**
   * Get sales data for charts
   */
  getSalesData(period = 'month') {
    return axios.get(`${API_BASE_URL}/dashboard/sales-data`, {
      params: { period }
    });
  }

  /**
   * Get top products
   */
  getTopProducts(limit = 5) {
    return axios.get(`${API_BASE_URL}/dashboard/top-products`, {
      params: { limit }
    });
  }

  /**
   * Get low stock items
   */
  getLowStockItems(threshold = 10) {
    return axios.get(`${API_BASE_URL}/dashboard/low-stock-items`, {
      params: { threshold }
    });
  }

  /**
   * Get user activity log
   */
  getUserActivityLog(limit = 20) {
    return axios.get(`${API_BASE_URL}/dashboard/activity-log`, {
      params: { limit }
    });
  }

  /**
   * Get dashboard data summary
   */
  getDashboardData() {
    return axios.get(`${API_BASE_URL}/dashboard`);
  }
}

export default new DashboardService();
