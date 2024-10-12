import Table from "../../components/adminComponents/table"
import NavBarComponent from "../../components/adminComponents/adminNav.jsx"
import { useSelector } from "react-redux"
import { useGetUsersDataQuery } from "../../features/adminApiSlice.jsx"
import { useEffect, useState } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"


export default function AdminDashboard(){

   

    const {data, isSuccess, isLoading} = useGetUsersDataQuery()
    const {pathname} = useLocation()
    const { userId } = useParams();
    

    const isEditRoute = pathname.includes('/editUser');
    const iSAddRoute = pathname.includes('/adduser');

    if(data){
        console.log(data)
    }
    let userData
    if(isEditRoute && isSuccess){
        userData=  data.userData.filter(user=>user._id == userId)
        console.log(userData,"filteredData")
    }
    
    
   
    let Content
    if(isEditRoute){
        Content=<Outlet context={isSuccess?userData[0]:null}/>
       

     } else if(iSAddRoute){
        Content=<Outlet/>
               
    }else{
        Content= <Table database={isSuccess? data:isLoading}  /> 

    }

    return(
        <>
        <NavBarComponent/>
        {/* <Table database={isSuccess? data:isLoading} setRender={setRender} />  */}
        {Content}
        </>
    )



}