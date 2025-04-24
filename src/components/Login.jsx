import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';



const Login = () => {
  const navigate =useNavigate()
  const{loginUser,signInWithGoogle}=useAuth()
    const { handleSubmit, register,watch, formState: { errors } } = useForm();
    const onSubmit = async(values) => {
      console.log(values)
      try {
        await loginUser(values.email,values.password)
        alert('login successfully')
        navigate('/')
        
      } catch (error) {
        setMessage('Please provide a valid email and password')
        console.log(error)
        
      }
      
    }


    const[message,setMessage]=useState('')
    const handleGoogleSignIn=async()=>{
      try {
        await signInWithGoogle();
        alert("Login successful")
        navigate('/')
        
      } catch (error) {
        alert('Google sign in failed')
        
      }
        
    }
  return (
    <div className='flex justify-center items-center h-[calc(100vh-120px)] '>
      <div className='shadow-md p-6
      w-full max-w-sm
        ' >
        <h2 className='font-semibold text-xl'>Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col gap-4 my-4 '>
            <label htmlFor="email">
                <p className='mb-2 text-gray-700 text-sm font-bold '>Email</p>
            <input
             {...register("email", { required: true })}
             type="email" name="email" id="email" placeholder='Email Address' className=' rounded-md shadow py-2 px-3 focus:outline-none w-full leading-tight text-gray-700'  />

            </label>
            <label htmlFor="password">
                <p className='mb-2 text-gray-700 text-sm font-bold '>Password</p>
            <input
             {...register("password", { required: true })}
            type="password" name="password" id="password" placeholder='Password ' className=' rounded-md shadow py-2 px-3 focus:outline-none w-full leading-tight text-gray-700'  />

            </label>
            {
                message && <p className='text-red-500 text-xs italic'>Please enter valid email and password</p>
            }
            <button className='bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4 w-1/3 '>Login</button>

        </form>
        <p>Haven't an account? Please <Link className='text-blue-500' to={'/register'}>Register</Link>  </p>
        {/* google signin */}
        <button
        onClick={handleGoogleSignIn}
        className='flex gap-2 items-center justify-center bg-secondary hover:bg-blue-700  text-white rounded-md px-4 py-2 w-full  mt-4  '>
            <FaGoogle/>
            Sign in With Google</button>
        <p className='text-xs text-gray-500 mt-4 text-center'>&copy; 2025 Book Store . All Rights Reserved</p>


      </div>
    </div>
  )
}

export default Login
