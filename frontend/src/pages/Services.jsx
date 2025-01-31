import React from 'react'
import { useAuth } from '../ContextApi/authApi'
import styleld from "styled-components"


export const Services = () => {

  const {serviceDoc} = useAuth()
  console.log("service daata",serviceDoc);
  return (
   <Wrapper>
    <h2>Our services</h2>

    <div className="container">

{
  serviceDoc.map((curElem, index)=>{
    const { service,description,price,provider} = curElem

    return(

   
    <div className="card" key={index}>
      
        <div className="image">
      
        </div>

        <div className="items">
          <div className="details">
            <p className="provider">{provider}</p>
            <p className="price">{price}</p>
          </div>
          <p className="service">{service}</p>
          <p className="description">{description}</p>
          
        </div>
     
    </div>
     )
  })
}
    </div>
   </Wrapper>
  )
}

const Wrapper = styleld.section`
  

`
