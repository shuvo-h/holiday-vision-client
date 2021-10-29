import React from 'react';
import { Col } from 'react-bootstrap';

const Destination = (props) => {
    const {des_img, place} = props.destination;
    return (
        <Col lg={3} md={4} sm={6} >
            <img className="img-fluid" src={des_img} alt="" />
            <h6>{place}</h6>
        </Col>
    );
};

export default Destination;