import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const{currentUser,loading}=useAuth()

    if(loading){
        return <div>loading...</div>
    }

    if(currentUser) {
        return children
    }else{
        return <Navigate to="/login" replace
         state={{from:location}}
          />

    }

}

export default PrivateRoute
