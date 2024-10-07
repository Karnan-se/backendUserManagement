import jwt from "jsonwebtoken"
import Admin from "../models/adminModel.js"


const authenticateAdmin =async(req, res, next)=>{
    try {
        const TokenFromRequest = req.cookies.adminJwt

        if(!TokenFromRequest){
            res.status(401);
            throw new Error(`Authentication Failed: No Token`)
        }

            const decodedTokenData = jwt.verify(TokenFromRequest, process.env.JWT_SECRET_KEY_ADMIN)
            console.log("authMiddleWarejwt:",decodedTokenData.userId)
            const requestedUser = await Admin.findById(decodedTokenData.userId).select("-password")
            if(requestedUser){
                req.user = requestedUser;
                next()
            }


        
        
    } catch (error) {
        res.status(401)
        throw new Error('Authentication Failed, Invalid Token')
        
    }
   
}
export default authenticateAdmin;
