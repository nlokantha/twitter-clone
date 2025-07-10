import express from "express"
import cors from "cors"
import {clerkMiddleware} from "@clerk/express"

import { ENV } from "./config/env.js"
import { connectDB } from "./config/db.js"
import userRoutes from "./routes/user.route.js"


const app = express()
connectDB()

app.use(cors())
app.use(express.json())

app.use(clerkMiddleware())


app.get("/",(req,res)=>res.send("Hello world"))


app.use("/api/users",userRoutes)






app.listen(ENV.PORT,()=>console.log("Server is up and running on port",ENV.PORT))