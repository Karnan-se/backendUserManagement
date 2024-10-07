
import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";


const protect = asyncHandler(async(req,res,next)=>{
    console.log("reached At middleWare")
    // let token 
    // console.log(req.cookies)
    token = req.cookies.jwt;
    if(token){
        console.log(token)
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
            console.log(req.user);
            next()
        }catch(error){
           res.status(401)
           throw new Error('Unauthorised, invalid token') 
        }
    }else{
        res.status(400)
        throw new Error('Unauthorised, no token')
    }
})


export {protect}