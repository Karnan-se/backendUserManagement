import NavBarComponent from "../../components/userComponents/navBar"
import { Outlet } from "react-router-dom"
import { useGetUserDataQuery } from "../../features/userApiSlice"



export default function UserPage(){

    const {data, isLoading}= useGetUserDataQuery()

    return(
        <>
        <NavBarComponent/>

        <Outlet data={data}/>

        </>
    )

}
