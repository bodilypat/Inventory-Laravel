const API_BASE_URL = import.meta?.env?.VITE_API_BASE_URL || 'http://localhost:8000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const request = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || 'Request failed');
  }

  return data;
};

export const productService = {
  getProducts: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/products${query ? `?${query}` : ''}`);
  },

  getProductById: async (id) => request(`/products/${id}`),

  createProduct: async (product) => request('/products', {
    method: 'POST',
    body: JSON.stringify(product),
  }),

  updateProduct: async (id, product) => request(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
  }),

  deleteProduct: async (id) => request(`/products/${id}`, {
    method: 'DELETE',
  }),
};

export default productService;
