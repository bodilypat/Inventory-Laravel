//File: src/routes/RoleRoute.js
import { Navigate, outlet } from "react-router-dom";
import { useAuth} from "../hooks";

const RoleRoute = ({ roles }) => {
    const { user } = useAuth();

    return roles.include(user?.role)
        ? <Outlet />
        : <Navigate to="/dashboard" replace />
};

export default RoleRoute;

