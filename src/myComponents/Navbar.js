import React from 'react'
import logo from "./myImages/ticon.svg"
import { Link } from "react-router-dom";
import "./myCSS/navDDown.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


export const Navbar = () => {
  let imageStyle = {
    height: "2rem",
    width: "3rem",
    transform: "scale(2)",
  }
  let navStyle = {
    height: "68px",
    width: "100%",
    color:"white",
    backgroundColor: "transparent",
    borderRadius: "0px 0px 15px 15px",
    // border:"2px dashed gray"
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark" style={navStyle}>
        <div className="container-fluid">
          <div className='row d-sm-none align-items-center w-100'>
            <div className="col-2 "><a href="#" className="nav-link"><img src={logo} alt="" style={imageStyle} /></a>
            </div>
            <div className="col-2 offset-8">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="container">
              <div className="row justify-content-evenly align-items-center">
                <div className="col-5 col-sm-4 col-md-6 d-none d-sm-block"><img src={logo} alt="" style={imageStyle} /></div>
                <div className="col-sm-2 col-md-2"><Link to="/" className="nav-link text-light"><span className='navlinks'>Magazine</span></Link></div>
                
                <div className="col-sm-2 col-md-2"><div class="dropdown">
                  <Link to="" className="nav-link text-light dropdown-toggle"><span className='navlinks'>Clubs</span></Link>
                  <div class="dropdown-content">
                    <p><Link to="" className="nav-link text-light">Photo</Link></p>
                    <p><Link to="" className="nav-link text-light">Video</Link></p>
                    <p><Link to="" className="nav-link text-light">Design</Link></p>
                    <p><Link to="" className="nav-link text-light">Literary</Link></p>
                  </div>
                </div>
                </div>
                <div className="col-sm-2 col-md-1"><Link to="/" className="nav-link text-light"><span className='navlinks'>Blog</span></Link></div>
                <div className="col-sm-2 col-md-1"><Link to="/" className="nav-link text-light"><span className='navlinks'>Events</span></Link></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

