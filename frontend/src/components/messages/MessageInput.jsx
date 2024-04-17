import React, { useState } from 'react'
import { FiSend } from "react-icons/fi";
import useSendMessage from '../../hooks/useSendMessage';
import Message from './Message';

const MessageInput = () => {

    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()     //hook
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage("")
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="px-4 my-3">
                <div className='w-full relative'>
                    <input
                        type="text"
                        className='border text-sm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 text-white'
                        placeholder='Send a Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        type='submit'
                        className="absolute text-lg text-white inset-y-0 end-0 items-center px-3">
                        {loading ? <span className='loading loading-spinner'></span> : <FiSend />}
                    </button>
                </div>
            </div>
        </form>

    )
}

export default MessageInput