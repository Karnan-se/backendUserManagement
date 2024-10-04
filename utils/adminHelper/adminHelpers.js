import User from "../../models/userModel.js"

const fetchUser = async()=>{
   try {
    const users = await User.find({}, {name:1, email:1})
    return users;
    
   } catch (error) {
    throw new Error("Error fetching User", error)
    
   }
}

const deleteUser = async(userId)=>{
    try {
        const deleteUser = await User.findByIdAndDelete(userId);
        if(!deleteUser){
            return{success: false, message:"User Not Found"}
        }
        return {success:true, message:"User Deleted"}
    } catch (error) {
        throw new Error("Error deleting User", error)
        
    }
}

const updateuser = async(userData)=>{
    try {
        const user = await User.findById(userData.userId)
        if(!user){
            return{success: false, message: "user Updated SuccessFully"}
        } 
    } catch (error) {
        console.log(error.message)
    }
}
export {fetchUser, updateuser, deleteUser}