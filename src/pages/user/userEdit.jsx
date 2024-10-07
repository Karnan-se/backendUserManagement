import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import { useGetUserDataQuery } from '../../features/userApiSlice';
export default function UserEdit(){

    const [image, setImage] = useState(null); 
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");

   

    // Handler for file input change
    const handleFileChange = (e) => {
      const file = e.target.files[0]; 
      if (file) {
        setImage(URL.createObjectURL(file)); 
      }
    };


    return(
        <>
       <div className="flex justify-center bg-slate-400 w-lg">
      <div className="flex-col  justify-center px-10 py-8">
        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="flex mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border w-96 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className=" mb-2 flex">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border w-96 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        {image && (
          <div className="mt-4 flex justify-center ">
            <img
              src={image}
              alt="Uploaded"
              className="w-96 h-96 object-cover rounded" 
            />
          </div>
        )}

        {/* File Upload */}
        <div className="mb-6">
          <label htmlFor="file" className="flex mb-2 ">Choose an Image</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            className="border w-96 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleFileChange}
          />
        </div>
        <div className='flex justify-end '>
            <button className='btn border hover:bg-slate-700 hover:text-yellow-50 w-24 rounded-md h-9 border-indigo-700 bg-blue-300'> Submit</button>
        </div>



       
      </div>
    </div>

        </>
    )
}