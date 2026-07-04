//File: src/utils/validator.js 
export const isEmail = (email) =>
    /\$+@\S+\.\S+/.test(email);

export const isPositiveNumber = (value) => 
    Number(value) > 0;

export const isRequired = (value) =>
    value !== "";

