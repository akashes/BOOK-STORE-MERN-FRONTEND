import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { getBaseUrl } from '../utils/baseURL';

const AdminLogin = () => {
        const[message,setMessage]=useState('')
        const navigate =useNavigate()
        const location = useLocation()
    
        const { handleSubmit, register,watch, formState: { errors } } = useForm();
        const onSubmit = async(values) => {
          try {

            console.log(values)
          const res= await axios.post(`${getBaseUrl()}/api/auth/admin`,values )
            if(res.status !== 200) return setMessage('Invalid credentials')
            const token = res.data.token
        if(token){

            localStorage.setItem('token',token)
            localStorage.setItem('tokenExpiry', Date.now() + 3600 * 1000) // 1 hour expiry time
            // setTimeout(()=>{
            //  localStorage.removeItem('token')   
            //  alert('Token has expired , please login again')
            //  navigate('/')
            // },3600 * 1000)

            alert('Login successful')

            navigate('/dashboard')

        }

           
            // const from = location.state?.from?.pathname || '/'
            // navigate(from, { replace: true })
            
          } catch (error) {
            setMessage('Please provide a valid email and password')
            console.log(error)
            
          }
          
        }
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='shadow-md p-6
      w-full max-w-sm
        ' >
        <h2 className='font-semibold text-xl text-center'>Admin Dashboard Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col gap-4 my-4 '>
            <label htmlFor="username">
                <p className='mb-2 text-gray-700 text-sm font-bold '>username</p>
            <input
             {...register("username", { required: true })}
             type="text" name="username" id="username" placeholder='user name' className=' rounded-md shadow py-2 px-3 focus:outline-none w-full leading-tight text-gray-700'  />

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
            <button className='bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4 w-full mx-auto mt-1 '>Login</button>

        </form>
 


      </div>
    </div>
  )
}

export default AdminLogin
