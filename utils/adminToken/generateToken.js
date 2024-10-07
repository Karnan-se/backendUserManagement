import { strict } from "assert"

import jwt from "jsonwebtoken"


const generateToken = (res, userId)=>{
    console.log(userId);
    console.log(process.env.JWT_SECRET)
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn :"30d"
    })

    const cookieOptions= {
        httpOnly: false,         // Prevent client-side JavaScript access to the cookie
        secure: false,  // Use secure cookies in production (HTTPS)
        sameSite: "None",      // Helps prevent CSRF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    }
    try{

     res.cookie('Jwt',token,cookieOptions)
     return
    }catch(e){
        console.log(e.message)
    }
 
    
}


export default generateToken;
