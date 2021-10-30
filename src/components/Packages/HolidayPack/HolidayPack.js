import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './holidayPack.css';

const HolidayPack = (props) => {
    const {pkg_title, pkg_txt, pkg_img, _id,tour_date} = props.holidayPack;
    return (
        <Col xs={12} sm={6} md={4} lg={3} className="p-2">
            <Card className="package-card">
                <Card.Img className="img-fluid p-2 " variant="top" src={pkg_img} style={{ height:'20rem' }}/>
                <Card.Body>
                    <Card.Title className="text-center">{pkg_title}</Card.Title>
                    <Card.Text>{pkg_txt.slice(0,150)}</Card.Text>
                    <p className="text-center">Tour Date:<strong className="text-info fs-4"> {tour_date}</strong></p>
                    <Link to={`/booking-form/${_id}`} className=" mx-auto d-flex justify-content-center text-decoration-none"><Button className="btn-regular">Book Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HolidayPack;
