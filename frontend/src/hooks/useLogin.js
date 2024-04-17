import { Error, set } from 'mongoose'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'


const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const login = async ({ username, password }) => {
        const success = handleInputErrors({ username, password })
        if (!success) return

        setLoading(true)
        try {
            const res = await fetch("/api/auth/login", {
                /* mode: 'no-cors',
                cache: 'no-cache', */
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({username, password})
            })

            const data = await res.json()
            if (data.error) throw new Error(data.message)

            //localstorage
            localStorage.setItem("chat-user", JSON.stringify(data))
            //update authcontext
            setAuthUser(data)
            
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
        }

  return {loading, login}
}

function handleInputErrors({ username, password }) {
    if (!username || !password) {
        toast.error("Please fill in all the fields")
        return false
    }
    
    return true
}

export default useLogin