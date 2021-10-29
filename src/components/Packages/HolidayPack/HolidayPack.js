import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HolidayPack = (props) => {
    const {pkg_title, pkg_txt, pkg_img, _id} = props.holidayPack;

    return (
        <Col xs={12} sm={12} md={6} lg={6}>
            <Card className="flex-row "  style={{ height:'20rem' }}>
                <Card.Img className="p-3 img-fluid" variant="top" src={pkg_img} />
                <Card.Body>
                    <Card.Title>{pkg_title}</Card.Title>
                    <Card.Text>{pkg_txt.slice(0,150)}</Card.Text>
                    <Link to={`/booking-form/${_id}`}><Button variant="primary">Book Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HolidayPack;
