// File: src/services/upload.service.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const uploadService = {
  upload(file, endpoint = '/upload', extraData = {}) {
    const formData = new FormData();
    formData.append('file', file);

    Object.entries(extraData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    return axios.post(`${API_URL}${endpoint}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  uploadMultiple(files, endpoint = '/upload', extraData = {}) {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('files[]', file);
    });

    Object.entries(extraData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    return axios.post(`${API_URL}${endpoint}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  remove(filePath, endpoint = '/upload/remove') {
    return axios.delete(`${API_URL}${endpoint}`, {
      data: { file_path: filePath },
    });
  },
};

export default uploadService;

