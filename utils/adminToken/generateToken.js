import { strict } from "assert"

import jwt from "jsonwebtoken"


const GenerateToken = (res, userId)=>{
    const token = jwt.sign({userId}, process.env.jwt_secret,{
        expiresIn :"30d"
    })

    res.cookie("jwt", token, {
        httpOnly:true,
        secure:process.env.Node_ENV !== "development",
        sameSite:strict,
        maxAge:  30 * 24 * 60 * 60 * 1000
    })
}

export default GenerateToken;
