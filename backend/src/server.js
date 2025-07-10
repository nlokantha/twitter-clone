import express from "express"
import cors from "cors"
import {clerkMiddleware} from "@clerk/express"

import { ENV } from "./config/env.js"
import { connectDB } from "./config/db.js"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"


const app = express()
connectDB()

app.use(cors())
app.use(express.json())

app.use(clerkMiddleware())


app.get("/",(req,res)=>res.send("Hello world"))


app.use("/api/users",userRoutes)
app.use("/api/post",postRoutes)

// error handling middleware
app.use((err,req,res)=>{
    console.error("Unhandled error",err)
    res.status(500).json({error:err.message || "Internal Server Error"})
})






app.listen(ENV.PORT,()=>console.log("Server is up and running on port",ENV.PORT))