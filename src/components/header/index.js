import React from "react";
import "./style.css";

function NavTabs(props) {
  return (
   <div>
    <nav className="navbar navbar-light" style="background-color: #e3f2fd;">

    <h2>Ezeckukwu I. <span className="re-hue navbar-brand">Nwokedi</span></h2>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#about"><strong>About Me</strong></a></li>
            <li className="nav-item active">
                <a className="nav-link" href="#coding-projects"><strong>Coding Projects</strong></a></li>
            <li className="nav-item active">
                <a className="nav-link" href="#cv"><strong>Curriculum Vitae</strong></a></li>
            <li className="nav-item active">
                <a className="nav-link" href="#contact"><strong>Contact Me</strong></a></li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default NavTabs;
