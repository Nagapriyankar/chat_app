import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'

//create socket context comming from react
export const SocketContext = createContext()

//create a socket context provider
export const SocketContextProvier = ({children}) => {

    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()

    //initilize useEffect
    useEffect(() => {
        //if authenticated user available
        if (authUser) {
            const socket = io("http://localhost:5000")
            setSocket(socket)

            //cleanup
            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    },[])
 
    //application is wrap using SocketContext prvider, and entire app can use the value below
    return <SocketContext.Provider value={{socket, onlineUsers}}>{ children }</SocketContext.Provider>
}