import { useSelector } from "react-redux"
import { Outlet, replace } from "react-router-dom"
import UserLogin from "./userLogin"
import { Navigate } from "react-router-dom"




export default function UserPrivateRoute(){

    const userInfo = useSelector(state=> state.userAuth.userInfo)


   

   let Component = userInfo ? <Outlet/> : <Navigate to={"/user/login"} replace/>

   return(
    <>
    {Component}
    </>
   )

}
