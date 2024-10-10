import express from "express";
import upload  from "../middlwares/multer.js"
import { register, userlogin, userLogout } from "../controller/userController.js";
import { protect } from "../middlwares/userAuthMiddleware.js";
import { getUserData } from "../controller/userController.js";
import { userUpdate } from "../controller/userController.js";





const router = express.Router()

router.post("/register", register)
router.post("/login",userlogin )
router.post("/logout",userLogout )
router.post("/update",protect, upload, userUpdate )
router.get("/", protect,  getUserData )





export default router