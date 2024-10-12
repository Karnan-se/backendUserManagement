import { Form, Button, Image } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { validateForm } from './validate';
import Swal from 'sweetalert2';
import { useAdduserMutation } from "../../features/adminApiSlice";
import { useNavigate } from "react-router-dom";




export default function AddUser(){


  

    const [imageURl, setImageURl] = useState(null)
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState(null) 
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");
    const [isSubmit, setSubmit] = useState(false)
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
   
    const [error, setError] = useState({
      name:false,
      email:false,
      password:false,
      confirmPassword:false,
    })

    const [userRegister, {isLoading, isSuccess}] = useAdduserMutation()
    const navigate = useNavigate()




    useEffect(()=>{
      validateForm(name, email, password, confirmPassword, setError, true )
   
    },[name, email,password,confirmPassword ])

    useEffect(()=>{
      console.log(error)

    },[error])

    useEffect(()=>{
      console.log(imageFile)

    },[imageFile])


  

   

    // Handler for file input change
    const handleFileChange = (e) => {
      const file = e.target.files[0]; 
      if (file) {
        console.log(file)
        try{
          setImageFile(file);
          console.log("fiel UPLoaded")

        }catch(e){
          console.log(e.message)
        }
       
        setImage(URL.createObjectURL(file)); 
      }
    };



    const handleSubmit = async (e)=>{
      e.preventDefault();
      let isValid =  validateForm(name, email, password, confirmPassword, setError, true)
      console.log(isValid)
      if(!isValid){
        console.log("form not Valid")
        return Swal.fire({
          icon:"error",
          title:"Form Validation Failed"
        })
      }
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      if(imageFile){
        formData.append("profilePicture", imageFile)

      }
    
      for (let pair of formData.entries()) {
        if (pair[1] instanceof File) {
          console.log(`${pair[0]}:`, {
            name: pair[1].name,
            size: pair[1].size,
            type: pair[1].type
          });
        } else {
          console.log(`${pair[0]}:`, pair[1]);
        }
      }



      try {
        const res = await userRegister(formData).unwrap()
        console.log(res);
        if(res){
          Swal.fire({
            icon:"success",
            title:"Success",
            text:"User Details Updated",  
          })
          navigate("/admindashboard")
          
          
        }
        
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon:"error",
          title:"Failed",
          text:error.data.message
        })
        
      }
 
    }
    
    // const {ProfilePicture} = userData
    // console.log(ProfilePicture)
    // const imageUrl = `http://localhost:3000/backend/${imageURl}`


    return(
        <>
        <Form onSubmit={handleSubmit} encType='multipart/form-data'>  
  <div className="flex justify-center bg-slate-400 w-lg">
    <div className="flex-col justify-center px-10 py-8">
      {/* Name Input */}
      <div className="mb-2">
        <label htmlFor="name" className="flex mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={((e)=>setName(e.target.value))}
          className="border w-96 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
        />
      </div>
      <p className={`flex  ${error.name ? " text-red-500" : "hidden" }`}>At least 3 characters required</p>

      {/* Email Input */}
      <div className="mb-2">
        <label htmlFor="email" className="mb-2 flex">Email ID</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={((e)=>setEmail(e.target.value))}
          className="border w-96 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
        />
      </div>
      <p className={`flex  ${error.email ? " text-red-500" : "hidden" }`}>Invalid Email</p>

      {/* Password Input */}
      <div className="mb-6">
        <label htmlFor="password" className="mb-2 flex">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="border w-96 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <p className={`flex  ${error.password ? " text-red-500" : "hidden" }`}>At least 6 characters required</p>

      {/* Confirm Password Input */}
      <div className="mb-2">
        <label htmlFor="confirmPassword" className="mb-2 flex">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="border w-96 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />
      </div>
      <p className={`flex  ${error.confirmPassword ? " text-red-500" : "hidden" }`}>Password not Matching</p>

      {image && 
      <div className="mt-4 flex justify-center">
        <img
          src={image ? image : `http://localhost:3000${imageURl}`}
          alt="Uploaded"
          className="w-96 h-96 object-cover rounded-full"
        />
      </div>
}

      {/* File Upload */}
      <div className="mb-6">
        <label htmlFor="file" className="flex mb-2">Choose an Image</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          className="border w-96 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleFileChange}
        />
      </div>

      <div className="flex justify-end">
        <input type="submit" className="btn border hover:bg-slate-700 hover:text-yellow-50 w-24 rounded-md h-9 border-indigo-700 bg-blue-300" value="Submit" />
      </div>
    </div>
  </div>
</Form>


        </>
    )
}