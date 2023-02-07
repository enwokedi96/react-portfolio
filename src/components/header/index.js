import React from "react";
import "./style.css";

function header(props) {
  return (
   <header>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">

    <h2>Ezeckukwu I. <span class="re-hue navbar-brand">Nwokedi</span></h2>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#about"><strong>About Me</strong></a></li>
            <li class="nav-item active">
                <a class="nav-link" href="#coding-projects"><strong>Coding Projects</strong></a></li>
            <li class="nav-item active">
                <a class="nav-link" href="#cv"><strong>Curriculum Vitae</strong></a></li>
            <li class="nav-item active">
                <a class="nav-link" href="#contact"><strong>Contact Me</strong></a></li>
        </ul>
      </div>
    </nav>
  </header>
  );
}

export default header;
