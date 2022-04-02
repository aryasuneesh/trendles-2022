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
                <div className="col-sm-4 d-none d-sm-block"><img src={logo} alt="" style={imageStyle} /></div>
                <div className="col-sm-2"><Link to="/" className="nav-link text-light">Magazine</Link></div>
                <div className="col-sm-2"><Link to="/" className="nav-link text-light">Blog</Link></div>
                <div className="col-sm-2"><Link to="/" className="nav-link text-light"><div class="dropdown">
                  <span><Link to="" className="nav-link text-light">Clubs</Link></span>
                  <div class="dropdown-content">
                    <p><Link to="" className="nav-link text-light">Photo</Link></p>
                    <p><Link to="" className="nav-link text-light">Video</Link></p>
                    <p><Link to="" className="nav-link text-light">Design</Link></p>
                    <p><Link to="" className="nav-link text-light">Literary</Link></p>
                  </div>
                </div>
                </Link>
                </div>
                <div className="col-sm-2 col-1"><Link to="/" className="nav-link text-light">Events</Link></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

