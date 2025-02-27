import { passwordHash } from "../utils/adminHelper/passwordHash.js";
import User from "../models/userModel.js";
import generateToken from "../utils/adminToken/generateToken.js";
import { passWordCompare } from "../utils/adminHelper/passwordcompare.js";
import mongoose, { Mongoose } from "mongoose";
import { destroyUserToken } from "../utils/adminToken/destroyUserToken.js";





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

        const userString =  req.user
        console.log(userString, "req, user")
       
       const ObjectId= new mongoose.Types.ObjectId(userString.userId)
       console.log(ObjectId)
       
       
        if(ObjectId){
            const userData = await User.findById({_id: ObjectId});
            if(!userData){
               res.status(401) 
               throw new Error("user not Found")
            }
            console.log("success")
           return res.status(200).json({message:"userData found", userData})


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

const userLogout = async(req, res)=>{
    try{
        destroyUserToken(req, res)
        return res.status(200).json({message:"Successfully Logged Out and Jwt Cleared"})

    }catch(e){
        console.log(e.message)
    }
}

const userUpdate = async(req, res)=>{
    try {
        console.log("updateData")
        const {_id, name , email, } = req.body;

       const ObjectId= new mongoose.Types.ObjectId(_id)
    
        console.log(name, email, _id, "from Front End")

        let profilePicture
        if(req.file){
         profilePicture =`/uploads/${req.file.filename}` 
        console.log(profilePicture,"propic")
        }

        let userDetails = await User.findById({_id:ObjectId});
        if(userDetails){
           userDetails.set({name, email})
            if(req.file){
                console.log("saving here")
              await userDetails.set({ProfilePicture: profilePicture})
              
            }
        }
            const dataSave=await userDetails.save()
            
        
        if(dataSave){
            res.status(200).json({message:"userSaved SuccessFully" ,dataSave})
        }

    } catch (error) {
        console.log(error.message)
        
    }
}


export {
    register,
    getUserData,
    userlogin,
    userLogout,
    userUpdate

}