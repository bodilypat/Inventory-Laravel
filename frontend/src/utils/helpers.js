//File: src/utils/helpers.js 
export const capitalize = (text) => 
    text.charAt(0).toUpperCase() + text.slice(1);

export const generateSKU = () => 
    `SKU-${Date.now()}`;

export const randomId = () =>
    Math.random().toString(36).substring(2, 10);

