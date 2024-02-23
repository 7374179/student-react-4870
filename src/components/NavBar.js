import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="/">School</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">Student List</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/detail">Student Detail</Link>
            </li> */}
          </ul> 
        </div>
    </nav>
  </>
);
export default NavBar;
