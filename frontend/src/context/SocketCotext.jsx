import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'

//create socket context comming from react
 const SocketContext = createContext()

 //create hook to be able to consume outside
export const useSocketContext = () => {
    return useContext(SocketContext)
}

//create a socket context provider
export const SocketContextProvier = ({children}) => {

    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()

    //initilize useEffect
    useEffect(() => {
        //if authenticated user available
        if (authUser) {
            const socket = io("http://localhost:5000", {
                //to get userid when login, send it as agument to BE
                query: {
                    userId : authUser._id
                }
            })
            setSocket(socket)

            //once connected, to check online status using eventlistner
            //socket.on() is use to listen to evnets, can be used both on client an server side 
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })


            //cleanup
            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    },[authUser])
 
    //application is wrap using SocketContext prvider, and entire app can use the value below
    return <SocketContext.Provider value={{socket, onlineUsers}}>{ children }</SocketContext.Provider>
}