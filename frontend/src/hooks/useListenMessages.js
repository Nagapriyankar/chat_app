import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketCotext'
import useConversation from '../zustand/useConversation'
import notificationSound from "../assets/sounds/notification.mp3"
//message listener - receivers get the message immediately without need to refresh

const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        //listen for new message event 
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage])
        })

        //prevent listening to the event more than once
        return () => socket.off("newMessage")
    }, [socket, setMessages, messages])
}

export default useListenMessages