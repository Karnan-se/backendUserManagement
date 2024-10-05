import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";




const AdminPrivateRoute = ()=>{
    const adminState = useSelector(state=>state.adminauth.userInfo)
    console.log("adminState", adminState)

    return adminState? <Outlet /> : <Navigate to='/admin/login' replace/>
    
}
export default AdminPrivateRoute;