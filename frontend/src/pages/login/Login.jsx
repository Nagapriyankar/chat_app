import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 border border-gray-100">
                <h1 className='text-3xl font-semibold text-center text-gray-300 my-2'>login
                    <span className='text-yellow-500'> ChatApp</span>
                </h1>
                <form action="">
                    <div>
                        <label className="input input-bordered flex items-center gap-2 m-5">
                            Name
                            <input type="text" className="grow" placeholder="Type here..." />
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 m-5">
                            Password
                            <input type="text" className="grow" placeholder="Type here..." />
                        </label>
                    </div>

                    <a className="text-sm  text-white link link-hover hover:text-yellow-300 mx-5 inline-block">{"Don't"} have an account?</a>

                    <div className='m-5'>
                        <button className="btn btn-block btn-sm">Button</button>
                    </div>


                </form>
            </div>
        </div >
    )
}

export default Login



/* starter code for login

import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 border border-gray-100">
                <h1 className='text-3xl font-semibold text-center text-gray-300 my-2'>login
                    <span className='text-yellow-500'> ChatApp</span>
                </h1>
                <form action="">
                    <div>
                        <label className="input input-bordered flex items-center gap-2 m-5">
                            Name
                            <input type="text" className="grow" placeholder="Type here..." />
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 m-5">
                            Password
                            <input type="text" className="grow" placeholder="Type here..." />
                        </label>
                    </div>

                    <a className="text-sm  text-white link link-hover hover:text-yellow-300 mx-5 inline-block">{"Don't"} have an account?</a>

                    <div className='m-5'>
                        <button className="btn btn-block btn-sm">Button</button>
                    </div>


                </form>
            </div>
        </div >
    )
}

export default Login
*/