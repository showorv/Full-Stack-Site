import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../ContextApi/authApi'

export const Admin= () => {

  const {user,isLoading} = useAuth()

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  
  return (
    <header>
         <div>Admin-layout
          <nav>
            <ul>
                <li>
                    <NavLink to="user">User</NavLink>
                </li>
                <li>
                    <NavLink to="contacts">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="serviceAdmin">Service</NavLink>
                </li>
            </ul>
          </nav>
          <Outlet />
        </div>
    </header>
   
   
  )
}
