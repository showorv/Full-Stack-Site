import React, { useEffect, useState } from 'react'
import { useAuth } from '../../ContextApi/authApi'
import {  toast } from 'react-toastify';
import {Link} from "react-router-dom"

export const Users = () => {
    const [ users, setUsers] = useState([])
    const {tokenAuth,API} = useAuth()

    const getAllUsers = async()=>{
        try {
        
            const response = await fetch(`${API}/api/admin/Users`,{
                method:"GET",
                headers: {
                    Authorization: tokenAuth
                }
            })
    
            const data = await response.json()
            console.log(data);
            setUsers(data)
        } catch (error) {
            console.log('error in user admin', error);
        }
    
    }

    const deleteUser = async(id)=>{

        try {
            const response = await fetch(`${API}/api/admin/Users/delete/${id}`,{
                method:"DELETE",
                headers: {
                    Authorization: tokenAuth
                }
            })
    
            const data = await response.json()

            
            console.log("user delete",data);
            toast.success("User deleted Successfully")


           if(response.ok){
            getAllUsers() //? delete korle jate refresh na dite hoy tai
           }
            
        } catch (error) {
            console.log(error);
        }
    }
   
    useEffect(()=>{
        getAllUsers()
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
                    <th>phone</th>
                    <th>update</th>
                    <th>delete</th>
                    <th>Admin</th>
                    </tr>
                </thead>
               
                    <tbody>
                        {users.map((curElem, index)=>{
                            const {_id,username, email,phone,isAdmin} = curElem
                            return(
                                <tr key={index}>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td><Link to={`/admin/user/${_id}/edit`}>Edit</Link></td>
                                    <td><button onClick={()=> deleteUser(_id)}>Delete</button></td>
                                    <td>{isAdmin}</td>
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
