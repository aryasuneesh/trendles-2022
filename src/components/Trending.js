import React from "react";
import '../blog.css';
import { Link } from "react-router-dom";
const Trending = () => {
    return ( 
        <div className="trending">
            <div className="trending-heading">
            <h1>Topics</h1>
            </div>
            <div className="trending-list">
            
            <div className="trending-list-items">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="listname">
               Events
            </div>
            </Link>
            </div>
            <hr />
            <div className="trending-list-items">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="listname">
               Curiopedia
            </div>
            </Link>
            </div>
            <hr />
            <div className="trending-list-items">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="listname">
               Adavya
            </div>
            </Link>
            </div>
            <hr />
            <div className="trending-list-items">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="listname">
              Enlace
            </div>
            </Link>
            </div>
            <hr />
            <div className="trending-list-items">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="listname">
               Workshops
            </div>
            </Link>
            </div>
            <hr />
            <div className="trending-list-items">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="listname">
               Techclub
            </div>
            </Link>
            </div>
           </div>
           <div className="trending-button">
           <Link to="/" style={{ textDecoration: 'none' }}>
              <button>View All</button>
              </Link>
           </div>

        </div>
     );
}
 
export default Trending;