// File: src/hooks/useReports.js
import { useCallback, useState } from 'react';

const API_BASE = process.env.REACT_APP_API_BASE || '';

export default function useReports() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleResponse = async (res) => {
		const text = await res.text();
		const data = text ? JSON.parse(text) : null;
		if (!res.ok) throw data || new Error(res.statusText);
		return data;
	};

	const getReports = useCallback(async (query = '') => {
		setLoading(true); setError(null);
		try {
			const res = await fetch(`${API_BASE}/api/reports${query ? `?${query}` : ''}`);
			const data = await handleResponse(res);
			setLoading(false);
			return data;
		} catch (err) {
			setError(err);
			setLoading(false);
			throw err;
		}
	}, []);

	const getReport = useCallback(async (id) => {
		setLoading(true); setError(null);
		try {
			const res = await fetch(`${API_BASE}/api/reports/${id}`);
			const data = await handleResponse(res);
			setLoading(false);
			return data;
		} catch (err) {
			setError(err);
			setLoading(false);
			throw err;
		}
	}, []);

	const createReport = useCallback(async (payload) => {
		setLoading(true); setError(null);
		try {
			const res = await fetch(`${API_BASE}/api/reports`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			const data = await handleResponse(res);
			setLoading(false);
			return data;
		} catch (err) {
			setError(err);
			setLoading(false);
			throw err;
		}
	}, []);

	const updateReport = useCallback(async (id, payload) => {
		setLoading(true); setError(null);
		try {
			const res = await fetch(`${API_BASE}/api/reports/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			const data = await handleResponse(res);
			setLoading(false);
			return data;
		} catch (err) {
			setError(err);
			setLoading(false);
			throw err;
		}
	}, []);

	const deleteReport = useCallback(async (id) => {
		setLoading(true); setError(null);
		try {
			const res = await fetch(`${API_BASE}/api/reports/${id}`, { method: 'DELETE' });
			const data = await handleResponse(res);
			setLoading(false);
			return data;
		} catch (err) {
			setError(err);
			setLoading(false);
			throw err;
		}
	}, []);

	return {
		loading,
		error,
		getReports,
		getReport,
		createReport,
		updateReport,
		deleteReport,
	};
}
