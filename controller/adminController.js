import asyncHandler from "express-async-handler"
import Admin from "../models/adminModel.js"
import { fetchUser,  updateuser } from "../utils/adminHelper/adminHelpers.js";
import { passwordHash } from "../utils/adminHelper/passwordHash.js";
import { passWordCompare } from "../utils/adminHelper/passwordcompare.js";


const register = async(req, res)=>{
    try{
        const {email, password, name} = req.body;
    
        if(!email || !password){
            res.status(401)
            throw new Error("Email or Password is missing")
        }
        const existingAdmin = await Admin.find({email});
        if(!existingAdmin) res.status(400).json({message: "Admin Already existing"})
    
        const hashedPassword = await passwordHash(password)
        const newAdmin =  await Admin.create({
            email,
            password:hashedPassword,
            name,

        })
        res.status(201).json({message:"Admin created Successfully"})


    }catch(e){
        console.log(e.message)
        
    }
}
 const adminLogin = async(req, res)=>{
    const {email, password} = req.body;
    
    if(!email|| !password){
        res.status(401)
        throw new Error("Email and Password is required");
    }
    const check = await Admin.findOne({email});

    if(!check){
        res.status(401)
        throw new Error("Email Id doesnot Exists")

    }
     const hashedpassword = await passWordCompare(password, check.password)
     if(!hashedpassword){
        console.log("password is not matching");
        res.status(401)
        throw new Error("password is not Matching")
     }
     res.status(201).json({message:"successfully Logged In"})

 }
 


export {
    register,
    adminLogin,
}