import { useState, useEffect } from 'react';

/**
 * useDebounce hook
 * @param value any - value to debounce
 * @param delay number - debounce delay in ms (default 300)
 * @returns debounced value
 */
export default function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

