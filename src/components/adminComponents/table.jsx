import React, { useState } from 'react';
import axios from "axios"
import { useDeleteUserDataMutation } from '../../features/adminApiSlice.jsx';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Table({ database }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteUser] = useDeleteUserDataMutation()

  const navigate = useNavigate()



  const filteredData = searchQuery? database?.userData.filter(data =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        data.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : database?.userData; 

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete =async (userId)=>{
    console.log("clicked")
    // try {
    //   axios.post("http://localhost:3000/api/admin/deleteUser", {
    //     id:userId,
    //   })
    // } catch (error) {
    //   console.error("Error deleting user:", error);
      
    // }
    console.log(userId, "userId")
    try {
      const res = await deleteUser({id:userId}).unwrap();
      console.log(res);
      
    } catch (error) {
      console.log(error.message)
      
    }
   
  }

  const handlEdit = (userId)=>{
    console.log("adminDashboard/edit/:userId")
  
    navigate(`/admindashboard/editUser/${userId}`)
    

  }



  return (
    <> 
      <div className="max-w-5xl mx-auto">
     
        <div className="mb-4">
          <input 
            type="text" 
            value={searchQuery} 
            onChange={handleSearchChange} 
            placeholder="Search by name or email..." 
            className="border px-4 py-2 w-full"
          />
        </div>

      
        <div className="grid grid-cols-5 font-semibold bg-gray-100 p-4">
          <div className="col-span-1">Profile Pic</div>
          <div className="col-span-1">Name</div>
          <div className="col-span-1">Email</div>
          <div className="col-span-1">EDIT</div>
          <div className="col-span-1">DELETE</div>
        </div>

        {filteredData && filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <div key={index} className="grid grid-cols-5 border-b p-4">
              <img 
                src={`http://localhost:3000${data.ProfilePicture}`} 
                alt="Profile" 
                className="w-20 h-20 object-cover rounded-full"
              />
              <div className="col-span-1">{data.name}</div>
              <div className="col-span-1">{data.email}</div>
              <div className="btn">
                <input type="button" value={"EDIT"} className="btn border px-8 cursor-pointer"  onClick={()=>handlEdit(data._id)}/>
              </div>
              <div className="btn">
                <input type="button" value={"DELETE"} onClick={(()=>handleDelete(data._id))}/>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4">No users found</div>
        )}
      </div>
    </>
  );
}
