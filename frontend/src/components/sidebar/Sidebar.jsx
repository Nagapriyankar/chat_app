import React from 'react'
import SearchInput from './SearchInput'
import SideConversations from './SideConversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
    return (
        <div className='border-r border-amber-200 md:w-[300px] p-4 flex flex-col'>
            <SearchInput />
            <div className="divider divider-warning px-3"></div>
            <SideConversations />
            <LogoutBtn />
        </div>
    )
}

export default Sidebar

/* starter code for sidebar

import React from 'react'
import SearchInput from './SearchInput'
import SideConversations from './SideConversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
    return (
        <div className='border-r border-amber-300 md:w-[300px] p-4 flex flex-col'>
            <SearchInput />
            <div className="divider divider-warning px-3"></div>
            <SideConversations />
            <LogoutBtn />
        </div>
    )
}

export default Sidebar

*/