import express from "express"
import { deleteUser, getAllUsers, register } from "../controller/adminController.js";
import { adminLogin } from "../controller/adminController.js";
import { AdminLogout } from "../controller/adminController.js";




const router  = express.Router()

router.post("/register", register)
router.route("/login").post(adminLogin)
router.post("/logout", AdminLogout)
router.get("/admindashboard", getAllUsers)
router.post("/deleteUser", deleteUser);







export default router;