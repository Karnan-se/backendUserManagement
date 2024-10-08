
import jwt1 from "jsonwebtoken"
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";


const protect = asyncHandler(async(req,res,next)=>{
    console.log("reached At middleWare")
   
    console.log(req.cookies)
   let token = await req.cookies.Jwt;

        
        console.log(process.env.JWT_SECRET)
        try{
           jwt1.verify(token, process.env.JWT_SECRET, (err, decoded)=>{

            if(err){
                return res.status(403).json({message: "Token is not valid"})
            }
         
           req.user = decoded;
         
            next()
        });
        }catch(error){
            console.log(error.message)
           res.status(401)
           throw new Error('Unauthorised, Token Not found') 
        }
   
})


export {protect}