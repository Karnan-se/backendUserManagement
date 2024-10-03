
import express from "express"
import dotenv  from "dotenv"
import cookieParser from "cookie-parser"
import connectDb from "./config/db.js"

import adminRoute from "./routes/adminRoute.js"
import userRoute from "./routes/userRoute.js"





const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(express.static("./public"))
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT ||  3000

connectDb()
app.get("/", (req, res)=>{
    console.log("get ")
    res.send("server is ready")

})
app.use("/api/admin", adminRoute)
app.use("api/user", userRoute)


app.listen(port, ()=>{
    console.log(`server_Started${port}`) })
