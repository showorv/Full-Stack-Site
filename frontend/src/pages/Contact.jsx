import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useAuth } from '../ContextApi/authApi'
import {  toast } from 'react-toastify';

export const Contact = () => {

  const [ contact, setContact] = useState({
    username:"",
    email:"",
    message:""
  })
  const {user,API} = useAuth()
  // console.log("frontend user ", user.email);
  const [userData , setUserData] = useState(true)

  
  console.log("user data", user);

  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      message:""
    })

    setUserData(false)
  }
  
//   useEffect(() => {
//     if (users) {
//         setContact({
//             username: users.username || '', // Fallback to an empty string if undefined
//             email: users.email || '',
//             message: '',
//         });
//     }
// }, [users]);
  const handleContact=(e)=>{

    const name = e.target.name
    const value = e.target.value

    setContact({
      ...contact,
      [name]:value
    })
  }

  const handleSubmit =async (e)=>{
    e.preventDefault();
    console.log(user);


    try {
      const response = await fetch(`${API}/api/form/contact`,{
        method: "POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify(contact)
      })

      if(response.ok){

        const data = await response.json()
        console.log(data);
        toast.success("sent successfull")
        setContact({
          message:""
        })
        
        
      }else{
        toast.error("something went wrong")
      }


    } catch (error) {
      console.log("error in contact", error);
    }
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <img src="public\images\reg.jpg" alt="registration images" />
        </div>
        <div className="right">
              <h1>Contact Form</h1>

              <form action="" onSubmit={handleSubmit}>
                <div className='div'>
                  <label htmlFor="username">Username:</label>
                  <input type="text" name='username' id='username' required placeholder='username' autoComplete='off'value={contact.username} onChange={handleContact}/>
                </div>
                <div className='div'>
                  <label htmlFor="email">Email:</label>
                  <input type="text" name='email' id='email' required placeholder='email' autoComplete='off' value={contact.email} onChange={handleContact}/>
                </div>
                
                <div className='div'>
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" cols="30" rows="10" required autoComplete='off' value={contact.message} onChange={handleContact} placeholder='Write something'></textarea>
                </div>

                <button type='submit' className='btn' > Sign Up</button>
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