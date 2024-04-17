import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation'
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast'

const SearchInput = () => {

    const [search, setSearch] = useState("") 
    const { setSelectedConversation } = useConversation()
    const {conversation} =  useGetConversation()

    const   handleSeachClick = (e) => {
        e.preventDefault()
        if (!search) return
        
        if (search.length < 3) return toast.error('Search term must be at least 3 characters long')
        
        //search algorithm
        console.log(conversation)
        const result = conversation.find((c) => (
            c.fullName.toLowerCase().includes(search.toLowerCase())
        ))

        if (result) {
            setSelectedConversation(result)
            setSearch("")
        } else 
            toast.error(`No such User found with name ${search}`)
    }

    return (
        <form onSubmit={handleSeachClick}>
        <div className='flex m-3 gap-2'>
            <input
                type="text"
                placeholder="search..."
                className="input input-bordered rounded-full input-warning w-full max-w-xs"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <button
                className="btn btn-circle btn-warning">
                <FaSearch />
            </button>
            </div>
        </form>
    )
}

export default SearchInput

/* starter coe for search input

import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <div className='flex m-3 gap-2'>
            <input type="text" placeholder="search..." className="input input-bordered rounded-full input-warning w-full max-w-xs " />
            <button className="btn btn-circle btn-warning">
                <FaSearch />
            </button>
        </div>
    )
}

export default SearchInput
*/