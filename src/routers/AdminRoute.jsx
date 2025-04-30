import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = ({children}) => {
    const  token =localStorage.getItem('token')
    const tokenExpiry = Number(localStorage.getItem('tokenExpiry')) // important: convert to number
    const currentTime = Date.now()
    if(!token){
        return <Navigate to='/admin' replace/>
    }
    

    if(token && currentTime > tokenExpiry){
        //token has expired
            //token has expired
            alert('Token has expired, please login again')
            localStorage.removeItem('token')
            localStorage.removeItem('tokenExpiry')
            return <Navigate to='/admin' replace/>
        
    }
 

    return children ? children : <Outlet/>

}

export default AdminRoute
