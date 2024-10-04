import asyncHandler from "express-async-handler"
import Admin from "../models/adminModel.js"
import { fetchUser, deleteUser, updateuser } from "../utils/adminHelpers";


// const generateAdminKEy =(res, userId)=>