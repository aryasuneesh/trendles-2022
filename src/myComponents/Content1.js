import React from 'react'

export const Content1 = () => {
    let contentStyle={
        minHeight:"100vh",
    }
    let pStyle={
        color:"white",
        margin:"0px 15% 0 15%"        
    }
  return (
    <div className='content' style={contentStyle}>
      <p className="h2 mt-4" align="center" style={pStyle}>Trendles</p>
      <p align="center" className='mt-2 ' style={pStyle}>The Trendles Club organizes and promotes various personality building activities and provides enough avenues under multiple domains to students to facilitate the pursuit of their dreams. </p>
      </div>
  )
}
