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

//listen for connections in socket
io.on('connection', (socket) => {   
    //socket - user that is connected
    console.log("a user connected", socket.id)

    //socket.on() is use to listen to evnets, can be used both on client an server side 
    //this is used in front end as well
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
    })
})   


export {app, io, server}