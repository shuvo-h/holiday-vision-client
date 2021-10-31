import React from 'react';
import { Col } from 'react-bootstrap';
import './destination.css';

const Destination = (props) => {
    const {des_img, place} = props.destination;
    
    return (
        <Col lg={3} md={4} sm={6} className="destination-card">
            <div className="destination-frame position-relative">
                <div className="destination-img">
                    <img className="img-fluid" src={des_img} alt="" />
                </div>
                <div className="explore">
                    <h2>Explore</h2>
                </div>
                <div  className="location-name position-absolute text-white">
                    <h5>{place}</h5>
                </div>
            </div>
        </Col>
    );
};

export default Destination;