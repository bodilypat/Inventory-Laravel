//File: src/hooks/usePagination.js
import { useMemo, useState, useCallback } from 'react';

/**
 * usePagination hook
 * @param {Array} items - full list of items to paginate
 * @param {Object} options - configuration
 * @param {number} options.initialPage - 1-based initial page (default 1)
 * @param {number} options.itemsPerPage - items per page (default 10)
 * @returns {Object} pagination state and helpers
 */
export default function usePagination(items = [], options = {}) {
	const { initialPage = 1, itemsPerPage = 10 } = options;

	const [currentPage, setCurrentPage] = useState(() => Math.max(1, initialPage));

	const totalItems = (items && items.length) || 0;

	const totalPages = useMemo(() => {
		return Math.max(1, Math.ceil(totalItems / Math.max(1, itemsPerPage)));
	}, [totalItems, itemsPerPage]);

	// keep currentPage in range when items or itemsPerPage change
	useMemo(() => {
		if (currentPage > totalPages) setCurrentPage(totalPages);
		if (currentPage < 1) setCurrentPage(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [totalPages]);

	const currentItems = useMemo(() => {
		const start = (currentPage - 1) * itemsPerPage;
		const end = start + itemsPerPage;
		return Array.isArray(items) ? items.slice(start, end) : [];
	}, [items, currentPage, itemsPerPage]);

	const goToPage = useCallback((page) => {
		const p = Number(page) || 1;
		const next = Math.min(Math.max(1, Math.floor(p)), totalPages);
		setCurrentPage(next);
	}, [totalPages]);

	const next = useCallback(() => {
		setCurrentPage((p) => Math.min(p + 1, totalPages));
	}, [totalPages]);

	const prev = useCallback(() => {
		setCurrentPage((p) => Math.max(p - 1, 1));
	}, []);

	const first = useCallback(() => setCurrentPage(1), []);
	const last = useCallback(() => setCurrentPage(totalPages), [totalPages]);

	const range = useCallback((visible = 5) => {
		const v = Math.max(1, visible);
		const half = Math.floor(v / 2);
		let start = Math.max(1, currentPage - half);
		let end = start + v - 1;
		if (end > totalPages) {
			end = totalPages;
			start = Math.max(1, end - v + 1);
		}
		const pages = [];
		for (let i = start; i <= end; i++) pages.push(i);
		return pages;
	}, [currentPage, totalPages]);

	return {
		currentPage,
		itemsPerPage,
		totalItems,
		totalPages,
		currentItems,
		setPage: goToPage,
		goToPage,
		next,
		prev,
		first,
		last,
		range,
	};
}
