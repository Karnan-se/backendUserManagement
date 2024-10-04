import mongoose from "mongoose";
import { type } from "os";

const adminSchema = mongoose.Schema({

   name:{
    type:String,
    required:true
   }, 
   email:{
    type:String,
    required:true,

   },
   password:{
    type:String,
    required:true,

   },
   createdAt :{
    type:String,
    required:false,
    default:Date.now()
   }
 
})

const Admin = mongoose.model("Admin", adminSchema)
export default Admin;