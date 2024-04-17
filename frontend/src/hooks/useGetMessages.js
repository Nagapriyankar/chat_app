import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'


const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()    //store
    
    useEffect(() => {
        const getMessage = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/conversation/${selectedConversation._id}`)

                console.log(res)
                const data = await res.json()
                if (data.error) throw new Error(data)
                console.log(data)
                setMessages(data)

            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        if (selectedConversation?._id) getMessage()
        
    }, [selectedConversation?._id, setMessages]) 

    return {loading, messages}
}

export default useGetMessages