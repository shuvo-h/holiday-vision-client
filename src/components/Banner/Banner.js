import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="carousel-img d-block w-100"
                src="https://i.ibb.co/Gn7j2Dm/banner-3.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="carosoul-text p-2">Make A Charming Holiday</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img d-block w-100"
                src="https://i.ibb.co/6J30sYx/banner-2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="carosoul-text">Spend Holiday with Family</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img d-block w-100"
                src="https://i.ibb.co/zGzTMhr/banner-1.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="carosoul-text">Make a  Memorable  Holiday</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;