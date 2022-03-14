import React from 'react'
import logo from "../myImages/trendles.png"


export const Navbar = () => {
  let imageStyle = {
    height: "49px",
    width: "60px",
    transform:"scale(1.6)",
  }
  let navStyle={
    height:"68px",
    width:"100%",
    backgroundColor:"white",
    borderRadius:"0px 0px 15px 15px",
    // border:"2px dashed gray"
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light p-0" style={navStyle}>
        <div className="container-fluid">
          <div className='row d-sm-none align-items-center w-100'>
            <div className="col-2 "><a href="#" className="nav-link"><img src={logo} alt="" style={imageStyle} /></a></div>
            <div className="col-2 offset-1 fs-1 font-monospace">Trendles</div>
            <div className="col-2 offset-5">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mt-3 mb-3 bg-light justify-content-evenly w-100 align-items-center">
              <li className='nav-item'><a href="#" className="nav-link bg-light text-dark">Home</a></li>
              <li className='nav-item'><a href="#" className="nav-link bg-light text-dark ">Events</a></li>
              <li className='nav-item'><a href="#" className="nav-link bg-light text-dark ">Design</a></li>
              <li className='d-none d-sm-flex'><a href="#" className="nav-link"><img src={logo} alt="" style={imageStyle}/></a></li>
              <li className='nav-item'><a href="#" className="nav-link bg-light text-dark ">Photo</a></li>
              <li className='nav-item'><a href="#" className="nav-link bg-light text-dark ">Video</a></li>
              <li className='nav-item'><a href="#" className="nav-link bg-light text-dark ">More</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

