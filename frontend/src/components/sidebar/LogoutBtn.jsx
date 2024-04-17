import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';


const LogoutBtn = () => {
    const {loading, logout} = useLogout()

    return (
        <div className='mt-auto'>
            {!loading ? (
                <button className="btn btn-circle btn-warning" onClick={logout}>
                    <RiLogoutBoxLine />
                </button>
            ) : (
                    <span className='=loading loading-spinner'></span>
            )}
        </div>
    )
}

export default LogoutBtn

/* starter code for logout btn

import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";


const LogoutBtn = () => {
    return (
        <div className='mt-auto'>
            <button className="btn btn-circle btn-warning">
                <RiLogoutBoxLine />
            </button>
        </div>
    )
}

export default LogoutBtn */