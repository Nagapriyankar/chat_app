import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authRoutes.js"
import connectToMongo from "./middleware/connectToMongo.js"
import messageRoute from "./routes/messageRoute.js"
import userRoute from "./routes/userRoute.js"
import { app, server } from "./socket/socket.js"


//const app = express()  //express app is created in socket.io
const PORT = process.env.PORT || 5000

dotenv.config()

//middleware
app.use(express.json()) //to paarse the incoming req with json payloads (from req.bdy)
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/conversation", messageRoute)
app.use("/api/users", userRoute)

//check root route
app.get("/", (req, res) => {
    res.send("Chat Application")

})

//listen to server
server.listen(PORT, () => {
    connectToMongo()
    console.log(`Server is up and running on the port ${PORT}`)
})