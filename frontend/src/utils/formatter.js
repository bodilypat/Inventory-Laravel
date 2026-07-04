//File: src/utils/formatter.js 
export const formatPrice = (value) => 
    Number(value).toFixed(2);

export const formatPhone = (phone) =>
    phone.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");

export const formatStock = (qty) => 
    `${qty} psc`;

