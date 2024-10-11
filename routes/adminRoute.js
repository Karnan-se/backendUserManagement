import express from "express"
import { deleteUser, getAllUsers, register } from "../controller/adminController.js";
import { adminLogin } from "../controller/adminController.js";
import { AdminLogout } from "../controller/adminController.js";
import authenticateAdmin from "../middlwares/adminAuthMiddleware.js";
import {adduser} from "../controller/adminController.js";
import upload from "../middlwares/multer.js";




const router  = express.Router()

router.post("/register", register)
router.route("/login").post(adminLogin)
router.post("/logout", AdminLogout)
router.get("/admindashboard", authenticateAdmin, getAllUsers)
router.post("/deleteUser",authenticateAdmin, deleteUser);
router.post("/addUser", authenticateAdmin, upload, adduser )







export default router;