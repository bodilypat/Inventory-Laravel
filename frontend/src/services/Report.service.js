//File: src/services/Report.service.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

class ReportService {
  /**
   * Fetch all reports
   */
  getAllReports() {
    return axios.get(`${API_BASE_URL}/reports`);
  }

  /**
   * Fetch a single report by ID
   */
  getReportById(id) {
    return axios.get(`${API_BASE_URL}/reports/${id}`);
  }

  /**
   * Create a new report
   */
  createReport(reportData) {
    return axios.post(`${API_BASE_URL}/reports`, reportData);
  }

  /**
   * Update an existing report
   */
  updateReport(id, reportData) {
    return axios.put(`${API_BASE_URL}/reports/${id}`, reportData);
  }

  /**
   * Delete a report
   */
  deleteReport(id) {
    return axios.delete(`${API_BASE_URL}/reports/${id}`);
  }

  /**
   * Fetch inventory report
   */
  getInventoryReport(filters = {}) {
    return axios.get(`${API_BASE_URL}/reports/inventory`, { params: filters });
  }

  /**
   * Fetch sales report
   */
  getSalesReport(filters = {}) {
    return axios.get(`${API_BASE_URL}/reports/sales`, { params: filters });
  }

  /**
   * Fetch stock movement report
   */
  getStockMovementReport(filters = {}) {
    return axios.get(`${API_BASE_URL}/reports/stock-movement`, { params: filters });
  }

  /**
   * Export report to CSV
   */
  exportReportToCSV(reportType, filters = {}) {
    return axios.get(`${API_BASE_URL}/reports/export/${reportType}`, {
      params: { ...filters, format: 'csv' },
      responseType: 'blob',
    });
  }

  /**
   * Export report to PDF
   */
  exportReportToPDF(reportType, filters = {}) {
    return axios.get(`${API_BASE_URL}/reports/export/${reportType}`, {
      params: { ...filters, format: 'pdf' },
      responseType: 'blob',
    });
  }

  /**
   * Generate custom report
   */
  generateCustomReport(reportConfig) {
    return axios.post(`${API_BASE_URL}/reports/custom`, reportConfig);
  }

  /**
   * Get report statistics/summary
   */
  getReportSummary(reportType) {
    return axios.get(`${API_BASE_URL}/reports/summary/${reportType}`);
  }
}

export default new ReportService();
