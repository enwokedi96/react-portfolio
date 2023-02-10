import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function NavTabs() {
  return (
   <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">

    <h2 className="heading re-hue"><Link to="/">Ezeckukwu I. <span className="navbar-brand">Nwokedi</span></Link></h2>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div className="navbar-nav">
                <a className="nav-item" href="#about"><strong>
                  <NavLink
                      to="aboutMe"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'}>
                      About Me
                    </NavLink>
                  </strong></a>
                <a className="nav-item" href="#coding-projects"><strong>
                  <NavLink
                      to="projects"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'}>
                      Coding Projects
                    </NavLink>
                  </strong></a>
                <a className="nav-item" href="#cv"><strong>
                  <NavLink
                      to="cv"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'}>
                      Curriculum Vitae
                    </NavLink>
                  </strong></a>
                <a className="nav-item" href="#contact"><strong>
                  <NavLink
                      to="contact"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'}>
                      Contact Me
                    </NavLink>
                  </strong></a>
        </div>
      </div>
    </nav>
  </div>
  );
}

export default NavTabs;
