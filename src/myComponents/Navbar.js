import React from 'react'
import logo from "./myImages/trendles.png"
import { Link } from "react-router-dom";
import "./myCSS/navDDown.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


export const Navbar = () => {
  let imageStyle = {
    height: "49px",
    width: "60px",
    transform: "scale(1.6)",
  }
  let navStyle = {
    height: "68px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "0px 0px 15px 15px",
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
              <li className='nav-item'><Link to="/" className="nav-link bg-light text-dark">Home</Link></li>
              <li className='nav-item'>
                <div class="dropdown">
                  <span><Link to="" className="nav-link bg-light text-dark ">Events</Link></span>
                  <div class="dropdown-content">
                    <p><Link to="" className="nav-link bg-light text-dark ">Adavya</Link></p>
                    <p><Link to="" className="nav-link bg-light text-dark ">Enlace</Link></p>
                  </div>
                </div>
              </li>
              <li className='nav-item'>
                <div class="dropdown">
                  <span><Link to="" className="nav-link bg-light text-dark ">Design</Link></span>
                  <div class="dropdown-content">
                    <p><Link to="" className="nav-link bg-light text-dark ">Design1</Link></p>
                    <p><Link to="" className="nav-link bg-light text-dark ">Design2</Link></p>
                  </div>
                </div>
              </li>
              <li className='d-none d-sm-flex'><Link to="" className="nav-link"><img src={logo} alt="" style={imageStyle} /></Link></li>
              <li className='nav-item'>
                <div class="dropdown">
                  <span><Link to="" className="nav-link bg-light text-dark ">Photo</Link></span>
                  <div class="dropdown-content">
                    <p><Link to="" className="nav-link bg-light text-dark ">Photo1</Link></p>
                    <p><Link to="" className="nav-link bg-light text-dark ">Photo2</Link></p>
                  </div>
                </div>
              </li>
              <li className='nav-item'>
                <div class="dropdown">
                  <span><Link to="" className="nav-link bg-light text-dark ">video</Link></span>
                  <div class="dropdown-content">
                    <p><Link to="" className="nav-link bg-light text-dark ">video1</Link></p>
                    <p><Link to="" className="nav-link bg-light text-dark ">video2</Link></p>
                  </div>
                </div>
              </li>
              <li className='nav-item'>
                <div class="dropdown">
                  <span><Link to="" className="nav-link bg-light text-dark ">More</Link></span>
                  <div class="dropdown-content">
                    <p><Link to="" className="nav-link bg-light text-dark ">More1</Link></p>
                    <p><Link to="" className="nav-link bg-light text-dark ">More2</Link></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

