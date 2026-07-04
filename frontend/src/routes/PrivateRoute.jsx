//File: src/routes/PrivateRoute.js 
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated 
        ? <Outlet />
        : <Navigate to="/login" replace />;
};

export default PrivateRoute;

