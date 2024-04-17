import React from 'react'
import useGetConversation from '../../hooks/useGetConversation'
import Conversation from './Conversation'

const SideConversations = () => {

    const { loading, conversation } = useGetConversation()    //hook
    
    return (
        <div className='py-2 flex flex-col overflow-auto'>   {/* overflow-auto- adds scroll bar when messages overflow */}
            {conversation.map((conversation, index) =>
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    index={ index } />
            )}
            
            
            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}

        </div>
    )
}

export default SideConversations


/* starter code for sideConersations


import React from 'react'
import Conversation from './Conversation'

const SideConversations = () => {
    return (
        <div className='py-2 flex flex-col overflow-auto'>   // overflow-auto- adds scroll bar when messages overflow
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />

        </div>
    )
}

export default SideConversations

*/