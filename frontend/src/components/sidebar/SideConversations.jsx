import React from 'react'
import Conversation from './Conversation'

const SideConversations = () => {
    return (
        <div className='py-2 flex flex-col overflow-auto'>   {/* overflow-auto- adds scroll bar when messages overflow */}
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />

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