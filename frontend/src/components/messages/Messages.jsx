import React, { useEffect, useRef } from 'react'
import Message from '../messages/Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton'

const Messages = () => {
    const { loading, messages } = useGetMessages()   //hooks
    const lastMsgRef = useRef()
    
    //  automatically scroll messsages
    useEffect(() => {
        setTimeout(()=> {
            lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
      },100)
    },[messages])

    return (
        <div className='px-4 flex-1 py-2 overflow-auto'>

            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div
                        key={message._id}
                        ref={lastMsgRef}>
                        <Message
                            message={message}/>
                    </div>
                )
                   )}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            
            {!loading && messages.length === 0 && (
                <p className='text-center text-white'>Send a message to start the conversation</p>
            )}

        </div>
    )
}

export default Messages


/* sidebar for Messages

import React from 'react'
import Message from './Message'

const Messages = () => {
    return (
        <div className='px-4 py-2 overflow-auto'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />

        </div>
    )
}

export default Messages */


