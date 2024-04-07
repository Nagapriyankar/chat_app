import React from 'react'
import { FiSend } from "react-icons/fi";

const MessageInput = () => {
    return (
        <form>
            <div className="px-4 my-3">
                <div className='w-full relative'>
                    <input
                        type="text"
                        className='border text-sm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 text-white'
                        placeholder='Send a Message'
                    />
                    <button
                        type='submit'
                        className="absolute text-lg text-white inset-y-0 end-0 items-center px-3">
                        <FiSend />
                    </button>
                </div>
            </div>
        </form>

    )
}

export default MessageInput