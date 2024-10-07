import asyncHandler from "express-async-handler"
import Admin from "../models/adminModel.js"
import { fetchUser,  updateuser } from "../utils/adminHelper/adminHelpers.js";
import { passwordHash } from "../utils/adminHelper/passwordHash.js";
import { passWordCompare } from "../utils/adminHelper/passwordcompare.js";
import generatAdminTOken from "../utils/adminToken/generateAdminToken.js";
import User from "../models/userModel.js";


const register = async(req, res)=>{
    try{
        const {email, password, name} = req.body;
        console.log(email, password, name);
    
        if(!email || !password){
            res.status(401)
            throw new Error("Email or Password is missing")
        }
        const existingAdmin = await Admin.find({email});
        if(!existingAdmin) return res.status(400).json({message: "Admin Already existing"})
    
        const hashedPassword = await passwordHash(password)
        const newAdmin =  await Admin.create({
            email,
            password:hashedPassword,
            name,

        })
        res.status(201).json({message:"Admin created Successfully"})


    }catch(e){
        console.error(e.message)
        
    }
}
 const adminLogin = async(req, res)=>{

    try {
    const {email, password} = req.body;
    console.log(email, password)
    
    if(!email|| !password){
        res.status(401)
        throw new Error("Email and Password is required");
    }
    const admin = await Admin.findOne({email});

    if(!admin){
        res.status(401).json({message:"Email is not Matching"})
        return;
    }
     const hashedpassword = await passWordCompare(password, admin.password)
     if(!hashedpassword){
        console.log("password is not matching");
        res.status(401).json({message:"Password is not Matching"})
        return;
        
     }
     if(admin && hashedpassword){
     generatAdminTOken(res, admin._id);
     }
     
     const registerUser ={
        name:admin.name,
        email:admin.email, 
     }

     res.status(201).json({message:"successfully Logged In",registerUser})

 }catch(error){
    console.error(error.message)
 }

}
const getUsersData = async(req, res)=>{
    try {
        const userData = await User.find({})
        
        
    } catch (error) {
        
    }
}
 


export {
    register,
    adminLogin,
}