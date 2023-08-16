import React from "react";
import logo from '../images/myspaceLogo.png'
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { Outlet, Link } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
 return (
    <>
        <div class="d-flex justify-content-between">
            <h1 class = "pt-3 ps-3">MySpaces</h1>
            <img class="p-2 pe-2" src={logo} width={100} height={100} alt="Logo" />
        </div>
        
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul  className="navbar-nav ml-auto">
                <li className="nav-item ps-2 pe-5"><Link to="/Login">Login</Link></li>
                <li><Link to="/Signup">Sign-up</Link></li>
            </ul>
        </nav>
      <Outlet />
    </>
 );
}
