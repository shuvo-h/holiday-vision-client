import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="carousel-img d-block w-100"
                src="https://i.ibb.co/VvNNXS6/tour-travels-500x500.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="carosoul-text">Make A Charming Holiday</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img d-block w-100"
                src="https://i.ibb.co/WVHbShP/88539.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="carosoul-text">Spend Holiday with Family</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img d-block w-100"
                src="https://i.ibb.co/XW2r80T/90-904284-travel-desktop-wallpaper-tours-and-travels-background.jpg"
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