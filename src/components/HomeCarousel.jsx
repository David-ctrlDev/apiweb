import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import firsImage from '../assets/nameofwind.jpg'
import secondImage from '../assets/etduhs.jpg'
import thirthImage from '../assets/tsd.jpg'
import './HomeCarousel.css'


function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel className="main-carousel" variant="dark" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item onClick={()=>{
                alert("Click")
            }} className = "first-slide">
              <img
                className="firsImage"
                src={firsImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Patrick Rothfuss</h3>
                <p>Autor de la semnana</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="secondImage"
                src={secondImage}
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Patrick Rothfuss</h3>
                <p>Autor de la semnana</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="thirthImage"
                src={thirthImage}
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Patrick Rothfuss</h3>
                <p>
                  Autor de la semnana
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }

export default ControlledCarousel
