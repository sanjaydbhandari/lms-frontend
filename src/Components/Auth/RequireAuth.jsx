import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

function RequireAuth({allowedRoles}){
    const {isLoggedIn, role} = useSelector((state)=> state.auth);
    const location = useLocation();

    return isLoggedIn && allowedRoles.find((myrole)=> myrole == role) ? (
        <Outlet/>
    ):(
        isLoggedIn ? (<Navigate to="/denied"/>) : <Navigate to="/signin"/>
    )
}

export default RequireAuth;