import React, { useState } from 'react'
import GenderCheck from './GenderCheck'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-300 my-2'>Sign Up
          <span className='text-yellow-500'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>

          <div className='mx-5 mb-3'>
            <label className="label p-1">
              <span className='label-text text-base text-white'>Full Name</span>
            </label>
            <input
              type="text"
              className="grow input input-bordered w-full" placeholder="Type here..."
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div className='mx-5 mb-3'>
            <label className="label p-1">
              <span className='label-text text-base text-white'>Email</span>
            </label>
            <input
              type="text"
              className="grow input input-bordered w-full"
              placeholder="Type here..."
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>
          <div className='mx-5 mb-3'>
            <label className="label p-1">
              <span className='label-text text-base text-white'>Password</span>
            </label>
            <input
              type="password"
              className="grow input input-bordered w-full"
              placeholder="Type here..."
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div className='mx-5 mb-3'>
            <label className="label p-1">
              <span className='label-text text-base text-white'>Confirm Password</span>
            </label>
            <input
              type="password"
              className="grow input input-bordered w-full"
              placeholder="Type here..."
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheck onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

          <Link to='/login' className="text-sm  text-white link link-hover hover:text-yellow-300 mx-5 mb-1 inline-block">Already have an account?</Link>

          <div className='mb-5 mx-5'>
            <button className="btn btn-block btn-sm"
            disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>



        </form>
      </div>
    </div >
  )
}

export default Signup


/*  starter code for signup page

import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-300 my-2'>Sign Up
          <span className='text-yellow-500'> ChatApp</span>
        </h1>
        <form action="">

          <div className='mx-5 mb-3'>
            <label className="label p-1">
              <span className='label-text text-base text-white'>Full Name</span>
            </label>
            <input type="text" className="grow input input-bordered w-full" placeholder="Type here..." />
          </div>
          <div className='mx-5 mb-3'>
            <label className="label p-1">
              <span className='label-text text-base text-white'>Email</span>
            </label>
            <input type="text" className="grow input input-bordered w-full" placeholder="Type here..." />
          </div>
          <div className='mx-5 mb-3'>
            <label className="label p-1">
              <span className='label-text text-base text-white'>Password</span>
            </label>
            <input type="text" className="grow input input-bordered w-full" placeholder="Type here..." />
          </div>
          <div className='mx-5 mb-3'>
            <label className="label p-1">
              <span className='label-text text-base text-white'>Confirm Password</span>
            </label>
            <input type="text" className="grow input input-bordered w-full" placeholder="Type here..." />
          </div>

        //gender checkbox

          <a className="text-sm  text-white link link-hover hover:text-yellow-300 mx-5 mb-1 inline-block">Already have an account?</a>

          <div className='mb-5 mx-5'>
            <button className="btn btn-block btn-sm">Button</button>
          </div>



        </form>
      </div>
    </div >
  )
}

export default Signup */