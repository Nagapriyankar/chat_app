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