import React from 'react'
import iconDance from './myImages/iconDance.svg'

export const Content1 = () => {
    let contentStyle={
        
    }
    let hStyle={
      fontSize:"68px",
      color:"white",
      margin:"0px 15% 0 15%",
      fontFamily:"Fondamento"
    }
    
    let pStyle={
        color:"white",
        margin:"0px 20% 0 20%",  
        fontSize:"20px",  
        fontFamily:"Poppins"     
    }
    let iconStyle={
      transform:"scale(0.7)",
      height:"80%",
      width:"80%",
      margin:"0",
      padding:"0"
    }
  return (
    <>
    <div className='container' style={contentStyle}>
      <p className="h2 mt-4" align="center" style={hStyle}>Trendles</p>
      <p align="center" className='mt-2 ' style={pStyle}>The Trendles Club organizes and promotes various personality building activities and provides enough avenues under multiple domains to students to facilitate the pursuit of their dreams. </p>
    </div>
    <div className="container mt-0" align="center" >
      <img src={iconDance} alt="" style={iconStyle}/>
    </div>
    </>
  )
}