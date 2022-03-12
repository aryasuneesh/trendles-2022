import React from 'react'
import logo from "../myImages/trendles.png"


export const Navbar = () => {
  let imageStyle = {
    height: "60px",
    width: "60px",
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
      <nav className="navbar navbar-expand-sm navbar-light p-0" style={navStyle}>
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
            <ul className="navbar-nav justify-content-between w-100 align-items-center">
              <li><a href="#" className="nav-link text-secondary">Home</a></li>
              <li><a href="#" className="nav-link text-secondary">Events</a></li>
              <li><a href="#" className="nav-link text-secondary">Design</a></li>
              <li className='d-none d-sm-flex'><a href="#" className="nav-link"><img src={logo} alt="" style={imageStyle} /></a></li>
              <li><a href="#" className="nav-link text-secondary">Photo</a></li>
              <li><a href="#" className="nav-link text-secondary">Video</a></li>
              <li><a href="#" className="nav-link text-secondary">More</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

