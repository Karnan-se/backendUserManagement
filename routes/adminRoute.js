import express from "express"
import { register } from "../controller/adminController.js";
import { adminLogin } from "../controller/adminController.js";




const router  = express.Router()

router.post("/register", register)
router.route("/login").post(adminLogin)







export default router;