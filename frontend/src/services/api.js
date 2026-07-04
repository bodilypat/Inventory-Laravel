//File: src/services/api.js
import axios from 'axios';

// Base axios instance for API calls
const API_BASE_URL = process.env.VUE_APP_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	withCredentials: true,
});

// Authorization token management
let authToken = null;

export function setAuthToken(token) {
	authToken = token;
	if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
	else delete api.defaults.headers.common.Authorization;
}

export function clearAuthToken() {
	authToken = null;
	delete api.defaults.headers.common.Authorization;
}

// Request interceptor to ensure auth header is present
api.interceptors.request.use(
	(config) => {
		if (!config.headers.Authorization && authToken) {
			config.headers.Authorization = `Bearer ${authToken}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Response interceptor to handle common errors
api.interceptors.response.use(
	(res) => res,
	(error) => {
		// You can extend this to handle 401 refresh token logic, logging, etc.
		return Promise.reject(error);
	}
);

// Convenience methods
export const get = (url, config = {}) => api.get(url, config).then((r) => r.data);
export const post = (url, data = {}, config = {}) => api.post(url, data, config).then((r) => r.data);
export const put = (url, data = {}, config = {}) => api.put(url, data, config).then((r) => r.data);
export const del = (url, config = {}) => api.delete(url, config).then((r) => r.data);

export const upload = (url, formData, config = {}) => {
	const cfg = Object.assign({ headers: { 'Content-Type': 'multipart/form-data' } }, config);
	return api.post(url, formData, cfg).then((r) => r.data);
};

export default api;
