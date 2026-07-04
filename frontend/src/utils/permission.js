//File: src/utils/permission.js 
export const canManageProducts = (user) => 
    ["admin", "manage"].includes(user.role);

export const isAdmin = (user) => 
    user.role === "admin"



