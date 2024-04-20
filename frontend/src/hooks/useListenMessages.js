import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketCotext'
import useConversation from '../zustand/useConversation'

//message listener - receivers get the message immediately without need to refresh

const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        //listen for new message event 
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true
            setMessages([...messages, newMessage])
        })

        return () => socket.off("newMessage")
    }, [socket, setMessages, messages])
}

export default useListenMessages