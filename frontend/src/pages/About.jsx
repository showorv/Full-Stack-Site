import React from 'react'
import { useAuth } from '../ContextApi/authApi'
export const About = () => {

  const {user} = useAuth()
  return (
    <div>
      {/* <h1>Hello {user.username}</h1> */}

      <h1>Welcome {user? user.username : `to our website`}</h1>
    </div>
    
  )
}
