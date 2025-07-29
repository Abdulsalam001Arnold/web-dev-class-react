import { Navigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
    const token = useUserStore((state) => state.token);

    const isTokenValid = () => {
        if (!token) {
            return false;
        }
        try {
            const decoded = jwtDecode(token);
            return decoded.exp > Date.now() / 1000;
        } catch (error) {
            return false;
        }
    };

    if (!isTokenValid()) {
        return <Navigate to='/login' replace />;
    }

    return children;
};

export default ProtectedRoute;