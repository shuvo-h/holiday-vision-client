import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './booking-form.css'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IconContext } from "react-icons";


const BookingForm = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const [bookingPackage,setBookingPackage] = useState({});
    const {cover_area, meals, pkg_img, pkg_title, pkg_txt, tour_date, tour_duration, _id} = bookingPackage;
    useEffect(()=>{
        fetch(`https://fathomless-oasis-64789.herokuapp.com/package/${id}`)
            .then(res=>res.json())
            .then(data=>setBookingPackage(data))
    },[id])
    
    const onSubmit = bookingInfo => {
        bookingInfo.booking_pkg_id = _id;
        bookingInfo.user_photo = user.photoURL;
        bookingInfo.status = "Pending";
        
        fetch('https://fathomless-oasis-64789.herokuapp.com/booking',{
            method:"POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                alert("booking request accepted. Please wait to accept.")
            }
        })
    };
    return (
        <div className="pkg-details-booking container my-4">
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <div >
                                <h2 className="text-center">{pkg_title}</h2>
                                <h6 className="mt-4">This package cover the following:</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <IconContext.Provider value={{ color: "green", size:"30px", className: "mx-2" }}>
                                            <IoMdCheckmarkCircleOutline />
                                        </IconContext.Provider>
                                        Area Cover : {cover_area}
                                    </li>
                                    <li>
                                        <IconContext.Provider value={{ color: "green", size:"30px", className: "mx-2" }}>
                                            <IoMdCheckmarkCircleOutline />
                                        </IconContext.Provider>
                                        Meal : {meals}
                                    </li>
                                    <li>
                                        <IconContext.Provider value={{ color: "green", size:"30px", className: "mx-2" }}>
                                            <IoMdCheckmarkCircleOutline />
                                        </IconContext.Provider>
                                        Tour Date: {tour_date}
                                    </li>
                                    <li>
                                        <IconContext.Provider value={{ color: "green", size:"30px", className: "mx-2" }}>
                                            <IoMdCheckmarkCircleOutline />
                                        </IconContext.Provider>
                                        Tour duration: {tour_duration}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <img className="pkg-details-img img-fluid p-2 rounded" src={pkg_img} alt="" />
                        </Col>
                    </Row>
                    <p>{pkg_txt}</p>
                </Col>
                <Col>
                    <div className="booking-form mx-auto p-3">
                        <h2 className="text-center">Fillup the Booking form</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="login-form d-flex flex-column" >
                            <label htmlFor="">
                                Name:
                                <input className="m-1 ms-4" {...register("firstName")} value={user.displayName} placeholder="Full name"/>
                            </label> <br />
                            <label htmlFor="">
                                Email Address: 
                                <input className="m-1 ms-4" {...register("email")} value={user.email} placeholder="Email Address"/>
                            </label> <br />
                            <label htmlFor="">
                                Mobile Number: 
                                <input className="m-1 ms-4" {...register("mobileNumber")}  placeholder="Mobile Number" type="number"/>
                            </label><br />
                            <label htmlFor="">
                                Address:
                                <input className="m-1 ms-4" {...register("address")}  placeholder="Address"/>
                            </label><br />
                            <button className="submit-btn border rounded px-4 py-1 m-2 fw-bold text-success"  type="submit">Booking Request</button>
                        </form>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default BookingForm;

