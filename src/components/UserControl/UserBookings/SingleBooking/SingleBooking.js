import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './singleBooking.css';
import { IconContext } from "react-icons";
import { ImCheckmark } from 'react-icons/im';
import { MdWatchLater } from 'react-icons/md';




const SingleBooking = (props) => {
    const [bookedPackage,setBookedPackage]= useState({});
    const {pkg_img, pkg_title, tour_date, tour_duration}= bookedPackage;
    const {status, booking_pkg_id, _id} = props.booking;
    useEffect(()=>{
        fetch(`https://fathomless-oasis-64789.herokuapp.com/package/${booking_pkg_id}`)
        .then(res=>res.json())
        .then(data=>{
            setBookedPackage(data);
        })
    },[booking_pkg_id])
   
    return (
        <Row className="booking-item mb-2 bg-light d-flex align-items-center justify-content-center">
            <Col><img className="booking-list-img img-fluid p-2" src={pkg_img} alt="" /></Col>
            <Col>{pkg_title}</Col>
            <Col  className="d-none d-sm-none d-md-block">{tour_duration}</Col>
            <Col  className="d-none d-sm-none d-md-block">{tour_date}</Col>
            <Col>
                {status}
                {
                    status === "Approved" ? <IconContext.Provider value={{className: "text-success ms-2", size:"30px" }}><ImCheckmark /></IconContext.Provider> : <IconContext.Provider value={{ className: "text-info ms-2", size:"30px"}}><MdWatchLater /></IconContext.Provider>
                }
            </Col>
            <Col>
                <button className="rounded border  p-2 px-4 d-block mx-auto bg-danger fw-bold" onClick={()=>props.handleBookingCancle(_id)}>Cancel</button> 
            </Col>
        </Row>
    );
};
 

export default SingleBooking;

