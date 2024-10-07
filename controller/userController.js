import { passwordHash } from "../utils/adminHelper/passwordHash.js";
import User from "../models/userModel.js";
import generateToken from "../utils/adminToken/generateToken.js";
import { passWordCompare } from "../utils/adminHelper/passwordcompare.js";
import { hash } from "bcrypt";



const register = async(req, res)=>{
    try{
        const {email, password, name} = req.body;
        console.log(email, password, name);
    
        if(!email || !password){
            res.status(401)
            throw new Error("Email or Password is missing")
        }
        const existingUser = await User.findOne({email});
        if(existingUser) {return res.status(400).json({message: "User Already existing"}) }
    
        const hashedPassword = await passwordHash(password)
        const newUser =  await User.create({
            email,
            password:hashedPassword,
            name,

        })
        const registeredUser = {
            email:newUser.email,
            name:newUser.name,
        }
        generateToken(res, newUser._id)

        res.status(201).json({message:"User created Successfully",registeredUser})


    }catch(e){
        console.error(e.message)
        
    }
}

const getUserData = async(req, res)=>{
    try{
        console.log("get Data")
       const userId = req.user;
       console.log(userId);
        if(userId){
            const userData = await User.findById({userId});
            if(!userData){
               res.status(401) 
               throw new Error("user not Found")
            }
            res.status(200).json({message:"userData found", userData})


        }
    }catch(e){
        console.log(e.message)

    }
}

const userlogin = async(req, res)=>{
    try{
        console.log("recieved at backEnd")
        const {email, password} = req.body;
        const userDetails = await User.findOne({email})
        if(!userDetails){
           return res.status(400).json({message:"User Not found"})
        }
       
           let hashedPassword = await passwordHash(password)
        
        const checkedPassword=await passWordCompare(password, hashedPassword)
        if(!checkedPassword){
            return res.status(401).json({message:"Password Not Matching"})
        }
        const userData ={
            name:userDetails.name,
            email:userDetails.email,
        }
const userId = userDetails._id.toString()
   generateToken(res, userId);
    
       return res.status(200).json({message:"Login Success", userData });
        


    }catch(e){
        console.log(e.message)
    }
}

export {
    register,
    getUserData,
    userlogin

}