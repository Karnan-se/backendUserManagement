import NavBarComponent from "../../components/userComponents/navBar"
import { Outlet } from "react-router-dom"
import { useGetUserDataQuery } from "../../features/userApiSlice"
import { useSelector } from "react-redux"





export default function UserPage (){


    const {data, isLoading, isSuccess}= useGetUserDataQuery()
 
    return(
        <>
        <NavBarComponent/>
        {isSuccess && 
       <div className="text-4xl mt-11 font-bold text-blue-500 font-[cursive] animate-bounce shadow-lg">
       {`Welcome, ${data.userData.name}! 🎉`}
     </div>
     
}

        <Outlet context={isSuccess? data.userData: null}/>

        </>
    )

}
