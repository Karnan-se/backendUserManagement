
import express from "express"
import dotenv  from "dotenv"
import cookieParser from "cookie-parser"
import connectDb from "./config/db.js"
import cors from "cors"
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import adminRoute from "./routes/adminRoute.js"
import userRoute from "./routes/userRoute.js"
import { notFound, errorHandler } from "./middlwares/errormiddleware.js"





const app = express()
app.use(cors({
    origin: 'http://localhost:5173',   
    credentials: true                  
}));
dotenv.config()
app.use(express.json())
app.use(cookieParser())
// app.use(express.static("./public"))
app.use(express.urlencoded({extended:true}));

app.use(express.static('./photoes'));
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT ||  3000

connectDb()
app.get("/", (req, res)=>{
    console.log("get ")
    res.send("server is ready")

})
app.use("/api/admin", adminRoute)
app.use("/api/user", userRoute)


app.use(notFound)
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`server_Started${port}`) })
