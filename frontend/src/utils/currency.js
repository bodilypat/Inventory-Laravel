//File: src/utils/currency.js 
export const formatCurrency = (amount) => 
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);

    