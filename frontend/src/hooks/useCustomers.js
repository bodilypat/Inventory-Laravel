//File: src/hooks/useCustomers.js
import { useState, useEffect, useCallback } from 'react';

// A custom hook to manage customers: list, get, create, update, delete, search, pagination
export default function useCustomers(baseUrl = '/api/customers') {
	const [customers, setCustomers] = useState([]);
	const [customer, setCustomer] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const [total, setTotal] = useState(0);

	const handleError = (err) => {
		setError(err);
		setLoading(false);
	};

	const fetchCustomers = useCallback(async (opts = {}) => {
		const p = opts.page || page;
		const pp = opts.perPage || perPage;
		const q = opts.query ? `&q=${encodeURIComponent(opts.query)}` : '';
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(`${baseUrl}?page=${p}&per_page=${pp}${q}`);
			if (!res.ok) throw new Error(`Failed to fetch customers: ${res.status}`);
			const data = await res.json();
			// Expecting { data: [...], meta: { total, page, per_page } } or plain array
			if (Array.isArray(data)) {
				setCustomers(data);
				setTotal(data.length);
			} else {
				setCustomers(data.data || []);
				setTotal((data.meta && data.meta.total) || (data.total ?? 0));
				setPage((data.meta && data.meta.page) || p);
				setPerPage((data.meta && data.meta.per_page) || pp);
			}
			setLoading(false);
		} catch (err) {
			handleError(err.message || err);
		}
	}, [baseUrl, page, perPage]);

	const getCustomer = useCallback(async (id) => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(`${baseUrl}/${id}`);
			if (!res.ok) throw new Error(`Failed to get customer: ${res.status}`);
			const data = await res.json();
			setCustomer(data);
			setLoading(false);
			return data;
		} catch (err) {
			handleError(err.message || err);
			return null;
		}
	}, [baseUrl]);

	const createCustomer = useCallback(async (payload) => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(`${baseUrl}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			if (!res.ok) {
				const errBody = await res.text();
				throw new Error(errBody || `Create failed: ${res.status}`);
			}
			const data = await res.json();
			// Optionally refresh list
			fetchCustomers();
			setLoading(false);
			return data;
		} catch (err) {
			handleError(err.message || err);
			return null;
		}
	}, [baseUrl, fetchCustomers]);

	const updateCustomer = useCallback(async (id, payload) => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(`${baseUrl}/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			if (!res.ok) {
				const errBody = await res.text();
				throw new Error(errBody || `Update failed: ${res.status}`);
			}
			const data = await res.json();
			fetchCustomers();
			setLoading(false);
			return data;
		} catch (err) {
			handleError(err.message || err);
			return null;
		}
	}, [baseUrl, fetchCustomers]);

	const deleteCustomer = useCallback(async (id) => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
			if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
			fetchCustomers();
			setLoading(false);
			return true;
		} catch (err) {
			handleError(err.message || err);
			return false;
		}
	}, [baseUrl, fetchCustomers]);

	const searchCustomers = useCallback((query, opts = {}) => {
		return fetchCustomers({ ...opts, query });
	}, [fetchCustomers]);

	useEffect(() => {
		fetchCustomers();
	}, [fetchCustomers]);

	return {
		customers,
		customer,
		loading,
		error,
		page,
		perPage,
		total,
		setPage,
		setPerPage,
		fetchCustomers,
		getCustomer,
		createCustomer,
		updateCustomer,
		deleteCustomer,
		searchCustomers,
	};
}
