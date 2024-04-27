import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from "path"

import authRoutes from "./routes/authRoutes.js"
import messageRoute from "./routes/messageRoute.js"
import userRoute from "./routes/userRoute.js"

import connectToMongo from "./middleware/connectToMongo.js"
import { app, server } from "./socket/socket.js"


//const app = express()  //express app is created in socket.io
const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()

//middleware
app.use(express.json()) //to paarse the incoming req with json payloads (from req.bdy)
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/conversation", messageRoute)
app.use("/api/users", userRoute)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

app.use(express.static(path.join(__dirname, "/frontend/dist")))   //static middleware to use static files like html, css

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))

})

//check root route
app.get("/", (req, res) => {
    res.send("Chat Application")

})

//listen to server
server.listen(PORT, () => {
    connectToMongo()
    console.log(`Server is up and running on the port ${PORT}`)
})