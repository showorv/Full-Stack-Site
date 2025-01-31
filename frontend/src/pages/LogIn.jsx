import React, { useState } from 'react'
import styled from "styled-components"
import { useNavigate } from "react-router";
import { useAuth } from '../ContextApi/authApi';
import {  toast } from 'react-toastify';
export const LogIn = () => {

  const [ user, setUser] = useState({
   
    email:"",
    
    password:""
  })

  const navigate = useNavigate();
  const {setTokenLocalSG, API} = useAuth();

  const handleUser = (e)=>{
    console.log(e);
    const name = e.target.name
    const value = e.target.value

    setUser({
      ...user,
      [name]: value //!name dynamic korar jnne [] used
    })
  }


  const handleSubmit =async (e)=>{
    e.preventDefault();
    console.log(user);

    const response = await fetch(`${API}/api/auth/login`,{
      method:"POST",
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    const user_data =await response.json()
    if(response.ok){
      
      
      setTokenLocalSG(user_data.token)

      setUser({ email:"", password:""})
      toast.success("login successfull")
      navigate("/")
    }else{
      toast.error("email or password is incorrect")
    }


  }
  return (
    <Wrapper>
      <div className="container">
        {/* <div className="left">
          <img src="public\images\reg.jpg" alt="registration images" />
        </div> */}
        <div className="right">
              <h1>Log In</h1>

              <form action="" onSubmit={handleSubmit}>
               
                <div className='div'>
                  <label htmlFor="email">Email:</label>
                  <input type="text" name='email' id='email' required placeholder='email' autoComplete='off' alue={user.email} onChange={handleUser}/>
                </div>
                
                <div className='div'>
                  <label htmlFor="password">Password:</label>
                  <input type="text" name='password' id='password' required placeholder='password' autoComplete='off' alue={user.password} onChange={handleUser}/>
                </div>

                <button type='submit' className='btn' > Log In</button>
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
