//File: src/hooks/useTheme.js

import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'app-theme';

function getPreferredTheme() {
	if (typeof window === 'undefined') return 'light';
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === 'light' || stored === 'dark') return stored;
	} catch (e) {
		// ignore
	}
	const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	return prefersDark ? 'dark' : 'light';
}

export default function useTheme() {
	const [theme, setTheme] = useState(getPreferredTheme);

	useEffect(() => {
		try {
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(STORAGE_KEY, theme);
			}
		} catch (e) {
			// ignore
		}
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', theme);
		}
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
	}, []);

	return { theme, setTheme, toggleTheme };
}
