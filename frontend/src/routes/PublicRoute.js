//File: src/routes/PubliRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "../hooks/";

const PublicRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated
        ? <Navigate to="/dashboard" replace  />
        : <Outlet />;
};

export default PublicRoute;

