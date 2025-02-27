import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    name:{
         type:String,
         required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    ProfilePicture:{
        type:String,
        required:false,
    }
})

const User =mongoose.model("user", userSchema)

export default User;