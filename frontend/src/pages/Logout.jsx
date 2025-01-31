import React, { useEffect } from 'react'
import { useAuth } from '../ContextApi/authApi'
import { Navigate } from "react-router-dom";

export const Logout = () => {
  

    const {logoutUser} = useAuth()
    
    useEffect(()=>{
        logoutUser()
    },[logoutUser])

  return(
    <Navigate to="/login" />
  )
}
