import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversation, setConversation] = useState([])

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/users', {
                   /*  mode: 'no-cors',
                    cache: 'no-cache', */
                    method: "GET",
                    headers: { "content-type": "application/json" },
                })
                const data = await res.json()

                if (data.error) {
                    throw new Error(data)
                }
                setConversation(data)
                
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getConversations()
    },[])

    return { loading, conversation }
}

export default useGetConversation