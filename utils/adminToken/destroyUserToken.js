
const destroyUserToken = async(req, res)=>{
    try{
        res.cookie("Jwt",jwtToken="",{
            httpOnly:true,
            // secure:process.env.NODE_ENV !== "development",
            // sameSite:"strict",
            maxAge :new Date(0)
        } )
        console.log("cookiee Deleted")
    }catch(e){
        console.log(e.message);
    }
}

export {destroyUserToken}
