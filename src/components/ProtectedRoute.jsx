
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('auth-token')

    if(!token){
        window.location.href = '/register'
        return null;
    }
    return(
        <>
        {token && children}
        </>
    )
}

export default ProtectedRoute;