import React, { useEffect, useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserRegisterMutation } from "../../features/userApiSlice.jsx";
import { validateForm } from "./validate.jsx";
import Swal from "sweetalert2";
import { setUserCredential } from "../../features/userAuthSlice.jsx";



  



export default function Registration() {


    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword, setConfirmPassword]= useState("")
    const [isSubmit, setSubmit] = useState(false)
    const [inputError, setError] = useState({
        name:false,
        email:false,
        password:false,
        confirmPassword:false
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [register, {isLoading, error, isError, isSuccess}] = useUserRegisterMutation()
    const isFirstRender = useRef(true);
  
    
useEffect(()=>{

     validateForm(name, email, password,confirmPassword, setError , isSubmit)


},[email,name,password, confirmPassword])

useEffect(()=>{
    console.log(inputError)
    // setSubmit(false)
},[inputError])

    const handleSubmit =async(e)=>{
        e.preventDefault();
        setSubmit(true)


    
        
        
  
        let isValid =  validateForm(name, email, password, confirmPassword, setError, true)

        console.log(isValid)


        if(!isValid  || password != confirmPassword){
            let errorMessage 
            if(inputError.name || inputError.name=="")errorMessage="name should be atleast charectors required"
            if(inputError.email)errorMessage="please enter the Valid email"
            if(inputError.password)errorMessage="password is atLeast 6 digit"
            if(password != confirmPassword)errorMessage="password not Matching"

            return Swal.fire({
                icon:"error",
                title:"oops",
                text:errorMessage
            })
        }




        try{
        
        
        const res = await register({name, email, password}).unwrap();
        console.log(res);
        Swal.fire({
            icon:"success",
            title:"Success",
            text:"User Created Successfully"

        })
        console.log(res.registeredUser);
        dispatch(setUserCredential({...res.registeredUser}))
        navigate("/")

        }catch(error){
            console.log(error.data)
            Swal.fire({
                icon:"error",
                title:"REGISTRATION FAILED",
                text:error.data.message?errorMessage:""

            })
        }

        
    }
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Create new Account
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    className="block w-full mt-1 border
                                     border-gray-300 
                                     rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <p className={`flex  ${inputError.name ? " text-red-500" : "hidden" }`}>Atleast 3 charectors required</p>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col border items-start">
                            <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`block w-full mt-1 
                                ${inputError.email ? "text-red-500 border-red-500 !important" : "border-gray-300"} 
                                rounded-md shadow-sm 
                                focus:border-indigo-300 
                                focus:ring-indigo-200 focus:ring-opacity-50`}
                            />

                            </div>
                            <p className={`flex  ${inputError.email  ? " text-red-500" : "hidden" }`}>InValid-Email</p>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                               
                            >
                                Password
                            </label>
                            <div className="flex flex-col border items-start">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="block w-full mt-1
                                     border-gray-300
                                      rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <p className={`flex  ${inputError.password  ? " text-red-500" : "hidden" }`}>Password must be at least 6 characters long</p>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col border items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    value={confirmPassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    className="block w-full mt-1
                                     border-gray-300
                                      rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <p className={`flex  ${inputError.confirmPassword ? " text-red-500" : "hidden" }`}>Password Not Matching</p>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                href="#"
                                
                            onClick={()=>navigate("/user/login")}>
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            onClick={(e)=>handleSubmit(e)}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}