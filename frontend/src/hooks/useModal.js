//File: src/hooks/useModal.js
import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * useModal - simple modal state hook
 *
 * Returns:
 *  - isOpen: boolean
 *  - open(): open the modal
 *  - close(): close the modal
 *  - toggle(): toggle open state
 *  - modalRef: ref to attach to modal element to enable click-outside closing
 *
 * Options:
 *  - initial (boolean) initial open state
 */
export default function useModal(initial = false) {
	const [isOpen, setIsOpen] = useState(Boolean(initial));
	const modalRef = useRef(null);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);
	const toggle = useCallback(() => setIsOpen(prev => !prev), []);

	useEffect(() => {
		function handleKey(e) {
			if (e.key === 'Escape') close();
		}

		function handleClickOutside(e) {
			if (!isOpen) return;
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				close();
			}
		}

		document.addEventListener('keydown', handleKey);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleKey);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, close]);

	return { isOpen, open, close, toggle, modalRef };
}
