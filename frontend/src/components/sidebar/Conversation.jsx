import React from 'react'

const Conversation = () => {
    return <>
        <div className='flex gap-2 items-center hover:bg-yellow-200 rounded px-2 py-0 cursor-pointer'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user Avatar' />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex justify-between'>
                    <p className='font-bold text-amber-200 hover:text-gray-950'>Priyanka Dhinesh</p>
                    <span className='text-xl'>😡</span>
                </div>
            </div>
        </div>

        <div className="divider px-3 m-0"></div>

    </>
}

export default Conversation


/* starter code for coversation
import React from 'react'

const Conversation = () => {
    return <>
        <div className='flex gap-2 items-center hover:bg-yellow-300 rounded p- py-0 cursor-pointer'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user Avatar' />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex justify-between'>
                    <p className='font-bold text-amber-300 hover:text-gray-950'>Priyanka Dhinesh</p>
                    <span className='text-xl'>😡</span>
                </div>
            </div>
        </div>

        <div className="divider px-3 m-0"></div>

    </>
}

export default Conversation
*/