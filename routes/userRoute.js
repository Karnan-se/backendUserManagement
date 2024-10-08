import express from "express";
import { register, userlogin } from "../controller/userController.js";
import { protect } from "../middlwares/userAuthMiddleware.js";
import { getUserData } from "../controller/userController.js";




const router = express.Router()

router.post("/register", register)
router.post("/login",userlogin )

router.get("/", protect, getUserData )





export default router