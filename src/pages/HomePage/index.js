import React, {useState, useEffect} from 'react';
import Home from '../../components/home';
import './index.css';
import { Carousel } from 'react-bootstrap';

function HomePage() {

  return (
    <div style={{ display: 'block', width: "100%", padding: 30 }}>
      <Carousel>

        <Carousel.Item interval={2000} className="carousel-item">
          <Home designation = "Frontend Developer"
                color = "rgb(24, 124, 161)"
                id = "One"/>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <Home designation = "Researcher"
                color=" rgb(196, 216, 44)"
                id = "Two"/>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <Home designation = "Engineer"
                  color=" rgb(229, 98, 181)"
                  id = "Three"/>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default HomePage;
