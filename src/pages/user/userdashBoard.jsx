import NavBarComponent from "../../components/userComponents/navBar"
import { Outlet } from "react-router-dom"
import { useGetUserDataQuery } from "../../features/userApiSlice"



export default function UserPage (){

    const {data, isLoading, isSuccess}= useGetUserDataQuery()
    if(isSuccess, data){

        console.log(data.userData)
    }


    return(
        <>
        <NavBarComponent/>

        <Outlet context={isSuccess? data.userData: null}/>

        </>
    )

}
