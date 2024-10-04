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
    }
})

const User =mongoose.Model("user", userSchema)

export default User;