import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function NavTabs() {
  return (
   <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-info">
      <div className="container-fluid ">

        <h2 className="heading re-hue"><Link to="/">Ezeckukwu I. <span className="navbar-brand">Nwokedi</span></Link></h2>
          
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav mb-lg-0">
                <li className="nav-item" href="#about">
                  <NavLink
                      to="aboutMe"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'}>
                      About Me
                    </NavLink>
                  </li>
                <li className="nav-item" href="#coding-projects">
                  <NavLink
                      to="projects"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'}>
                      Coding Projects
                    </NavLink>
                  </li>
                <li className="nav-item" href="#cv">
                  <NavLink
                      to="cv"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'}>
                      Curriculum Vitae
                    </NavLink>
                  </li>
                <li className="nav-item" href="#contact">
                  <NavLink
                      to="contact"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'}>
                      Contact Me
                    </NavLink>
                  </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
  );
}

export default NavTabs;
