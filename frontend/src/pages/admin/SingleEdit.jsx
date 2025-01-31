import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useAuth } from '../../ContextApi/authApi'
import { useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';

export const SingleEdit = () => {

    const [data, setData] = useState({
        username:"",
        email:"",
        phone:""
    })

    const params = useParams()
    const {tokenAuth, API} = useAuth()

    const getUserdata = async()=>{

        try {
            
            const response = await fetch(`${API}/api/admin/Users/${params.id}`,{
                method:"GET",
                headers: {
                    Authorization: tokenAuth
                }
            })
    
            const data = await response.json()

            
            console.log("user fetched",data);
            
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getUserdata()
    },[])

    const handleContact = (e)=>{
        const name = e.target.name
        const value = e.target.value 

        setData({
            ...data,
            [name]:value
        })
    }


    const handleSubmit= async(e)=>{
        e.preventDefault()

        try {
            
            const response = await fetch(`${API}/api/admin/Users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type": "application/json", //? eta chara update read korte parbe na
                    Authorization: tokenAuth
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                toast.success("update successfull")
            }else{
                toast.error("Not updated")
            }
          


            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Wrapper>
      <div className="container">
        
        <div className="right">
              <h1>User data Update</h1>

              <form action="" onSubmit={handleSubmit}>
                <div className='div'>
                  <label htmlFor="username">Username:</label>
                  <input type="text" name='username' id='username' required placeholder='username' autoComplete='off'value={data.username} onChange={handleContact}/>
                </div>
                <div className='div'>
                  <label htmlFor="email">Email:</label>
                  <input type="text" name='email' id='email' required placeholder='email' autoComplete='off' value={data.email} onChange={handleContact}/>
                </div>
                <div className='div'>
                  <label htmlFor="phone">phone:</label>
                  <input type="text" name='phone' id='phone' required placeholder='email' autoComplete='off' value={data.phone} onChange={handleContact}/>
                </div>
                
              

                <button type='submit' className='btn' > Update</button>
              </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 100%;
  min-height: 50vh;
  margin: 20rem 3rem;

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

  }

  .left img{
    
    width: 30rem;
    height: 28rem;
    
  }

  .right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  label{
    font-size: 2rem;
    width: 9rem;
  }
  .div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }
  input{
    width: 30rem;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid white ;
    background:transparent;
    padding: 0 1rem;
    color: white;
  }

  textarea{
    width: 30rem;
    height: 10rem;
    border-radius: 10px;
    border: 1px solid white ;
    background:transparent;
    padding: 0 1rem;
    color: white;
  }

  h1{
    font-size: 3rem;
    font-weight: 600;
  }

  .btn{
    width: 10rem;
    height: 3.5rem;
    border-radius: 10px;
    padding: 1rem 1.3rem;
    border: none;
    background-color: #0000ff63;
    color: white;
    cursor: pointer;
  }

`
