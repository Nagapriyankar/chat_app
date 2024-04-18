import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';


const MesageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation()   //store

  //to refresh the conversation display component when logout
  useEffect(() => {
    //cleanup function
    return () => {setSelectedConversation(null)}
  }, [setSelectedConversation])

  return (
    <div className='md:min-w-[600px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className='bg-amber-300 from-neutral-950 px-4 py-2 mb-2'>
              <span>To: </span><span className='font-bold'>{ selectedConversation.fullName}</span>
          </div>

          {/* message body */}
          <Messages />
          <MessageInput />
        </>
      )}

    </div>
  )
}

export default MesageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext()

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-amber-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullName} 😊😇</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl' />
      </div>
    </div>
  )
}


/* starter code

import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";


const MesageContainer = () => {
  const noChatSelected = true;

  return (
    <div className='md:min-w-[600px] flex flex-col'>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
         
          <div className='bg-amber-300 from-neutral-950 px-4 py-2 mb-2'>
            <span>To: </span><span className='font-bold'>Nivethitha</span>
          </div>

          
          <Messages />
          <MessageInput />
        </>
      )}

    </div>
  )
}

export default MesageContainer

const NoChatSelected = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-amber-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Nagapriyanka</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl' />
      </div>
    </div>
  )
} */


