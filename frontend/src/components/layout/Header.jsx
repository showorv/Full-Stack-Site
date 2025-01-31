import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import { useAuth } from '../../ContextApi/authApi'


export const Header = () => {
    const {isLoggIn} = useAuth()

    const active =({isActive})=>{
        return{
            color: isActive?"#0000ff63" : "white"
            
    }
    }

  return (
    <Headers>
        <div className="container">
            <div className="logo">
                <NavLink to="/" className="navlink">
                    <h3>Corrupted</h3>
                </NavLink>
            </div>

            <div className="nav-side">
                <ul>
                    <div className="nav-text">


                    <li><NavLink to="/" style={active} className="navlink">Home</NavLink></li>
                    <li><NavLink to="/about" style={active} className="navlink">About</NavLink></li>
                    <li><NavLink to="/services" style={active} className="navlink">Services</NavLink></li>
                    <li><NavLink to="/contact" style={active} className="navlink">Contact</NavLink></li>
                    </div>

                    <div className="sign">
                        {isLoggIn ? (<li><NavLink to="/logout" style={active} className="navlink">Log out</NavLink></li>)
                        :(
                            <>
                            
                            <li><NavLink to="/register" style={active} className="navlink">Sign Up</NavLink></li>
                    <li><NavLink to="/login" style={active} className="navlink">Log In</NavLink></li>
                            </>
                        )}
                    
                    
                    </div>
                    
                </ul>
            </div>
        </div>
    </Headers>
  )
}


const Headers = styled.header`
    
    width: 100%;
    height: 3vw;
    /* background-color: green; */

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 8vw;
        padding-top: 1.6rem;

    }

    .logo{
        font-size: 2rem;
        font-weight: 600;
        text-decoration: none;
        
        
    }
    h3{
        color: blue;
        text-transform: uppercase;
        text-shadow: darkcyan;
        
    }

    .nav-side ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20rem;
        
    }

    .nav-text{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }


    .sign{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    li{
        list-style: none;
        font-size: 1.8rem;
        font-weight: 400;
    }
    .navlink{
        text-decoration: none;
    }

    
`
