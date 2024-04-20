import { Server } from 'socket.io'
import http from 'http'
import express from 'express'

//create express app 
const app = express()  

//create http servr
const server = http.createServer(app)
const io = new Server(server, {
    //handle cors error create by socket
    cors: {     
        origin: ["http://localhost:3000"],
        methods : ["GET","POST"]
    }
})

//to send real time messages 
export const getReceiverSocketId = (receiverId) => {   //receiverId = userid
    return userSocketMap[receiverId]
}

//to get online users, object created
const userSocketMap = {}  //{userId : socketId}


//listen for connections in socket
io.on('connection', (socket) => {   
    //socket - user that is connected
    console.log("a user connected", socket.id)

    //to get user id when we login, receive it as agument from front end
    const userId = socket.handshake.query.userId

    if (userId != "undefined") userSocketMap[userId] = socket.id

    //io.emit() is used to send events to all the connecte clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap))   //whenever user connecte, thi will immediately send info like who is online and offline


    //socket.on() is use to listen to evnets, can be used both on client an server side 
    //this can be used in front end as well
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))  //send info to client wwhen user disconnects
    })
})   


export {app, io, server}