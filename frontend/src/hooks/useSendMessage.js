import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'


const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()     //zustand - store

    const sendMessage = async (message) => {
        setLoading(true)
        try {
            const res = await fetch(`/api/conversation/send/${selectedConversation._id}`,{
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ message })
            })
            const data = await res.json()

            if (data.error)
                throw new Error(data.error)

            console.log(`mes:`, data)
            setMessages([...messages, data])

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }


    return {sendMessage, loading}
}

export default useSendMessage

