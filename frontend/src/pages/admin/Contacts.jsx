import React, { useEffect, useState } from 'react'
import { useAuth } from '../../ContextApi/authApi'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Contacts = () => {
  const [ contact, setContact] = useState([])
  const {tokenAuth, API} = useAuth()

  const getAllContact = async()=>{
   try {
    const response = await fetch(`${API}/api/admin/Contacts`,{
      method:"GET",
      headers:{
        Authorization: tokenAuth
      }
    })
    const data = await response.json()
    console.log(data);
    setContact(data);

   } catch (error) {
    console.log(error);
   }
  
  }

  const deleteContact =async (id)=>{
    try {
      const response = await fetch(`${API}/api/admin/Contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization: tokenAuth
        }
      })
      
      const data = await response.json()
      console.log(data);
      toast.success("deleted successfully")

      if(response.ok){
        getAllContact()
      }
  
     } catch (error) {
      console.log(error);
     }
  }

  useEffect(()=>{
    getAllContact()
  },[])
  return (
    <section>
    <div className="container">
        <div className="heading">
            <h2>User Dashboard</h2>
        </div>

        <div className="user-details">
            <table>
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>email</th>
                    <th>Message</th>
                    
                    <th>delete</th>
                    
                    </tr>
                </thead>
               
                    <tbody>
                        {contact.map((curElem, index)=>{
                            const {_id,username, email,message} = curElem
                            return(
                                <tr key={index}>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{message}</td>
                                    
                                    <td><button onClick={()=> deleteContact(_id)}>Delete</button></td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                
            </table>
        </div>
    </div>
   </section>
  )
}
