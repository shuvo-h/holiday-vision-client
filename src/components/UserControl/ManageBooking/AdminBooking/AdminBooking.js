import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './adminBooking.css';
import { IconContext } from "react-icons";
import { ImAddressBook } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';
import { MdMarkEmailRead } from 'react-icons/md';


const AdminBooking = (props) => {
    const [bookedPackage,setBookedPackage] = useState({});
    const {pkg_title, pkg_img, cover_area, tour_date, tour_duration} = bookedPackage;
    const {firstName, status, address, email, mobileNumber, _id, booking_pkg_id, user_photo} = props.booking;
    
    useEffect(()=>{
        fetch(`https://fathomless-oasis-64789.herokuapp.com/package/${booking_pkg_id}`)
        .then(res=>res.json())
        .then(data=>setBookedPackage(data))
    },[booking_pkg_id])
    return (
        <Row className="admin-item mb-2 d-flex align-items-center justify-content-center">
            <Col md={5}>
                <Row className="border">
                    <Col>
                        <div className="d-flex justify-content-center">
                            <img className="manage-img img-fluid p-2" src={user_photo} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <h5><strong>{firstName}</strong></h5>
                        <p> 
                            <IconContext.Provider value={{ color: "blue", className: "me-2", size:"20" }}>
                                <ImAddressBook />
                            </IconContext.Provider>
                             {address ? address : "NA"}
                        </p>
                        <p>
                            <IconContext.Provider value={{ color: "blue", className: "me-2", size:"20" }}>
                                <FiPhoneCall />
                            </IconContext.Provider>
                            {mobileNumber ? mobileNumber : "NA"}
                        </p>
                        <p>
                            <IconContext.Provider value={{ color: "blue", className: "me-2", size:"20" }}>
                                <MdMarkEmailRead />
                            </IconContext.Provider>
                            {email}
                        </p>
                    </Col>
                    
                </Row>
            </Col>
            <Col md={5}>
                <Row className="border-top border-bottom border-end">
                    <Col><img className="manage-img img-fluid p-2 " src={pkg_img} alt="" /></Col>
                    <Col>
                        <h5><strong>{pkg_title}</strong></h5>
                        <p>{cover_area}</p>
                        <p>{tour_date}</p>
                        <p>{tour_duration}</p>
                    </Col>
                    
                </Row>
            </Col>
            <Col md={2}>
                <Row>
                    <Col>
                        {
                            status === "Approved" ? <button className="rounded border p-2 px-3 d-block mx-auto mb-2 bg-success" disabled >{status}</button> : <button className="rounded border p-2 px-3 d-block mx-auto mb-2 bg-info" onClick={()=>props.handleBookingStatus(_id)} >Accept Request</button>
                        }
                    </Col>
                    <Col>
                        <button className="rounded border  p-2 px-4 d-block mx-auto bg-danger fw-bold" onClick={()=>props.handleBookingCancle(_id)}>Cancel</button> 
                    </Col>
                    
                </Row>
            </Col>
        </Row>
    );
};

export default AdminBooking;