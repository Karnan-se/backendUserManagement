import jwt from "jsonwebtoken";


const generatAdminTOken = (res, userId)=>{
    const jwtToken = jwt.sign({userId}, process.env.JWT_SECRET_KEY_ADMIN,{expiresIn:"30d"})

    res.cookie('adminJwt', jwtToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 
    });


   res.staus(200).json({message:"Token Created and cookie Set Succesfully"})
}
export default generatAdminTOken