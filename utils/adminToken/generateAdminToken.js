import jwt from "jsonwebtoken";


const generatAdminTOken = (res, userId)=>{
    console.log(userId, "cokkies")
    const jwtToken = jwt.sign({userId}, process.env.JWT_SECRET_KEY_ADMIN,{expiresIn:"30d"})

    console.log(jwtToken, "cookie")

    res.cookie('adminJwt', jwtToken, {
        httpOnly: true,
        // secure: process.env.NODE_ENV !== 'development',
        // sameSite: 'none',
        maxAge: 30 * 24 * 60 * 60 * 1000 
    });

    console.log("jwtTokenCreated name : adminJwt")

}
export default generatAdminTOken