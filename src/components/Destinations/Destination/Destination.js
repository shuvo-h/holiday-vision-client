import React from 'react';
import { Col } from 'react-bootstrap';
import './destination.css';

const Destination = (props) => {
    const {des_img, place} = props.destination;
    
    return (
        <Col lg={3} md={4} sm={6} className="destination-card">
            <div className="position-relative">
                <img className="img-fluid" src={des_img} alt="" />
                <div className="destination-text position-absolute text-warning ">
                    {place}
                </div>
            </div>
        </Col>
    );
};

export default Destination;