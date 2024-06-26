import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth_routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./mongodb/connectToMongoDB.js";

const PORT=process.env.PORT || 5000;
const app=express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.get("/",(req,res)=>{
//     res.send("hello")
// })


app.listen(PORT,()=> {

    connectToMongoDB();
    console.log(`Server is Running on port ${PORT}`)
});